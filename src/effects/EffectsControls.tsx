import { ReverbControls } from './ReverbControls'
import { DistortionControls } from './DistortionControls'
import { useAppStore } from '../useApp'

export const EffectsControls = () => {
    const effects = useAppStore((state) => state.openedEffects)

    return (
        <>
            {effects.map((effect) => {
                if (effect.type === 'reverb') {
                    return <ReverbControls key={effect.id} reverb={effect} />
                }
                if (effect.type === 'distortion') {
                    return <DistortionControls key={effect.id} distortion={effect} />
                }

                // no component matching the pattern type available
                return null
            })}
        </>
    )
}
