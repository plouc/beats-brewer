import styled from 'styled-components/macro'
import { Channel } from '../project/definitions'

interface MixerChannelProps {
    channel: Channel
}

export const MixerChannel = ({ channel }: MixerChannelProps) => {
    return (
        <Container>
            <ChannelName>{channel.name}</ChannelName>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 60px;
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
