import styled from 'styled-components/macro'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
// import { useAppStore } from '../useApp'
import { LCDScreen, LCDScreenHighlightedText } from '../ui/LCDScreen'
import { useCallback } from 'react'

interface MixerChannelSelectorProps {
    value: number
}

export const MixerChannelSelector = ({ value }: MixerChannelSelectorProps) => {
    // const channels = useAppStore((state) => state.channels)

    const handleUp = useCallback(() => {
        console.log(value + 1)
    }, [value])

    const handleDown = useCallback(() => {
        console.log(value - 1)
    }, [value])

    return (
        <Container>
            <Screen>
                <LCDScreenHighlightedText>{value + 1}</LCDScreenHighlightedText>
            </Screen>
            <Controls>
                <Button onClick={handleUp}>
                    <FiChevronUp />
                </Button>
                <Button onClick={handleDown}>
                    <FiChevronDown />
                </Button>
            </Controls>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
`

const Screen = styled(LCDScreen)`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
`

const Controls = styled.div`
    display: flex;
    flex-direction: column;
    width: 12px;
    height: 24px;
`

const Button = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12px;
    color: ${(props) => props.theme.colors.textLight};

    &:hover {
        color: ${(props) => props.theme.colors.text};
    }
`
