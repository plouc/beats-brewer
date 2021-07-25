import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { darken, lighten, rgba } from 'polished'

export const Enclosure = ({ children }: PropsWithChildren<{}>) => {
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
    grid-template-columns: 12px auto 12px;
    border-radius: 3px;
    background-color: ${(props) => props.theme.colors.enclosureBackground};
    box-shadow: 1px 2px 5px ${(props) => rgba(darken(0.2, props.theme.colors.background), 0.35)},
        3px 6px 12px ${(props) => rgba(darken(0.2, props.theme.colors.background), 0.25)};
`

const Side = styled.div`
    background-color: ${(props) => props.theme.colors.wood};
    box-shadow: inset -1px -1px 0 ${(props) => darken(0.03, props.theme.colors.wood)},
        inset 1px 1px 0 ${(props) => lighten(0.03, props.theme.colors.wood)};

    &:first-child {
        border-radius: 3px 0 0 3px;
    }

    &:last-child {
        border-radius: 0 3px 3px 0;
    }
`

const Body = styled.div`
    padding: 6px;
    border-top: 6px solid ${(props) => props.theme.colors.enclosureBorder};
    border-bottom: 6px solid ${(props) => props.theme.colors.enclosureBorder};
`
