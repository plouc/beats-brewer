import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { darken, lighten, rgba } from 'polished'

export const Enclosure = ({ children }: PropsWithChildren<{}>) => {
    return (
        <Container>
            <Side />
            <Top />
            <Body>{children}</Body>
            <Bottom />
            <Side />
        </Container>
    )
}

export const Container = styled.div`
    display: grid;
    grid-template-columns: 12px auto 12px;
    grid-template-rows: 7px auto 14px;
    border-radius: ${(props) => props.theme.sizes.enclosureBorderRadius}px;
    background-color: ${(props) => props.theme.colors.enclosure.background};
    box-shadow: ${(props) => props.theme.shadows.enclosure};
`

const Side = styled.div`
    grid-row-start: 1;
    grid-row-end: 4;
    background-color: ${(props) => props.theme.colors.alternateMaterial.background};
    background: linear-gradient(
        180deg,
        ${(props) => lighten(0.01, props.theme.colors.alternateMaterial.background)},
        ${(props) => props.theme.colors.alternateMaterial.background}
    );
    box-shadow: inset -1px -1px 0
            ${(props) => darken(0.03, props.theme.colors.alternateMaterial.background)},
        inset 1px 1px 0 ${(props) => lighten(0.06, props.theme.colors.alternateMaterial.background)},
        inset 0 11px 0 ${(props) => lighten(0.04, props.theme.colors.alternateMaterial.background)},
        inset 0 12px 0 ${(props) => lighten(0.06, props.theme.colors.alternateMaterial.background)},
        inset 0 -23px 0 ${(props) => darken(0.02, props.theme.colors.alternateMaterial.background)},
        inset 0 -24px 0 ${(props) => darken(0.04, props.theme.colors.alternateMaterial.background)};

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

const Top = styled.div`
    background-color: ${(props) => lighten(0.03, props.theme.colors.enclosure.background)};
    background: linear-gradient(
        180deg,
        ${(props) => lighten(0.01, props.theme.colors.enclosure.background)},
        ${(props) => lighten(0.05, props.theme.colors.enclosure.background)}
    );
    box-shadow: inset 4px 0 0
            ${(props) => rgba(darken(0.2, props.theme.colors.enclosure.background), 0.05)},
        inset -2px 0 0 ${(props) => rgba(darken(0.2, props.theme.colors.enclosure.background), 0.1)},
        inset 0 1px 0 ${(props) => lighten(0.06, props.theme.colors.enclosure.background)},
        inset 0 -1px 0 ${(props) => darken(0.03, props.theme.colors.enclosure.background)};
`

const Bottom = styled.div`
    background: linear-gradient(
        180deg,
        ${(props) => darken(0.03, props.theme.colors.enclosure.background)},
        ${(props) => darken(0.02, props.theme.colors.enclosure.background)}
    );
    box-shadow: inset 4px 0 0
            ${(props) => rgba(darken(0.2, props.theme.colors.enclosure.background), 0.15)},
        inset -2px 0 0 ${(props) => rgba(darken(0.2, props.theme.colors.enclosure.background), 0.1)},
        inset 0 1px 0 ${(props) => lighten(0.02, props.theme.colors.enclosure.background)},
        inset 0 -1px 0 ${(props) => darken(0.05, props.theme.colors.enclosure.background)};
`

const Body = styled.div`
    padding: 9px 12px;
    box-shadow: inset 4px 0 0
            ${(props) => rgba(darken(0.2, props.theme.colors.enclosure.background), 0.1)},
        inset -2px 0 0 ${(props) => rgba(darken(0.2, props.theme.colors.enclosure.background), 0.1)},
        inset 0 1px 0 ${(props) => lighten(0.05, props.theme.colors.enclosure.background)},
        inset 0 -1px 0 ${(props) => darken(0.04, props.theme.colors.enclosure.background)};
`
