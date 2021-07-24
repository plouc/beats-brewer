import { PropsWithChildren, ReactNode, useCallback, useState } from 'react'
import styled from 'styled-components/macro'

interface ExplorerFolderProps {
    title: ReactNode
    defaultIsOpen?: boolean
}

export const ExplorerFolder = ({
    title,
    defaultIsOpen = false,
    children,
}: PropsWithChildren<ExplorerFolderProps>) => {
    const [isOpen, setIsOpen] = useState(defaultIsOpen)
    const toggle = useCallback(() => {
        setIsOpen((previous) => !previous)
    }, [setIsOpen])

    return (
        <>
            <Header onClick={toggle}>{title}</Header>
            {isOpen && children}
        </>
    )
}

const Header = styled.div`
    cursor: pointer;
`
