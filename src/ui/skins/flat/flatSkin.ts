import { Skin } from '../definitions'
import { FlatEnclosure } from './FlatEnclosure'
import { FlatButton } from './FlatButton'
import { FlatSquareButton } from './FlatSquareButton'
import { FlatRoundButton } from './FlatRoundButton'
import { RackSliderTrack } from '../racks/RackSliderTrack'
import { RackSliderTrackFill } from '../racks/RackSliderTrackFill'
import { FlatSliderThumb } from './FlatSliderThumb'
import { FlatKnobBase } from './FlatKnobBase'
import { FlatKnobIndicator } from './FlatKnobIndicator'
import { FlatKnobTick } from './FlatKnobTick'
import { FlatStepStep } from './FlatStepStep'

export const flatSkin: Omit<Skin, 'id' | 'name' | 'theme'> = {
    enclosure: FlatEnclosure,
    button: {
        basic: FlatButton,
        square: FlatSquareButton,
        round: FlatRoundButton,
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
        step: FlatStepStep,
    },
}
