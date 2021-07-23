import { PadIndex } from './definitions'

export const PAD_COUNT = 16

export const PAD_INDEXES: PadIndex[] = Array.from({ length: PAD_COUNT }).map(
    (_, index) => index as PadIndex
)

export const PAD_SIZE = 52
export const PAD_GUTTER = 9
