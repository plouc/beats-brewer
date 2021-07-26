import * as Tone from 'tone'

export interface ReverbData {
    id: string
    type: 'reverb'
    wet: number
    preDelay: number
    decay: number
}

export interface Reverb extends ReverbData {
    instance: Tone.Reverb
}

export interface DistortionData {
    id: string
    type: 'distortion'
    wet: number
    distortion: number
}

export interface Distortion extends DistortionData {
    instance: Tone.Distortion
}

export type EffectData = ReverbData | DistortionData

export type Effect = Reverb | Distortion

export type EffectType = Effect['type']
