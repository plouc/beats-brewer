import { Skin } from '../definitions'
import { RackEnclosure } from './RackEnclosure'
import { RackKnobBase } from './RackKnobBase'
import { RackKnobIndicator } from './RackKnobIndicator'
import { RackKnobTick } from './RackKnobTick'

export const racksSkin: Omit<Skin, 'id' | 'name' | 'theme'> = {
    enclosure: RackEnclosure,
    knob: {
        base: RackKnobBase,
        indicator: RackKnobIndicator,
        tick: RackKnobTick,
    },
}
