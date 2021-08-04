import styled from 'styled-components/macro'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
// import { useAppStore } from '../store/useApp'
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
        <>
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
        </>
    )
}

const Screen = styled(LCDScreen)`
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1px;
`

const Controls = styled.div`
    display: flex;
    flex-direction: column;
    width: 14px;
    height: 28px;
    margin-left: 1px;
`

const Button = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14px;
    height: 14px;
    background-color: ${(props) => props.theme.enclosure.background};
    color: ${(props) => props.theme.colors.text};
    border-radius: 2px;
    cursor: pointer;
    box-shadow: inset 0 1px 0 ${(props) => props.theme.enclosure.backgroundLight},
        inset 0 -1px 0 ${(props) => props.theme.enclosure.backgroundDark};

    &:hover {
        color: ${(props) => props.theme.colors.text};
    }
`
