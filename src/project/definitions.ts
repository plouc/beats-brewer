export interface Sample {
    id: string
    name: string
    color: string
    audioFile: string
    start?: number
    end?: number
}

export interface DrumKit {
    id: string
    name: string
    samples: Sample[]
}

export interface SequencerPatternTrack extends Sample {
    isMuted: boolean
    steps: (0 | 1)[]
}

export interface SequencerPattern {
    type: 'sequencer'
    id: string
    name: string
    color: string
    tracks: SequencerPatternTrack[]
}

export type Pattern = SequencerPattern

export type PatternType = SequencerPattern['type']

export interface Channel {
    name: string
}

export interface Project {
    name: string
    bpm: number
    patterns: Pattern[]
}
