import { Skin } from '../definitions'
import { RawEnclosure } from './RawEnclosure'
import { RawButton } from './RawButton'
import { RawSquareButton } from './RawSquareButton'
import { RawRoundButton } from './RawRoundButton'
import { RawSliderTrack } from './RawSliderTrack'
import { RawSliderTrackFill } from './RawSliderTrackFill'
import { RawSliderThumb } from './RawSliderThumb'
import { RawKnobBase } from './RawKnobBase'
import { RawKnobIndicator } from './RawKnobIndicator'
import { RawKnobTick } from './RawKnobTick'
import { RawStepStep } from './RawStepStep'

export const rawSkin: Omit<Skin, 'id' | 'name' | 'theme'> = {
    enclosure: RawEnclosure,
    button: {
        basic: RawButton,
        square: RawSquareButton,
        round: RawRoundButton,
    },
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
    step: {
        step: RawStepStep,
    },
}
