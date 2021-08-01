import { Skin } from '../definitions'
import { RawEnclosure } from './RawEnclosure'
import { RawSliderTrack } from './RawSliderTrack'
import { RawSliderTrackFill } from './RawSliderTrackFill'
import { RawSliderThumb } from './RawSliderThumb'
import { RawKnobBase } from './RawKnobBase'
import { RawKnobIndicator } from './RawKnobIndicator'
import { RawKnobTick } from './RawKnobTick'

export const rawSkin: Omit<Skin, 'id' | 'name' | 'theme'> = {
    enclosure: RawEnclosure,
    slider: {
        track: RawSliderTrack,
        trackFill: RawSliderTrackFill,
        thumb: RawSliderThumb,
    },
    knob: {
        base: RawKnobBase,
        indicator: RawKnobIndicator,
        tick: RawKnobTick,
    },
}
