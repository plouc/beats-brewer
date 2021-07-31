import { Skin } from '../definitions'
import { RackEnclosure } from './RackEnclosure'
import { RackSliderThumb } from './RackSliderThumb'
import { RackKnobBase } from './RackKnobBase'
import { RackKnobIndicator } from './RackKnobIndicator'
import { FlatKnobTick } from '../flat/FlatKnobTick'

export const racksSkin: Omit<Skin, 'id' | 'name' | 'theme'> = {
    enclosure: RackEnclosure,
    slider: {
        thumb: RackSliderThumb,
    },
    knob: {
        base: RackKnobBase,
        indicator: RackKnobIndicator,
        tick: FlatKnobTick,
    },
}
