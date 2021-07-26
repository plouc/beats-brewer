import { useCallback, useState } from 'react'
import styled from 'styled-components/macro'
import { FiVolume, FiVolumeX } from 'react-icons/fi'
import { LCDScreen, LCDScreenHighlightedText } from '../ui/LCDScreen'
import { Channel } from '../project/definitions'
import { useAppStore } from '../useApp'
import { darken } from 'polished'

interface MixerChannelProps {
    index: number
    channel: Channel
}

export const MixerChannel = ({ index, channel }: MixerChannelProps) => {
    const [isMuted, setIsMuted] = useState(channel.channel.mute)
    const openEffect = useAppStore((state) => state.openEffect)

    const toggleMute = useCallback(() => {
        channel.channel.mute = !isMuted
        setIsMuted(!isMuted)
    }, [isMuted, setIsMuted, channel.channel])

    return (
        <Container>
            <ChannelName>{index + 1}</ChannelName>
            <MuteIcon isMuted={isMuted} onClick={toggleMute}>
                {isMuted && <FiVolumeX />}
                {!isMuted && <FiVolume />}
            </MuteIcon>
            <ValueBlock>
                <ValueLabel>volume</ValueLabel>
                <ValueScreen>
                    <LCDScreenHighlightedText>
                        {isMuted && '---'}
                        {!isMuted && channel.channel.volume.value}
                    </LCDScreenHighlightedText>
                </ValueScreen>
            </ValueBlock>
            <ValueBlock>
                <ValueLabel>pan</ValueLabel>
                <ValueScreen>
                    <LCDScreenHighlightedText>{channel.channel.pan.value}</LCDScreenHighlightedText>
                </ValueScreen>
            </ValueBlock>
            <ValueLabel>effects</ValueLabel>
            {channel.effects.map((effect) => {
                return (
                    <EffectLabel
                        key={effect.id}
                        onClick={() => {
                            openEffect(effect.id)
                        }}
                    >
                        {effect.type}
                    </EffectLabel>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    padding: 0 6px;
    height: 320px;
    position: relative;
    background-color: ${(props) => props.theme.colors.enclosureBorder};
    border-radius: 3px;
`

const ChannelName = styled.div`
    display: flex;
    height: 32px;
    justify-content: center;
    align-items: center;
    font-family: ${(props) => props.theme.typography.headingFont};
    color: ${(props) => props.theme.colors.textLight};
    font-size: 12px;
    text-transform: uppercase;
`

const ValueBlock = styled.div`
    margin-bottom: 9px;
`

const ValueLabel = styled.div`
    font-size: 8px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 4px;
    color: ${(props) => props.theme.colors.textLight};
`

const ValueScreen = styled(LCDScreen)`
    padding: 3px 0;
    width: 50px;
    text-align: center;
`

const MuteIcon = styled.div<{
    isMuted: boolean
}>`
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.colors.textLight};
    margin-bottom: 9px;

    &:hover {
        color: ${(props) => props.theme.colors.text};
    }
`

const EffectLabel = styled.div`
    background-color: ${(props) => darken(0.02, props.theme.colors.enclosureBorder)};
    color: ${(props) => props.theme.colors.textLight};
    font-size: 11px;
    padding: 4px 6px;
    border-radius: 2px;
    cursor: pointer;
    max-width: 68px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 5px;

    &:hover {
        color: ${(props) => props.theme.colors.text};
    }
`
