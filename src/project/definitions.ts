import * as Tone from 'tone'
import { EffectData, Effect } from '../effects/definitions'

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
    effects: EffectData[]
}

export interface Channel {
    channel: Tone.Channel
    effects: Effect[]
    sources: ChannelSource[]
}

export interface TrackPatternData {
    patternId: string
    // Tone.Time supports several notations
    start: number | string
    end: number | string
}

export interface TrackData {
    patterns: TrackPatternData[]
}

/**
 * Project data, serialized version of a project,
 * suitable for storage.
 */
export interface ProjectData {
    id: string
    name: string
    bpm: number
    tracks: TrackData[]
    patterns: PatternData[]
    channels: ChannelData[]
}

/**
 * Loaded project, suitable for usage in the app,
 * cannot be stored as is.
 */
export interface Project extends Omit<ProjectData, 'patterns'> {
    patterns: Pattern[]
}
