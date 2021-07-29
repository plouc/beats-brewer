import {
    ExplorerItemProps,
    ExplorerItemContainer,
    ExplorerIcon,
    ExplorerLabel,
    ExplorerCount,
} from './ExplorerItem'
import { createElement, PropsWithChildren } from 'react'
import styled from 'styled-components/macro'

export const ExplorerSectionTitle = ({
    children,
    icon,
    count = 0,
    onClick,
}: PropsWithChildren<ExplorerItemProps>) => {
    return (
        <Container onClick={onClick}>
            <Icon>{icon && createElement(icon)}</Icon>
            <Label>{children}</Label>
            {count > 0 && <ExplorerCount>{count}</ExplorerCount>}
        </Container>
    )
}

const Container = styled(ExplorerItemContainer)`
    padding-top: 7px;
    padding-bottom: 7px;
`

const Icon = styled(ExplorerIcon)`
    opacity: 1;
`

const Label = styled(ExplorerLabel)`
    color: ${(props) => props.theme.colors.accent};
    font-size: 12px;
    font-weight: bold;
`
