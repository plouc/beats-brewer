import { v4 as uuidV4 } from 'uuid'
import { Project, SequencerPattern } from '../../project/definitions'
import { sampleByName } from '../../library/samples'

const patternA: SequencerPattern = {
    type: 'sequencer',
    id: uuidV4(),
    name: 'Drums 1',
    color: '#3aa878',
    tracks: [
        {
            ...sampleByName('TR-808 Bass Drum 1'),
            id: uuidV4(),
            isMuted: false,
            steps: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        },
        {
            ...sampleByName('TR-808 Snare 1'),
            id: uuidV4(),
            isMuted: false,
            steps: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        },
        {
            ...sampleByName('TR-808 Clap 1'),
            id: uuidV4(),
            isMuted: false,
            steps: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
        },
        {
            ...sampleByName('TR-808 Rimshot 1'),
            id: uuidV4(),
            isMuted: false,
            steps: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        },
        {
            ...sampleByName('TR-808 HiHat Open 1'),
            id: uuidV4(),
            isMuted: false,
            steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
            ...sampleByName('TR-808 HiHat Closed 1'),
            id: uuidV4(),
            isMuted: false,
            steps: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        },
        {
            ...sampleByName('TR-808 Congas Low 1'),
            id: uuidV4(),
            isMuted: true,
            steps: [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        },
        {
            ...sampleByName('TR-808 Congas High 1'),
            id: uuidV4(),
            isMuted: true,
            steps: [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
        },
    ],
}

export const demoProject: Project = {
    name: 'Demo Project',
    bpm: 95,
    patterns: [patternA],
}
