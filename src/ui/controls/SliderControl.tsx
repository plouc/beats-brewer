import styled from 'styled-components/macro'
import { darken, lighten, rgba } from 'polished'

export const SliderControl = () => {
    return (
        <Container>
            <Track />
            <Button />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 200px;
    height: 24px;
`

const Track = styled.div`
    position: absolute;
    top: calc(50% - 3px);
    width: 200px;
    height: 6px;
    background-color: ${(props) => darken(0.02, props.theme.colors.enclosureBackground)};
    border: 1px solid ${(props) => darken(0.07, props.theme.colors.enclosureBackground)};
    border-radius: 3px;
`

const Button = styled.div`
    position: absolute;
    top: calc(50% - 8px);
    width: 28px;
    height: 16px;
    background-color: ${(props) => lighten(0.03, props.theme.colors.wood)};
    border-radius: 2px;
    cursor: pointer;
    box-shadow: 1px 3px 5px
            ${(props) => rgba(darken(0.1, props.theme.colors.enclosureBackground), 0.5)},
        inset 1px 1px 0 ${(props) => lighten(0.12, props.theme.colors.wood)},
        inset -1px -1px 0 ${(props) => darken(0.06, props.theme.colors.wood)};
`
