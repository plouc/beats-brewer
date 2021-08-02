import create from 'zustand'
import * as Tone from 'tone'
import { v4 as uuidV4 } from 'uuid'
import {
    ProjectData,
    Project,
    Channel,
    ChannelData,
    SequencerPatternTrack,
} from '../project/definitions'
import { samples } from '../library/samples'
import { Effect, EffectType } from '../effects/definitions'
import { Skin } from '../ui/skins/definitions'
import { skins } from '../ui/skins/skins'

interface AppStore {
    skin: Skin
    setSkin: (skin: Skin) => void
    bpm: number
    setBpm: (bpm: number) => void
    project?: Project
    createEmptyProject: () => void
    loadProject: (projectData: ProjectData) => void
    openedPatternId: string | null
    openPattern: (patternId: string) => void
    closePattern: (patternId: string) => void
    setSequencerPatternTracks: (patternId: string, tracks: SequencerPatternTrack[]) => void
    updateSequencerPatternTrackSample: (
        patternId: string,
        trackId: string,
        sampleId: string
    ) => void
    master: Tone.Channel
    channels: Channel[]
    highlightedChannel: number
    highlightChannel: (channelIndex: number) => void
    allEffects: Effect[]
    openedEffects: Effect[]
    openEffect: (effectId: string) => void
    closeEffect: (effectId: string) => void
    addEffectToChannel: (effectType: EffectType, channelIndex: number) => void
    tracks: any[]
}

const DEFAULT_BPM = 130

const computeChannels = (
    channels: Channel[],
    projectChannels: ChannelData[],
    master: Tone.Channel
): [Channel[], Effect[]] => {
    const newChannels: Channel[] = []
    let allEffects: Effect[] = []

    channels.forEach((channel, channelIndex) => {
        let destination: Tone.ToneAudioNode = master
        let effects: Effect[] = []

        const projectChannel = projectChannels[channelIndex]

        if (projectChannel !== undefined) {
            projectChannel.effects.forEach((effect) => {
                if (effect.type === 'reverb') {
                    console.log(
                        `[effect] reverb on channel ${channelIndex} (decay: ${effect.decay}, preDelay: ${effect.preDelay},  wet: ${effect.wet})`
                    )

                    const reverb = new Tone.Reverb(effect.decay)
                    reverb.preDelay = effect.preDelay
                    reverb.wet.value = effect.wet

                    reverb.connect(destination)
                    destination = reverb

                    effects.push({ ...effect, instance: reverb })
                } else if (effect.type === 'distortion') {
                    console.log(
                        `[effect] distortion on channel ${channelIndex} (distortion: ${effect.distortion},  wet: ${effect.wet})`
                    )

                    const distortion = new Tone.Distortion(effect.distortion)
                    distortion.wet.value = effect.wet

                    distortion.connect(destination)
                    destination = distortion

                    effects.push({ ...effect, instance: distortion })
                }
            })
        }

        channel.channel.connect(destination)

        const chain = ['master', ...effects.map((effect) => effect.type)]
        console.log(`[connected] channel ${channelIndex} | ${chain.join(' <- ')}`)

        newChannels.push({
            ...channel,
            effects,
        })
        allEffects = [...allEffects, ...effects]
    })

    return [newChannels, allEffects]
}

