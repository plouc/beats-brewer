import * as Tone from 'tone'

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

export interface SequencerPatternTrackData extends Sample {
    channel: number
    isMuted: boolean
    steps: (0 | 1)[]
}

export interface SequencerPatternTrack extends SequencerPatternTrackData {
    player: Tone.Player
}

export interface SequencerPatternData {
    type: 'sequencer'
    id: string
    name: string
    color: string
    tracks: SequencerPatternTrackData[]
}

export interface SequencerPattern extends Omit<SequencerPatternData, 'tracks'> {
    tracks: SequencerPatternTrack[]
}

export type PatternData = SequencerPatternData

export type Pattern = SequencerPattern

export type PatternType = SequencerPatternData['type']

export type ChannelSource = SequencerPatternTrack

export interface ChannelData {
    sources: ChannelSource[]
}

export interface Channel extends ChannelData {
    channel: Tone.Channel
}

/**
 * Project data, suitable for storage
 */
export interface ProjectData {
    id: string
    name: string
    bpm: number
    patterns: PatternData[]
}

/**
 * Loaded project, suitable for usage in the app
 */
export interface Project extends Omit<ProjectData, 'patterns'> {
    patterns: Pattern[]
}
