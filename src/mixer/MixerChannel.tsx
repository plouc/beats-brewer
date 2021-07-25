import styled from 'styled-components/macro'
import { LCDScreen, LCDScreenHighlightedText } from '../ui/LCDScreen'
import { Channel } from '../project/definitions'

interface MixerChannelProps {
    index: number
    channel: Channel
}

export const MixerChannel = ({ index, channel }: MixerChannelProps) => {
    return (
        <Container>
            <ChannelName>{index + 1}</ChannelName>
            <ValueBlock>
                <ValueLabel>volume</ValueLabel>
                <ValueScreen>
                    <LCDScreenHighlightedText>
                        {channel.channel.volume.value}
                    </LCDScreenHighlightedText>
                </ValueScreen>
            </ValueBlock>
            <ValueBlock>
                <ValueLabel>pan</ValueLabel>
                <ValueScreen>
                    <LCDScreenHighlightedText>{channel.channel.pan.value}</LCDScreenHighlightedText>
                </ValueScreen>
            </ValueBlock>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 60px;
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
    text-align: center;
`
