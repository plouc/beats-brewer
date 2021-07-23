import styled from 'styled-components/macro'

interface SpacerProps {
    size?: 'xsmall' | 'small' | 'medium' | 'large'
}

const SpacerHorizontal = styled.span<{
    size: SpacerProps['size']
}>`
    display: inline-block;
    width: ${({ size }) => {
        if (size === 'xsmall') return 6
        if (size === 'small') return 12
        if (size === 'large') return 36
        return 24
    }}px;
    height: 6px;
`

export const HSpacer = ({ size = 'medium' }: SpacerProps) => <SpacerHorizontal size={size} />

const SpacerVertical = styled.span<{
    size: SpacerProps['size']
}>`
    display: block;
    height: ${({ size }) => {
        if (size === 'xsmall') return 4
        if (size === 'small') return 6
        if (size === 'large') return 24
        return 12
    }}px;
`

export const VSpacer = ({ size = 'medium' }: SpacerProps) => <SpacerVertical size={size} />
