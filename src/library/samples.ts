import { v4 as uuidV4 } from 'uuid'
import { Sample } from '../project/definitions'

// console.log(uuidV4())

export const tr808BassDrum1 = require('../audio/tr808/tr808_bass_drum_001.wav').default
export const tr808BassDrum2 = require('../audio/tr808/tr808_bass_drum_002.wav').default
export const tr808Snare1 = require('../audio/tr808/tr808_snare_001.wav').default
export const tr808Snare2 = require('../audio/tr808/tr808_snare_002.wav').default
export const tr808Clap1 = require('../audio/tr808/tr808_clap_001.wav').default
export const tr808Clap2 = require('../audio/tr808/tr808_clap_002.wav').default
export const tr808Rimshot1 = require('../audio/tr808/tr808_rimshot_001.wav').default
export const tr808Rimshot2 = require('../audio/tr808/tr808_rimshot_002.wav').default
export const tr808HiHatOpen1 = require('../audio/tr808/tr808_hihat_open_001.wav').default
export const tr808HiHatOpen2 = require('../audio/tr808/tr808_hihat_open_002.wav').default
export const tr808HiHatClosed1 = require('../audio/tr808/tr808_hihat_closed_001.wav').default
export const tr808HiHatClosed2 = require('../audio/tr808/tr808_hihat_closed_002.wav').default
export const tr808CongasLow1 = require('../audio/tr808/tr808_congas_low_001.wav').default
export const tr808CongasLow2 = require('../audio/tr808/tr808_congas_low_002.wav').default
export const tr808CongasHigh1 = require('../audio/tr808/tr808_congas_high_001.wav').default
export const tr808CongasHigh2 = require('../audio/tr808/tr808_congas_high_002.wav').default

const kickColor = '#49c19b'
const snareColor = '#6a9e6a'
const clapColor = '#d0aa4c'
const rimshotColor = '#b67892'
const hiHatColor = '#95758c'
const congasColor = '#743c29'

export const samples: Sample[] = [
    {
        id: uuidV4(),
        name: 'TR-808 Bass Drum 1',
        color: kickColor,
        audioFile: tr808BassDrum1,
    },
    {
        id: uuidV4(),
        name: 'TR-808 Bass Drum 2',
        color: kickColor,
        audioFile: tr808BassDrum2,
    },
    {
        id: uuidV4(),
        name: 'TR-808 Snare 1',
        color: snareColor,
        audioFile: tr808Snare1,
    },
    {
        id: uuidV4(),
        name: 'TR-808 Snare 2',
        color: snareColor,
        audioFile: tr808Snare2,
    },
    {
        id: uuidV4(),
        name: 'TR-808 Clap 1',
        color: clapColor,
        audioFile: tr808Clap1,
    },
    {
        id: uuidV4(),
        name: 'TR-808 Clap 2',
        color: clapColor,
        audioFile: tr808Clap2,
    },
    {
        id: uuidV4(),
        name: 'TR-808 Rimshot 1',
        color: rimshotColor,
        audioFile: tr808Rimshot1,
    },
    {
        id: uuidV4(),
        name: 'TR-808 Rimshot 2',
        color: rimshotColor,
        audioFile: tr808Rimshot2,
    },
    {
        id: uuidV4(),
        name: 'TR-808 HiHat Open 1',
        color: hiHatColor,
        audioFile: tr808HiHatOpen1,
    },
    {
        id: uuidV4(),
        name: 'TR-808 HiHat Open 2',
        color: hiHatColor,
        audioFile: tr808HiHatOpen2,
    },
    {
        id: uuidV4(),
        name: 'TR-808 HiHat Closed 1',
        color: hiHatColor,
        audioFile: tr808HiHatClosed1,
    },
    {
        id: uuidV4(),
        name: 'TR-808 HiHat Closed 2',
        color: hiHatColor,
        audioFile: tr808HiHatClosed2,
    },
    {
        id: uuidV4(),
        name: 'TR-808 Congas Low 1',
        color: congasColor,
        audioFile: tr808CongasLow1,
    },
    {
        id: uuidV4(),
        name: 'TR-808 Congas Low 2',
        color: congasColor,
        audioFile: tr808CongasLow2,
    },
    {
        id: uuidV4(),
        name: 'TR-808 Congas High 1',
        color: congasColor,
        audioFile: tr808CongasHigh1,
    },
    {
        id: uuidV4(),
        name: 'TR-808 Congas High 2',
        color: congasColor,
        audioFile: tr808CongasHigh2,
    },
]

export const sampleByName = (sampleName: string): Sample => {
    const sample = samples.find((s) => s.name === sampleName)
    if (sample === undefined) {
        throw new Error(`no sample found for name: ${sampleName}`)
    }

    return sample
}
