import { Skin } from '../definitions'
import { FlatEnclosure } from './FlatEnclosure'
import { RackButton } from '../racks/RackButton'
import { RackSquareButton } from '../racks/RackSquareButton'
import { RackRoundButton } from '../racks/RackRoundButton'
import { RackSliderTrack } from '../racks/RackSliderTrack'
import { RackSliderTrackFill } from '../racks/RackSliderTrackFill'
import { FlatSliderThumb } from './FlatSliderThumb'
import { FlatKnobBase } from './FlatKnobBase'
import { FlatKnobIndicator } from './FlatKnobIndicator'
import { FlatKnobTick } from './FlatKnobTick'
import { RackStepStep } from '../racks/RackStepStep'

export const flatSkin: Omit<Skin, 'id' | 'name' | 'theme'> = {
    enclosure: FlatEnclosure,
    button: {
        basic: RackButton,
        square: RackSquareButton,
        round: RackRoundButton,
    },
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
    step: {
        step: RackStepStep,
    },
}
