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
    width: 100%;
    height: 24px;
`

const Track = styled.div`
    position: absolute;
    top: calc(50% - 2px);
    width: 100%;
    height: 4px;
    background-color: ${(props) => darken(0.02, props.theme.enclosure.background)};
    border: 1px solid ${(props) => darken(0.05, props.theme.enclosure.background)};
    border-radius: 2px;
`

const Button = styled.div`
    position: absolute;
    top: calc(50% - 7px);
    width: 24px;
    height: 14px;
    background-color: ${(props) => lighten(0.03, props.theme.colors.alternateMaterial.background)};
    border-radius: 2px;
    cursor: pointer;
    box-shadow: 1px 2px 4px ${(props) => rgba(darken(0.1, props.theme.enclosure.background), 0.35)},
        inset 1px 1px 0 ${(props) => lighten(0.12, props.theme.colors.alternateMaterial.background)},
        inset -1px -1px 0
            ${(props) => darken(0.06, props.theme.colors.alternateMaterial.background)};
`
