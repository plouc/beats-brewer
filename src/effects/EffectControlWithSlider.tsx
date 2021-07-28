import { ReactNode } from 'react'
import styled from 'styled-components/macro'
import { VSpacer } from '../ui/Spacer'

interface EffectControlWithSliderProps {
    label: ReactNode
    value: ReactNode
    slider: ReactNode
}

export const EffectControlWithSlider = ({ label, value, slider }: EffectControlWithSliderProps) => {
    return (
        <>
            <Container>
                {label}
                {value}
            </Container>
            <VSpacer size="xsmall" />
            <SliderContainer>{slider}</SliderContainer>
        </>
    )
}

const Container = styled.div`
    width: 176px;
    display: grid;
    margin: 0 12px;
    grid-template-columns: 100px 76px;
`

const SliderContainer = styled.div`
    width: 200px;
`
