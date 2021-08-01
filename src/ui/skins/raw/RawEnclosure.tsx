import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export const RawEnclosure = ({ children }: PropsWithChildren<{}>) => {
    return <Container>{children}</Container>
}

export const Container = styled.div`
    padding: 9px 12px 16px;
    background-color: ${(props) => props.theme.enclosure.background};
    border-radius: 2px;
`
