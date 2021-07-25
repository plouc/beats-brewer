import create from 'zustand'
import { DefaultTheme } from 'styled-components'
import * as Tone from 'tone'
import { v4 as uuidV4 } from 'uuid'
import { ProjectData, Project, Pattern, Channel } from './project/definitions'
import { darkTheme } from './ui/theme/darkTheme'

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
}

const DEFAULT_BPM = 130

export const useAppStore = create<AppStore>((set, get) => ({
    theme: darkTheme,
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

        // connect each channel to the master channel
        const master = get().master
        const channels = get().channels
        channels.forEach((channel) => {
            channel.channel.connect(master)
        })

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
        // pattern already open
        if (get().openedPatterns.find((p) => p.id === patternId)) return

        // no loaded project
        const project = get().project
        if (!project) return

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
        },
        {
            channel: new Tone.Channel(),
            sources: [],
        },
        {
            channel: new Tone.Channel(),
            sources: [],
        },
        {
            channel: new Tone.Channel(),
            sources: [],
        },
        {
            channel: new Tone.Channel(),
            sources: [],
        },
        {
            channel: new Tone.Channel(),
            sources: [],
        },
        {
            channel: new Tone.Channel(),
            sources: [],
        },
        {
            channel: new Tone.Channel(),
            sources: [],
        },
    ],
}))
