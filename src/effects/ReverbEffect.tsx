import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { ComponentHeader } from '../ui/ComponentHeader'
import { ComponentName } from '../ui/ComponentName'

export const ReverbEffect = () => {
    return (
        <Desk>
            <Enclosure>
                <ComponentHeader>
                    <ComponentName>Reverb</ComponentName>
                </ComponentHeader>
            </Enclosure>
        </Desk>
    )
}
