export type PadIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15

export interface PadConfig {
    index: PadIndex
    name: string
    color: string
}

export interface PadsConfig {
    pads: Partial<Record<PadIndex, PadConfig>>
}
