import { useEffect, useMemo, useState } from 'react'
import * as Tone from 'tone'
import { scaleLinear } from 'd3-scale'
import styled from 'styled-components'
import { FiGrid, FiMaximize } from 'react-icons/fi'
import { HSpacer } from '../ui/Spacer'
import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { ComponentHeader } from '../ui/ComponentHeader'
import { HardwareButton } from '../ui/controls/HardwareButton'
import { LCDScreen } from '../ui/LCDScreen'
import { ComponentName, ComponentNameHighlight } from '../ui/ComponentName'
import { Pads } from '../pads/Pads'
import { PadIndex } from '../pads/definitions'
import { PAD_COUNT, PAD_INDEXES } from '../pads/constants'
import { ColorInput } from '../ui/controls/ColorInput'
import { DrumPadConfig } from './definitions'
import { defaultDrumPreset } from '../library/defaultDrumPreset'

export const Drums = () => {
    const [mode, setMode] = useState<'play' | 'edit'>('play')
    const [currentPadIndex, setCurrentPadIndex] = useState<PadIndex | null>(null)
    const [padsAudio, setPadsAudio] = useState<Record<PadIndex, Tone.Player> | null>(null)

    const handlePadClick = (padIndex: PadIndex) => {
        if (mode === 'edit') {
            setCurrentPadIndex(padIndex)
        }

        if (mode === 'play') {
            if (padsAudio) {
                padsAudio[padIndex].start()
            }
        }
    }

    let currentPad: DrumPadConfig | null = null
    let currentPadPlayer: Tone.Player | null = null
    if (currentPadIndex !== null && defaultDrumPreset.pads[currentPadIndex] !== null) {
        currentPad = defaultDrumPreset.pads[currentPadIndex]!
        if (padsAudio) {
            currentPadPlayer = padsAudio[currentPadIndex]
        }
    }

    const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null)

    useEffect(() => {
        const buffer = new Tone.Buffer(defaultDrumPreset.audioFile, () => {
            const buff = buffer.get() as unknown as AudioBuffer
            setAudioBuffer(buff)

            const padsPlayers: any = {}
            const sliceLength = buff.duration / PAD_COUNT
            PAD_INDEXES.forEach((padIndex) => {
                const startTime = padIndex * sliceLength
                const endTime = startTime + sliceLength
                const padBuffer = buffer.slice(startTime, endTime)
                padsPlayers[padIndex] = new Tone.Player(padBuffer).toDestination()
            })

            setPadsAudio(padsPlayers)
        })
    }, [setAudioBuffer, setPadsAudio])

    return (
        <Desk>
            <Enclosure>
                <ComponentHeader>
                    <ComponentName>
                        <ComponentNameHighlight>Drums</ComponentNameHighlight>
                    </ComponentName>
                    <HSpacer />
                    <HardwareButton
                        isPressed={mode === 'play'}
                        isInactive={mode !== 'play'}
                        hasNext
                        onClick={() => setMode('play')}
                    >
                        <FiGrid />
                        <HSpacer size="xsmall" />
                        live
                    </HardwareButton>
                    <HardwareButton
                        isPressed={mode === 'edit'}
                        isInactive={mode !== 'edit'}
                        hasPrevious
                        onClick={() => setMode('edit')}
                    >
                        <FiMaximize />
                        <HSpacer size="xsmall" />
                        edit
                    </HardwareButton>
                </ComponentHeader>
                <Body>
                    <Pads
                        config={defaultDrumPreset}
                        isEditing={mode === 'edit'}
                        onClick={handlePadClick}
                    />
                    <HSpacer />
                    <InfoPanel>
                        <div>
                            <AudioFile>{defaultDrumPreset.audioFile.split('/').pop()}</AudioFile>
                            {audioBuffer && (
                                <AudioFile>duration: {audioBuffer.duration.toFixed(4)}</AudioFile>
                            )}
                        </div>
                        {currentPad && (
                            <div>
                                <ColorInput value={currentPad.color} />
                                &nbsp; [{`${currentPad.index + 1}`.padStart(2, '0')}]{' '}
                                {currentPad.name}
                            </div>
                        )}
                        {audioBuffer && (
                            <>
                                <Chart
                                    duration={audioBuffer.duration}
                                    start={currentPad ? currentPad.start : null}
                                    end={currentPad ? currentPad.end : null}
                                />
                                {currentPad && (
                                    <SampleInfo>
                                        <span>start {currentPad.start.toFixed(4)}</span>
                                        <span>end {currentPad.end.toFixed(4)}</span>
                                    </SampleInfo>
                                )}
                            </>
                        )}
                    </InfoPanel>
                </Body>
            </Enclosure>
        </Desk>
    )
}

const Body = styled.div`
    display: flex;
`

const InfoPanel = styled.div`
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    line-height: 20px;
`

interface ChartProps {
    duration: number
    start: number | null
    end: number | null
}

const CHART_WIDTH = 320
const CHART_HEIGHT = 160

const Chart = ({ duration, start, end }: ChartProps) => {
    const scale = useMemo(() => {
        return scaleLinear().domain([0, duration]).range([0, CHART_WIDTH])
    }, [duration])

    return (
        <ChartContainer>
            <ChartLine style={{ width: scale(duration) }} />
            {start !== null && end !== null && (
                <>
                    <ChartLineSection
                        style={{
                            left: scale(start),
                            width: scale(end) - scale(start),
                        }}
                    />
                    <ChartDot
                        style={{
                            left: scale(start),
                        }}
                    />
                    <ChartDot
                        style={{
                            left: scale(end),
                        }}
                    />
                </>
            )}
        </ChartContainer>
    )
}

const ChartContainer = styled(LCDScreen)`
    position: relative;
    width: ${CHART_WIDTH}px;
    height: ${CHART_HEIGHT}px;
`

const ChartLine = styled.div`
    position: absolute;
    top: calc(50% - 1px);
    z-index: 5;
    background-color: ${(props) => props.theme.colors.lcdText};
    height: 2px;
`

const ChartLineSection = styled.div`
    position: absolute;
    top: calc(50% - 1px);
    z-index: 10;
    background-color: ${(props) => props.theme.colors.lcdHighlightText};
    height: 2px;
`

const ChartDot = styled.div`
    position: absolute;
    top: calc(50% - 3px);
    z-index: 15;
    margin-left: -3px;
    background-color: ${(props) => props.theme.colors.lcdHighlightText};
    width: 6px;
    height: 6px;
    border-radius: 3px;
`

const SampleInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 2px 9px;
    border-radius: 3px;
    justify-content: space-between;
    width: ${CHART_WIDTH}px;
    background-color: #242425;
    font-size: 12px;
    margin-top: 6px;
`

const AudioFile = styled.div`
    background-color: #242425;
    font-size: 12px;
    padding: 2px 9px;
    display: inline-block;
    margin-right: 12px;
    margin-bottom: 6px;
    border-radius: 3px;
`
