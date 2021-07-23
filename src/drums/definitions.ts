import { PadIndex, PadsConfig, PadConfig } from '../pads/definitions'

export interface DrumPadConfig extends PadConfig {
    start: number
    end: number
}

export interface DrumsConfig extends Omit<PadsConfig, 'pads'> {
    audioFile: string
    pads: Partial<Record<PadIndex, DrumPadConfig>>
}
