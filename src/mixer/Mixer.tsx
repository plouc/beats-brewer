import styled from 'styled-components/macro'
import { VSpacer } from '../ui/Spacer'
import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { ComponentHeader } from '../ui/ComponentHeader'
import { ComponentName, ComponentNameHighlight } from '../ui/ComponentName'
import { MixerChannel } from './MixerChannel'
import { useAppStore } from '../useApp'

export const Mixer = () => {
    const channels = useAppStore((state) => state.channels)

    return (
        <Desk>
            <Enclosure>
                <ComponentHeader>
                    <ComponentName>
                        <ComponentNameHighlight>Mixer</ComponentNameHighlight>
                    </ComponentName>
                </ComponentHeader>
                <VSpacer size="small" />
                <Channels>
                    {channels.map((channel, index) => (
                        <MixerChannel key={index} index={index} channel={channel} />
                    ))}
                </Channels>
            </Enclosure>
        </Desk>
    )
}

const Channels = styled.div`
    padding: 0 12px 12px;
    display: grid;
    grid-template-columns: repeat(8, 80px);
    grid-column-gap: 6px;
`
