import { PropsWithChildren, createElement } from 'react'
import { darken } from 'polished'
import { IconType } from 'react-icons'
import styled from 'styled-components/macro'

export interface ExplorerItemProps {
    icon?: IconType
    count?: number
    onClick?: () => void
}

export const ExplorerItem = ({
    children,
    icon,
    count = 0,
    onClick,
}: PropsWithChildren<ExplorerItemProps>) => {
    return (
        <ExplorerItemContainer onClick={onClick}>
            <ExplorerIcon>{icon && createElement(icon)}</ExplorerIcon>
            <ExplorerLabel>{children}</ExplorerLabel>
            {count > 0 && <ExplorerCount>{count}</ExplorerCount>}
        </ExplorerItemContainer>
    )
}

export const ExplorerItemContainer = styled.div`
    display: grid;
    grid-template-columns: 16px auto 24px;
    grid-column-gap: 5px;
    align-items: center;
    font-size: 11px;
    padding: 5px 9px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => darken(0.03, props.theme.enclosure.background)};
    }
`

export const ExplorerIcon = styled.span`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: ${(props) => props.theme.colors.text};
    opacity: 0.7;
`

export const ExplorerLabel = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const ExplorerCount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.enclosure.backgroundAlt};
    border-radius: 2px;
    padding: 3px 0;
    font-size: 9px;
    font-weight: bold;
`
