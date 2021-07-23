import { v4 as uuidV4 } from 'uuid'
import * as Tone from 'tone'
const kick = require('../audio/kick-2.ogg').default
const snare = require('../audio/snare-1.ogg').default
const clap = require('../audio/clap-1.ogg').default
const hiHatOpen = require('../audio/open-hh-1.ogg').default
const hiHatClosed = require('../audio/closed-hh-1.ogg').default

export interface DrumKitData {
    name: string
    samples: DrumSampleData[]
}

export class DrumKit {
    public name: string
    public samples: DrumSample[]
    private initialized = false

    constructor(data: DrumKitData) {
        this.name = data.name
        this.samples = data.samples.map((sampleData) => {
            return new DrumSample(sampleData)
        })
    }

    public init() {
        if (this.initialized) return

        this.samples.forEach((sample) => {
            sample.init()
        })

        this.initialized = true
    }

    public getSample(sampleId: string) {
        const sample = this.samples.find((sample) => sample.id === sampleId)
        if (sample === undefined) {
            throw new Error(`no sample found for id: ${sampleId}`)
        }

        return sample
    }
}

export interface DrumSampleData {
    id: string
    name: string
    color: string
    audioFile: string
}

export class DrumSample {
    public id: string
    public name: string
    public color: string
    public audioFile: string
    public player: Tone.Player | undefined
    public isReady: boolean = false

    constructor(data: DrumSampleData) {
        this.id = data.id
        this.name = data.name
        this.color = data.color
        this.audioFile = data.audioFile
    }

    public init() {
        this.player = new Tone.Player(this.audioFile, () => {
            this.isReady = true
        }).toDestination()
    }
}

export const defaultDrumKit = new DrumKit({
    name: 'Default Drum Kit',
    samples: [
        {
            id: uuidV4(),
            name: 'Kick',
            color: '#49c19b',
            audioFile: kick,
        },
        {
            id: uuidV4(),
            name: 'Snare',
            color: '#6a9e6a',
            audioFile: snare,
        },
        {
            id: uuidV4(),
            name: 'Clap',
            color: '#d0aa4c',
            audioFile: clap,
        },
        {
            id: uuidV4(),
            name: 'HiHat Open',
            color: '#95758c',
            audioFile: hiHatOpen,
        },
        {
            id: uuidV4(),
            name: 'HiHat Closed',
            color: '#95758c',
            audioFile: hiHatClosed,
        },
    ],
})
