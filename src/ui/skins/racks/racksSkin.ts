import { Skin } from '../definitions'
import { RackEnclosure } from './RackEnclosure'
import { RackButton } from './RackButton'
import { RackSquareButton } from './RackSquareButton'
import { RackRoundButton } from './RackRoundButton'
import { RackSliderTrack } from './RackSliderTrack'
import { RackSliderTrackFill } from './RackSliderTrackFill'
import { RackSliderThumb } from './RackSliderThumb'
import { RackKnobBase } from './RackKnobBase'
import { RackKnobIndicator } from './RackKnobIndicator'
import { FlatKnobTick } from '../flat/FlatKnobTick'
import { RackStepStep } from './RackStepStep'

export const racksSkin: Omit<Skin, 'id' | 'name' | 'theme'> = {
    enclosure: RackEnclosure,
    button: {
        basic: RackButton,
        square: RackSquareButton,
        round: RackRoundButton,
    },
    slider: {
        track: RackSliderTrack,
        trackFill: RackSliderTrackFill,
        thumb: RackSliderThumb,
    },
    knob: {
        base: RackKnobBase,
        indicator: RackKnobIndicator,
        tick: FlatKnobTick,
    },
    step: {
        step: RackStepStep,
    },
}
