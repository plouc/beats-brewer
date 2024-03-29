import styled from 'styled-components/macro'
import { HSpacer } from './Spacer'
import { BpmControl } from './BpmControl'
import { SkinSelector } from './skins/SkinSelector'

export const AppHeader = () => {
    return (
        <Container>
            <AppName>
                <span>Beats</span>
                <span>Brewer</span>
            </AppName>
            <Controls>
                <BpmControl />
                <HSpacer size="small" />
                <SkinSelector />
            </Controls>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 200px auto;
    align-items: center;
    grid-column-start: 1;
    grid-column-end: 3;
    padding: 0 12px;
    background-color: ${(props) => props.theme.enclosure.background};
    border-bottom: 1px solid ${(props) => props.theme.enclosure.border};
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

const Controls = styled.div`
    display: flex;
    align-items: center;
`
