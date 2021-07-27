import create from 'zustand'
import { DefaultTheme } from 'styled-components'
import * as Tone from 'tone'
import { v4 as uuidV4 } from 'uuid'
import { ProjectData, Project, Pattern, Channel } from './project/definitions'
import { Effect } from './effects/definitions'
import { darkTheme } from './ui/theme/darkTheme'
import { lightTheme } from './ui/theme/lightTheme'
import { monoRedTheme } from './ui/theme/monoRedTheme'

interface AppStore {
    theme: DefaultTheme
    setTheme: (theme: DefaultTheme) => void
    bpm: number
    setBpm: (bpm: number) => void
    project?: Project
    createEmptyProject: () => void
    loadProject: (projectData: ProjectData) => void
    openedPatterns: Pattern[]
    openPattern: (patternId: string) => void
    closePattern: (patternId: string) => void
    master: Tone.Channel
    channels: Channel[]
    updateChannel: (channel: Channel, channelIndex: number) => void
    highlightedChannel: number
    highlightChannel: (channelIndex: number) => void
    allEffects: Effect[]
    openedEffects: Effect[]
    openEffect: (effectId: string) => void
    closeEffect: (effectId: string) => void
}

const DEFAULT_BPM = 130

export const useAppStore = create<AppStore>((set, get) => ({
    theme: lightTheme,
    setTheme: (theme: DefaultTheme) => set({ theme }),
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
                patterns: [],
            },
            openedPatterns: [],
        })
    },
    loadProject: (projectData: ProjectData) => {
        const currentProject = get().project

        // do not re-open current project
        if (currentProject !== undefined && currentProject.id === projectData.id) return

        Tone.start()
        Tone.Transport.bpm.value = projectData.bpm

        get().channels.forEach((channel, channelIndex) => {
            get().updateChannel(channel, channelIndex)
        })

        // convert the project data to a usable loaded project
        const project = {
            ...projectData,
            patterns: projectData.patterns.map((patternData) => {
                return {
                    ...patternData,
                    tracks: patternData.tracks.map((trackData) => {
                        const channel = get().channels[trackData.channel]
                        if (channel === undefined) {
                            throw new Error(
                                `channel ${trackData.channel} does not exist for track "${patternData.name} > ${trackData.name}" (id: ${trackData.id})`
                            )
                        }

                        const trackPlayer = new Tone.Player(trackData.audioFile, () => {
                            console.log(`[loaded] ${patternData.name}/${trackData.name}`)
                        })
                        trackPlayer.connect(channel.channel)

                        return {
                            ...trackData,
                            player: trackPlayer,
                        }
                    }),
                }
            }),
        }

        set({ project, bpm: project.bpm, openedPatterns: [] })

        // open the first pattern, maybe something we won't keep in the long term,
        // but it's easier to get started this way
        if (project.patterns.length > 0) {
            get().openPattern(project.patterns[0].id)
        }
    },
    openedPatterns: [],
    openPattern: (patternId: string) => {
        // no loaded project
        const project = get().project
        if (!project) return

        // pattern already open
        if (get().openedPatterns.find((p) => p.id === patternId)) return

        // pattern not found
        const pattern = project.patterns.find((p) => p.id === patternId)
        if (!pattern) return

        set({
            openedPatterns: [...get().openedPatterns, pattern],
        })
    },
    closePattern: (patternId: string) => {
        set({
            openedPatterns: get().openedPatterns.filter((pattern) => pattern.id !== patternId),
        })
    },
    master: new Tone.Channel().toDestination(),
    channels: [
        {
            channel: new Tone.Channel(),
            sources: [],
            effectConfigs: [
                {
                    id: '64e8dc74-fbb5-4dbd-9107-2cebed7d9676',
                    type: 'distortion',
                    acronym: 'DIS',
                    wet: 0.6,
                    distortion: 1,
                },
                {
                    id: 'ecc6f983-c637-4507-874e-b924ec4a05d2',
                    type: 'reverb',
                    acronym: 'REV',
                    wet: 0.15,
                    preDelay: 0,
                    decay: 1,
                },
            ],
            effects: [],
        },
        {
            channel: new Tone.Channel(),
            sources: [],
            effectConfigs: [
                {
                    id: 'b32a0c32-2e3f-45f0-b4fe-c89f28fe50a1',
                    type: 'reverb',
                    acronym: 'REV',
                    wet: 0.4,
                    preDelay: 0,
                    decay: 0.6,
                },
            ],
            effects: [],
        },
        {
            channel: new Tone.Channel(),
            sources: [],
            effectConfigs: [
                {
                    id: 'be1264d2-c1ff-4f5c-b259-7e37e7bff7fb',
                    type: 'reverb',
                    acronym: 'REV',
                    wet: 0.5,
                    preDelay: 0,
                    decay: 3,
                },
            ],
            effects: [],
        },
        {
            channel: new Tone.Channel(),
            sources: [],
            effectConfigs: [],
            effects: [],
        },
        {
            channel: new Tone.Channel(),
            sources: [],
            effectConfigs: [],
            effects: [],
        },
        {
            channel: new Tone.Channel(),
            sources: [],
            effectConfigs: [],
            effects: [],
        },
        {
            channel: new Tone.Channel(),
            sources: [],
            effectConfigs: [],
            effects: [],
        },
        {
            channel: new Tone.Channel(),
            sources: [],
            effectConfigs: [],
            effects: [],
        },
    ],
    updateChannel: (channel: Channel, channelIndex: number) => {
        const master = get().master

        let destination: Tone.ToneAudioNode = master
        const effects: Effect[] = []
        channel.effectConfigs.forEach((effect) => {
            if (effect.type === 'reverb') {
                console.log(
                    `[effect] reverb on channel ${channelIndex} (decay: ${effect.decay}, preDelay: ${effect.preDelay},  wet: ${effect.wet})`
                )

                const reverb = new Tone.Reverb(effect.decay)
                reverb.preDelay = effect.preDelay
                reverb.wet.value = effect.wet

                reverb.connect(destination)
                destination = reverb

                const appliedEffect: Effect = { ...effect, instance: reverb }
                effects.push(appliedEffect)
            } else if (effect.type === 'distortion') {
                console.log(
                    `[effect] distortion on channel ${channelIndex} (distortion: ${effect.distortion},  wet: ${effect.wet})`
                )

                const distortion = new Tone.Distortion(effect.distortion)
                distortion.wet.value = effect.wet

                distortion.connect(destination)
                destination = distortion

                const appliedEffect: Effect = { ...effect, instance: distortion }
                effects.push(appliedEffect)
            }
        })

        console.log(`[connected] channel ${channelIndex}`)
        channel.channel.connect(destination)

        set({
            channels: get().channels.map((channel, index) => {
                if (index !== channelIndex) return channel

                return { ...channel, effects }
            }),
            allEffects: [...get().allEffects, ...effects],
        })
    },
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
}))
