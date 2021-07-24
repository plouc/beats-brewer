import { v4 as uuidV4 } from 'uuid'
import { DrumKit } from '../project/definitions'
import { sampleByName } from './samples'

export const drumKits: DrumKit[] = [
    {
        id: uuidV4(),
        name: 'Drum Kit TR-808 1',
        samples: [
            sampleByName('TR-808 Bass Drum 1'),
            sampleByName('TR-808 Snare 1'),
            sampleByName('TR-808 Clap 1'),
            sampleByName('TR-808 Rimshot 1'),
            sampleByName('TR-808 HiHat Open 1'),
            sampleByName('TR-808 HiHat Closed 1'),
            sampleByName('TR-808 Congas Low 1'),
            sampleByName('TR-808 Congas High 1'),
        ],
    },
    {
        id: uuidV4(),
        name: 'Drum Kit TR-808 2',
        samples: [
            sampleByName('TR-808 Bass Drum 2'),
            sampleByName('TR-808 Snare 2'),
            sampleByName('TR-808 Clap 2'),
            sampleByName('TR-808 Rimshot 2'),
            sampleByName('TR-808 HiHat Open 2'),
            sampleByName('TR-808 HiHat Closed 2'),
            sampleByName('TR-808 Congas Low 2'),
            sampleByName('TR-808 Congas High 2'),
        ],
    },
]
