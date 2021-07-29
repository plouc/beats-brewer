import { useCallback, useState } from 'react'
import styled from 'styled-components/macro'
import { FiArrowRight, FiArrowRightCircle, FiVolume, FiVolumeX } from 'react-icons/fi'
import { LCDScreen, LCDScreenHighlightedText } from '../ui/LCDScreen'
import { Channel } from '../project/definitions'
import { MixerChannelEffects } from './MixerChannelEffects'
import { VSpacer } from '../ui/Spacer'
import { Knob } from '../ui/controls/Knob'

interface MixerChannelProps {
    index: number
    channel: Channel
    isHighlighted: boolean
}

export const MixerChannel = ({ index, channel, isHighlighted }: MixerChannelProps) => {
    const [isMuted, setIsMuted] = useState(channel.channel.mute)

    const toggleMute = useCallback(() => {
        channel.channel.mute = !isMuted
        setIsMuted(!isMuted)
    }, [isMuted, setIsMuted, channel.channel])

    return (
        <Container>
            <ChannelName isHighlighted={isHighlighted}>
                <ChannelNameIcon isHighlighted={isHighlighted}>
                    {!isHighlighted && <FiArrowRight />}
                    {isHighlighted && <FiArrowRightCircle />}
                </ChannelNameIcon>
                <span>{index + 1}</span>
            </ChannelName>
            <VSpacer size="small" />
            <MuteIcon isMuted={isMuted} onClick={toggleMute}>
                {isMuted && <FiVolumeX />}
                {!isMuted && <FiVolume />}
            </MuteIcon>
            <VSpacer size="small" />
            <Knob size={40} value={0} />
            <VSpacer size="small" />
            <ValueLabel>volume</ValueLabel>
            <VSpacer size="xsmall" />
            <ValueScreen>
                <LCDScreenHighlightedText>
                    {isMuted && '---'}
                    {!isMuted && channel.channel.volume.value}
                </LCDScreenHighlightedText>
            </ValueScreen>
            <VSpacer size="small" />
            <ValueLabel>pan</ValueLabel>
            <VSpacer size="xsmall" />
            <ValueScreen>
                <LCDScreenHighlightedText>{channel.channel.pan.value}</LCDScreenHighlightedText>
            </ValueScreen>
            <VSpacer />
            <ValueLabel>effects</ValueLabel>
            <VSpacer size="small" />
            <MixerChannelEffects channel={index} effects={channel.effects} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 9px 6px;
    position: relative;
    background-color: ${(props) => props.theme.enclosure.backgroundAlt};
    border-radius: 3px;
`

const ChannelName = styled.div<{
    isHighlighted: boolean
}>`
    display: flex;
    width: 100%;
    padding: 0 4px;
    justify-content: space-between;
    align-items: center;
    font-family: ${(props) => props.theme.typography.headingFont};
    color: ${(props) =>
        props.isHighlighted ? props.theme.colors.text : props.theme.colors.textLight};
    font-size: 11px;
    text-transform: uppercase;
`

const ChannelNameIcon = styled.div<{
    isHighlighted: boolean
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    font-size: ${(props) => (props.isHighlighted ? 16 : 14)}px;
    color: ${(props) => props.theme.colors.textLight};
`

const ValueLabel = styled.div`
    font-size: 8px;
    text-align: center;
    text-transform: uppercase;
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

    &:hover {
        color: ${(props) => props.theme.colors.text};
    }
`
