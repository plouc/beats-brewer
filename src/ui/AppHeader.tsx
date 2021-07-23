import styled from 'styled-components/macro'
import { HSpacer } from './Spacer'
import { BpmControl } from './BpmControl'

export const AppHeader = () => {
    return (
        <Container>
            <AppName>
                <span>Beats</span>
                <span>Brewer</span>
            </AppName>
            <HSpacer />
            <BpmControl />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    grid-column-start: 1;
    grid-column-end: 3;
    padding: 6px 12px;
    background-color: ${(props) => props.theme.colors.enclosureBackground};
    border-bottom: 1px solid ${(props) => props.theme.colors.enclosureBorder};
`

const AppName = styled.div`
    font-family: ${(props) => props.theme.typography.headingFont};
    text-transform: uppercase;
    font-size: 14px;
    color: ${(props) => props.theme.colors.textLight};

    & > span:last-child {
        color: ${(props) => props.theme.colors.accent};
        margin-left: 2px;
    }
`
