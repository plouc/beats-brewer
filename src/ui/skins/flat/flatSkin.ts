import { Skin } from '../definitions'
import { FlatEnclosure } from './FlatEnclosure'
import { RackSliderTrack } from '../racks/RackSliderTrack'
import { RackSliderTrackFill } from '../racks/RackSliderTrackFill'
import { FlatSliderThumb } from './FlatSliderThumb'
import { FlatKnobBase } from './FlatKnobBase'
import { FlatKnobIndicator } from './FlatKnobIndicator'
import { FlatKnobTick } from './FlatKnobTick'

export const flatSkin: Omit<Skin, 'id' | 'name' | 'theme'> = {
    enclosure: FlatEnclosure,
    slider: {
        track: RackSliderTrack,
        trackFill: RackSliderTrackFill,
        thumb: FlatSliderThumb,
    },
    knob: {
        base: FlatKnobBase,
        indicator: FlatKnobIndicator,
        tick: FlatKnobTick,
    },
}
