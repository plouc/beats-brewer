import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { ComponentHeader } from '../ui/ComponentHeader'
import { ComponentName } from '../ui/ComponentName'
import { ReverbData } from '../project/definitions'

interface ReverbEffectProps {
    reverb: ReverbData
}

export const ReverbEffect = ({ reverb }: ReverbEffectProps) => {
    return (
        <Desk>
            <Enclosure>
                <ComponentHeader>
                    <ComponentName>Reverb</ComponentName>
                </ComponentHeader>
                <div>pre-delay: {reverb.preDelay}</div>
                <div>decay: {reverb.decay}</div>
            </Enclosure>
        </Desk>
    )
}
