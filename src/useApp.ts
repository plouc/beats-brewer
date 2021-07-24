import create from 'zustand'
import { DefaultTheme } from 'styled-components'
import * as Tone from 'tone'
import { Project, Pattern } from './project/definitions'
import { darkTheme } from './ui/theme/darkTheme'

interface AppStore {
    theme: DefaultTheme
    setTheme: (theme: DefaultTheme) => void
    bpm: number
    setBpm: (bpm: number) => void
    project?: Project
    createEmptyProject: () => void
    loadProject: (project: Project) => void
    openedPatterns: Pattern[]
    openPattern: (patternId: string) => void
    closePattern: (patternId: string) => void
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
        Tone.Transport.bpm.value = DEFAULT_BPM
        set({
            bpm: DEFAULT_BPM,
            project: {
                name: 'New Project',
                bpm: DEFAULT_BPM,
                patterns: [],
            },
            openedPatterns: [],
        })
    },
    loadProject: (project: Project) => {
        Tone.Transport.bpm.value = project.bpm
        set({ project, bpm: project.bpm, openedPatterns: [] })
    },
    openedPatterns: [],
    openPattern: (patternId: string) => {
        // already open
        if (get().openedPatterns.find((p) => p.id === patternId)) return

        // no project
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
}))
