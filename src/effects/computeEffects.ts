import * as Tone from 'tone'
import { Effect, EffectData } from './definitions'

export const computeEffect = (effect: EffectData): Effect => {
    switch (effect.type) {
        case 'distortion':
            const distortion = new Tone.Distortion(effect.distortion)
            distortion.wet.value = effect.wet

            return { ...effect, instance: distortion }

        case 'reverb':
            const reverb = new Tone.Reverb(effect.decay)
            reverb.preDelay = effect.preDelay
            reverb.wet.value = effect.wet

            return { ...effect, instance: reverb }
    }
}
