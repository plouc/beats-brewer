import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { darken, lighten } from 'polished'

export const FlatEnclosure = ({ children }: PropsWithChildren<{}>) => {
    return (
        <Container>
            <Side />
            <Body>{children}</Body>
            <Side />
        </Container>
    )
}

export const Container = styled.div`
    display: grid;
    grid-template-columns: ${(props) => props.theme.enclosure.sideThickness}px auto ${(props) =>
            props.theme.enclosure.sideThickness}px;
    border-radius: ${(props) => props.theme.sizes.enclosureBorderRadius}px;
    background-color: ${(props) => props.theme.enclosure.background};
    box-shadow: ${(props) => props.theme.enclosure.castShadow};
`

const Side = styled.div`
    grid-row-start: 1;
    grid-row-end: 4;
    background-color: ${(props) => props.theme.colors.alternateMaterial.background};
    background: linear-gradient(
        180deg,
        ${(props) => lighten(0.02, props.theme.colors.alternateMaterial.background)},
        ${(props) => props.theme.colors.alternateMaterial.background}
    );
    box-shadow: inset -1px 0 0 ${(props) => props.theme.colors.alternateMaterial.backgroundDark},
        inset 1px 0 0 ${(props) => props.theme.colors.alternateMaterial.backgroundLight},
        inset 0 11px 0 ${(props) => props.theme.colors.alternateMaterial.backgroundLight},
        inset 0 12px 0
            ${(props) => lighten(0.08, props.theme.colors.alternateMaterial.backgroundLight)},
        inset 0 -23px 0 ${(props) => props.theme.colors.alternateMaterial.backgroundDark},
        inset 0 -24px 0 ${(props) => darken(0.04, props.theme.colors.alternateMaterial.backgroundDark)};

    &:first-child {
        border-radius: ${(props) => props.theme.sizes.enclosureBorderRadius}px 0 0
            ${(props) => props.theme.sizes.enclosureBorderRadius}px;
        grid-column-start: 1;
        grid-column-end: 2;
    }

    &:last-child {
        border-radius: 0 ${(props) => props.theme.sizes.enclosureBorderRadius}px
            ${(props) => props.theme.sizes.enclosureBorderRadius}px 0;
        grid-column-start: 3;
        grid-column-end: 4;
    }
`

const Body = styled.div`
    padding: 9px 12px;
    box-shadow: inset 3px 0 0 ${(props) => props.theme.enclosure.innerCastShadowColor},
        inset -2px 0 0 ${(props) => props.theme.enclosure.innerCastShadowColor},
        inset 0 1px 0 ${(props) => props.theme.enclosure.backgroundLight},
        inset 0 -1px 0 ${(props) => props.theme.enclosure.backgroundDark};
`
