import { ProjectData, SequencerPatternData } from '../project/definitions'
import { sampleByName } from './samples'

const patternA: SequencerPatternData = {
    type: 'sequencer',
    id: 'fbb33684-57cd-46b2-95a7-3900a53bb393',
    name: 'Drums 1',
    color: '#3aa878',
    tracks: [
        {
            ...sampleByName('TR-808 Bass Drum 1'),
            id: 'c4893926-5725-40e4-a6b6-94addeb64ab8',
            channel: 0,
            isMuted: false,
            steps: [
                1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
                1, 0, 1, 0,
            ],
        },
        {
            ...sampleByName('TR-808 Snare 1'),
            id: '9e78f23f-f0ed-4a80-8e52-57c8a8735746',
            channel: 1,
            isMuted: false,
            steps: [
                0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0,
            ],
        },
        {
            ...sampleByName('TR-808 Clap 1'),
            id: '9476ae21-c02f-4098-a93e-c6a4cb9b0c42',
            channel: 1,
            isMuted: false,
            steps: [
                0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0,
                1, 0, 1, 1,
            ],
        },
        {
            ...sampleByName('TR-808 Rimshot 1'),
            id: '9d6848d9-fcaa-45d8-a432-f92c86b862bb',
            channel: 0,
            isMuted: true,
            steps: [
                0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1,
                1, 1, 1, 1,
            ],
        },
        {
            ...sampleByName('TR-808 HiHat Closed 1'),
            id: '88c22c47-645a-4749-9a19-d49b0388c0e5',
            channel: 0,
            isMuted: false,
            steps: [
                1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                1, 0, 1, 1,
            ],
        },
        {
            ...sampleByName('TR-808 Congas Low 1'),
            id: '73978bee-3282-46ec-881d-8713028e2569',
            channel: 2,
            isMuted: false,
            steps: [
                1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1,
                0, 1, 0, 0,
            ],
        },
        {
            ...sampleByName('TR-808 Congas High 1'),
            id: 'ce7c3273-0843-4fa2-95e5-9cad5b1bbee3',
            channel: 2,
            isMuted: false,
            steps: [
                0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0,
                0, 0, 1, 1,
            ],
        },
    ],
}

const patternB: SequencerPatternData = {
    type: 'sequencer',
    id: '977a4628-129e-47f5-af01-1013426ac58a',
    name: 'Drums 2',
    color: '#3aa878',
    tracks: [
        {
            ...sampleByName('TR-808 Bass Drum 1'),
            id: '097ca4cd-fc1f-419a-8527-565d2c9d4ff5',
            channel: 0,
            isMuted: false,
            steps: [
                1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
                1, 0, 0, 0,
            ],
        },
        {
            ...sampleByName('TR-808 Congas Low 1'),
            id: '73978bee-3282-46ec-881d-8713028e2569',
            channel: 2,
            isMuted: false,
            steps: [
                1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1,
                0, 1, 0, 0,
            ],
        },
        {
            ...sampleByName('TR-808 Congas High 1'),
            id: 'ce7c3273-0843-4fa2-95e5-9cad5b1bbee3',
            channel: 2,
            isMuted: false,
            steps: [
                0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0,
                0, 0, 1, 1,
            ],
        },
    ],
}

export const demoProject: ProjectData = {
    id: '11af1d60-23fc-4b53-b1b1-b10ce69ad292',
    name: 'Demo Project 1',
    bpm: 120,
    patterns: [patternA, patternB],
    channels: [
        {
            effects: [
                {
                    id: '64e8dc74-fbb5-4dbd-9107-2cebed7d9676',
                    type: 'distortion',
                    acronym: 'DIS',
                    wet: 0.6,
                    distortion: 1,
                },
                {
                    id: 'ecc6f983-c637-4507-874e-b924ec4a05d2',
                    type: 'reverb',
                    acronym: 'REV',
                    wet: 0.15,
                    preDelay: 0,
                    decay: 1,
                },
            ],
        },
        {
            effects: [
                {
                    id: 'b32a0c32-2e3f-45f0-b4fe-c89f28fe50a1',
                    type: 'reverb',
                    acronym: 'REV',
                    wet: 0.4,
                    preDelay: 0,
                    decay: 0.6,
                },
            ],
        },
        {
            effects: [
                {
                    id: 'be1264d2-c1ff-4f5c-b259-7e37e7bff7fb',
                    type: 'reverb',
                    acronym: 'REV',
                    wet: 0.5,
                    preDelay: 0,
                    decay: 3,
                },
            ],
        },
    ],
}