export const useAppStore = create<AppStore>((set, get) => ({
    skin: skins.find((skin) => skin.id === 'flat:red')!,
    setSkin: (skin: Skin) => set({ skin }),
    bpm: DEFAULT_BPM,
    setBpm: (bpm: number) => {
        Tone.Transport.bpm.value = bpm
        set({ bpm })
    },
    createEmptyProject: () => {
        Tone.start()
        Tone.Transport.bpm.value = DEFAULT_BPM
        set({
            bpm: DEFAULT_BPM,
            project: {
                id: uuidV4(),
                name: 'New Project',
                bpm: DEFAULT_BPM,
                tracks: [
                    {
                        patterns: [],
                    },
                    {
                        patterns: [],
                    },
                    {
                        patterns: [],
                    },
                    {
                        patterns: [],
                    },
                ],
                patterns: [],
                channels: [],
            },
            openedPatternId: null,
        })
    },
    loadProject: (projectData: ProjectData) => {
        const currentProject = get().project

        // do not re-open current project
        if (currentProject !== undefined && currentProject.id === projectData.id) return

        Tone.start()
        Tone.Transport.bpm.value = projectData.bpm

        const [channels, allEffects] = computeChannels(
            get().channels,
            projectData.channels,
            get().master
        )

        // convert the project data to a usable loaded project
        const project = {
            ...projectData,
            patterns: projectData.patterns.map((patternData) => {
                return {
                    ...patternData,
                    tracks: patternData.tracks.map((trackData) => {
                        const channel = channels[trackData.channel]
                        if (channel === undefined) {
                            throw new Error(
                                `channel ${trackData.channel} does not exist for track "${patternData.name} > ${trackData.name}" (id: ${trackData.id})`
                            )
                        }

                        const trackPlayer = new Tone.Player(trackData.audioFile, () => {
                            console.log(`[loaded] ${patternData.name}/${trackData.name}`)
                        })

                        trackPlayer.connect(channel.channel)
                        console.log(
                            `[pattern] connected ${patternData.name}/${trackData.name} to channel ${trackData.channel}`
                        )

                        return {
                            ...trackData,
                            player: trackPlayer,
                        }
                    }),
                }
            }),
        }

        set({
            project,
            bpm: project.bpm,
            openedPatternId: null,
            channels,
            allEffects,
            tracks: projectData.tracks,
        })

        // open the first pattern, maybe something we won't keep in the long term,
        // but it's easier to get started this way
        if (project.patterns.length > 0) {
            get().openPattern(project.patterns[0].id)
        }
    },
    openedPatternId: null,
    openPattern: (patternId: string) => {
        // no loaded project
        const project = get().project
        if (!project) return

        // pattern already open
        if (get().openedPatternId === patternId) return

        // pattern not found
        const pattern = project.patterns.find((p) => p.id === patternId)
        if (!pattern) return

        set({
            openedPatternId: patternId,
        })
    },
    closePattern: () => {
        set({ openedPatternId: null })
    },
    setSequencerPatternTracks: (patternId: string, tracks: SequencerPatternTrack[]) => {
        // no loaded project
        const project = get().project
        if (!project) return

        set({
            project: {
                ...project,
                patterns: project.patterns.map((pattern) => {
                    if (pattern.id !== patternId) return pattern
                    if (pattern.type !== 'sequencer') return pattern

                    return { ...pattern, tracks }
                }),
            },
        })
    },
    updateSequencerPatternTrackSample: (patternId: string, trackId: string, sampleId: string) => {
        // no loaded project
        const project = get().project
        if (!project) return

        // pattern not found
        const pattern = project.patterns.find((p) => p.id === patternId)
        if (!pattern) return

        // track not found
        const track = pattern.tracks.find((t) => t.id === trackId)
        if (!track) return

        // track channel not found
        const channel = get().channels.find((_, index) => index === track.channel)
        if (!channel) return

        // sample not found
        const sample = samples.find((s) => s.id === sampleId)
        if (!sample) return

        // cleanup old player
        track.player.disconnect(channel.channel)
        track.player.dispose()

        // create new player
        const player = new Tone.Player(sample.audioFile)
        player.connect(channel.channel)

        const updatedTrack: SequencerPatternTrack = {
            ...track,
            name: sample.name,
            color: sample.color,
            audioFile: sample.audioFile,
            player,
        }

        set({
            project: {
                ...project,
                patterns: project.patterns.map((p) => {
                    if (p.id !== patternId) return p

                    return {
                        ...p,
                        tracks: pattern.tracks.map((t) => {
                            if (t.id !== trackId) return t
                            return updatedTrack
                        }),
                    }
                }),
            },
        })
    },
    master: new Tone.Channel().toDestination(),
    channels: [
        {
            channel: new Tone.Channel(),
            effects: [],
            sources: [],
        },
        {
            channel: new Tone.Channel(),
            effects: [],
            sources: [],
        },
        {
            channel: new Tone.Channel(),
            effects: [],
            sources: [],
        },
        {
            channel: new Tone.Channel(),
            effects: [],
            sources: [],
        },
        {
            channel: new Tone.Channel(),
            effects: [],
            sources: [],
        },
        {
            channel: new Tone.Channel(),
            effects: [],
            sources: [],
        },
        {
            channel: new Tone.Channel(),
            effects: [],
            sources: [],
        },
        {
            channel: new Tone.Channel(),
            effects: [],
            sources: [],
        },
    ],
    highlightedChannel: -1,
    highlightChannel: (channelIndex: number) => {
        set({ highlightedChannel: channelIndex })
    },
    allEffects: [],
    openedEffects: [],
    openEffect: (effectId: string) => {
        // no loaded project
        const project = get().project
        if (!project) return

        // effect already open
        if (get().openedEffects.find((e) => e.id === effectId)) return

        // effect not found
        const effect = get().allEffects.find((e) => e.id === effectId)
        if (!effect) return

        set({
            openedEffects: [...get().openedEffects, effect],
        })
    },
    closeEffect: (effectId: string) => {
        set({
            openedEffects: get().openedEffects.filter((effect) => effect.id !== effectId),
        })
    },
    addEffectToChannel: (effectType: EffectType, channelIndex: number) => {
        const channels = get().channels
        const channel: Channel | undefined = channels[channelIndex]

        // channel does not exist
        if (channel === undefined) return

        let effect: Effect | undefined = undefined
        let instance: Tone.Distortion | Tone.Reverb
        switch (effectType) {
            case 'distortion':
                instance = new Tone.Distortion()
                effect = {
                    id: uuidV4(),
                    type: effectType,
                    acronym: 'DIS',
                    wet: instance.wet.value,
                    distortion: instance.distortion,
                    instance,
                }
                break

            case 'reverb':
                instance = new Tone.Reverb()
                effect = {
                    id: uuidV4(),
                    type: effectType,
                    acronym: 'REV',
                    wet: instance.wet.value,
                    decay: Number(instance.decay),
                    preDelay: Number(instance.preDelay),
                    instance,
                }
                break
        }

        if (effect === undefined) return

        // now we need to connect the effect to the channel,
        // disconnecting the last effect from the master,
        // and introducing it instead
        const master = get().master
        const lastEffect = channel.effects[channel.effects.length - 1]

        if (lastEffect !== undefined) {
            // has effect
            lastEffect.instance.disconnect(master)
            lastEffect.instance.connect(effect.instance)
        } else {
            // no effect
            channel.channel.disconnect(master)
            channel.channel.connect(effect.instance)
        }

        // connect the new effect to the master
        effect.instance.connect(master)

        const effects: Effect[] = [...channel.effects, effect]
        const chain = ['master', ...effects.map((effect) => effect.type)]
        console.log(`[effects] channel ${channelIndex} | ${chain.join(' <- ')}`)

        set({
            allEffects: [...get().allEffects, effect],
            openedEffects: [...get().openedEffects, effect],
            channels: channels.map((chan, index) => {
                if (index !== channelIndex) return chan

                return { ...channel, effects }
            }),
        })
    },
    tracks: [],
}))
