import { DrumsConfig } from '../drums/definitions'
const audioFile = require('../audio/demo.wav').default

export const defaultDrumPreset: DrumsConfig = {
    audioFile: audioFile,
    pads: {
        0: {
            index: 0,
            name: 'Kicks',
            color: '#cb7049',
            start: 0,
            end: 1,
        },
        1: {
            index: 1,
            name: 'Claps',
            color: '#629ea0',
            start: 1,
            end: 2,
        },
        2: {
            index: 2,
            name: 'Hats',
            color: '#7bb392',
            start: 2,
            end: 3,
        },
    },
}
