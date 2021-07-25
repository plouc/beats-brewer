import styled from 'styled-components/macro'
import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { ComponentHeader } from '../ui/ComponentHeader'
import { ComponentName, ComponentNameHighlight } from '../ui/ComponentName'
import { MixerChannel } from './MixerChannel'

export const Mixer = () => {
    return (
        <Desk>
            <Enclosure>
                <ComponentHeader>
                    <ComponentName>
                        <ComponentNameHighlight>Mixer</ComponentNameHighlight>
                    </ComponentName>
                </ComponentHeader>
                <Channels>
                    <MixerChannel channel={{ name: 'M' }} />
                    <MixerChannel channel={{ name: '01' }} />
                    <MixerChannel channel={{ name: '02' }} />
                    <MixerChannel channel={{ name: '03' }} />
                    <MixerChannel channel={{ name: '04' }} />
                    <MixerChannel channel={{ name: '05' }} />
                    <MixerChannel channel={{ name: '06' }} />
                    <MixerChannel channel={{ name: '07' }} />
                    <MixerChannel channel={{ name: '08' }} />
                </Channels>
            </Enclosure>
        </Desk>
    )
}

const Channels = styled.div`
    padding: 0 12px 12px;
    display: grid;
    grid-template-columns: repeat(9, 60px);
    grid-column-gap: 6px;
`
