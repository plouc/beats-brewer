import { useCallback } from 'react'
import styled from 'styled-components/macro'
import { FiPlay } from 'react-icons/fi'
import { Modal } from '../ui/Modal'
import { Enclosure } from '../ui/Enclosure'
import { CloseButton } from '../ui/controls/CloseButton'
import { ComponentHeader } from '../ui/ComponentHeader'
import { ComponentName, ComponentNameHighlight } from '../ui/ComponentName'
import { TrackWithPlayer } from './useStepSequencer'
import { HSpacer, VSpacer } from '../ui/Spacer'
import { SquareIconButton } from '../ui/controls/SquareIconButton'
import { useAppStore } from '../store/useApp'
import { samples } from '../library/samples'

interface SampleModalProps {
    track: TrackWithPlayer
    onUpdateSample: (sampleId: string) => void
    onClose: () => void
}

export const SequencerTrackModal = ({ track, onUpdateSample, onClose }: SampleModalProps) => {
    const channels = useAppStore((state) => state.channels)
    const channel = channels[track.channel]
    if (channel === undefined) {
        throw new Error(`no channel found at index: ${track.channel}`)
    }

    const audioFileParts = track.audioFile.split('/')
    const audioFile = audioFileParts[audioFileParts.length - 1]
    const channelEffects = channel.effects.map((effect) => effect.type)

    const handlePlay = useCallback(() => {
        track.player.start()
    }, [track.player])

    return (
        <Modal onClose={onClose}>
            <Enclosure>
                <Header>
                    <ComponentName>
                        Track
                        <HSpacer size="xsmall" />
                        <ComponentNameHighlight>{track.name}</ComponentNameHighlight>
                    </ComponentName>
                    <CloseButton onClose={onClose} />
                </Header>
                <VSpacer />
                <Content>
                    <Player>
                        <SquareIconButton onClick={handlePlay}>
                            <FiPlay />
                        </SquareIconButton>
                        <HSpacer size="small" />
                        Play track sample
                    </Player>
                    <HSpacer size="small" />
                    <div>
                        audio file: <strong>{audioFile}</strong>
                        <br />
                        channel: <strong>{track.channel}</strong>&nbsp;|&nbsp;effects:{' '}
                        <strong>{channelEffects.join(' –> ')}</strong>
                    </div>
                    <HSpacer size="small" />
                    <SampleSelector>
                        {samples.map((sample) => {
                            return (
                                <Sample
                                    key={sample.id}
                                    onClick={() => {
                                        onUpdateSample(sample.id)
                                    }}
                                >
                                    {sample.name}
                                </Sample>
                            )
                        })}
                    </SampleSelector>
                </Content>
            </Enclosure>
        </Modal>
    )
}

const Header = styled(ComponentHeader)`
    justify-content: space-between;
`

const Content = styled.div`
    font-size: 12px;
    line-height: 20px;
    width: 360px;
`

const Player = styled.div`
    display: flex;
    align-items: center;
`

const SampleSelector = styled.div`
    max-height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: 3px;
    background-color: ${(props) => props.theme.enclosure.backgroundDark};
    padding: 2px;
`

const Sample = styled.div`
    padding: 5px 9px;
    border-radius: 2px;
    margin-top: 1px;
    font-size: 10px;
    background-color: ${(props) => props.theme.enclosure.background};
    cursor: pointer;

    &:first-child {
        margin-top: 0;
    }

    &:hover {
        background-color: ${(props) => props.theme.enclosure.backgroundLight};
    }
`
