import { PropsWithChildren } from 'react'
import styled from 'styled-components'

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
    grid-column-gap: 0;
    border-radius: ${(props) => props.theme.sizes.enclosureBorderRadius}px;
    box-shadow: ${(props) => props.theme.enclosure.castShadow};
`

const Side = styled.div`
    grid-row-start: 1;
    grid-row-end: 4;
    background-color: ${(props) => props.theme.colors.alternateMaterial.background};
    box-shadow: inset 0 -1px 0 ${(props) => props.theme.colors.alternateMaterial.backgroundDark},
        inset 0 1px 0 ${(props) => props.theme.colors.alternateMaterial.backgroundLight};

    &:first-child {
        border-radius: ${(props) => props.theme.sizes.enclosureBorderRadius}px 1px 1px
            ${(props) => props.theme.sizes.enclosureBorderRadius}px;
        grid-column-start: 1;
        grid-column-end: 2;
    }

    &:last-child {
        border-radius: 1px ${(props) => props.theme.sizes.enclosureBorderRadius}px
            ${(props) => props.theme.sizes.enclosureBorderRadius}px 1px;
        grid-column-start: 3;
        grid-column-end: 4;
    }
`

const Body = styled.div`
    padding: 9px 12px 16px;
    border-radius: 1px;
    border-left: 1px solid ${(props) => props.theme.colors.background};
    border-right: 1px solid ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.enclosure.background};
    box-shadow: inset 0 1px 0 ${(props) => props.theme.enclosure.backgroundLight},
        inset 0 -1px 0 ${(props) => props.theme.enclosure.backgroundDark};
`
