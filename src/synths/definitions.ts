import * as Tone from 'tone'

export const synthByType: Record<string, any> = {
    am: Tone.AMSynth,
    duo: Tone.DuoSynth,
    fm: Tone.FMSynth,
    membrane: Tone.MembraneSynth,
    metal: Tone.MetalSynth,
    mono: Tone.MonoSynth,
    // noise: Tone.NoiseSynth,
    pluck: Tone.PluckSynth,
    poly: Tone.PolySynth,
    // default: Tone.Synth
} as const

export type SynthType = keyof typeof synthByType

export const SYNTH_TYPES: SynthType[] = Object.keys(synthByType)
