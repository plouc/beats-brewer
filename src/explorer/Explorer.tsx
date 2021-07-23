import styled from 'styled-components/macro'
import { darken } from 'polished'

export const Explorer = () => {
    return (
        <Container>
            <SubTitle>Demo Project</SubTitle>
            <SectionTitle>Drum Kits</SectionTitle>
            <Item>Drum Kit A</Item>
            <SubTitle>Library</SubTitle>
            <SectionTitle>Projects</SectionTitle>
            <Item>Project A</Item>
            <Item>Project B</Item>
            <Item>Project C</Item>
            <Item>Project D</Item>
            <Item>Project E</Item>
            <SectionTitle>Drum Kits</SectionTitle>
            <Item>Drum Kit A</Item>
            <Item>Drum Kit B</Item>
            <Item>Drum Kit C</Item>
            <SectionTitle>Sample Kits</SectionTitle>
            <Item>Sample Kit A</Item>
            <Item>Sample Kit B</Item>
            <Item>Sample Kit C</Item>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.enclosureBackground};
    color: ${(props) => props.theme.colors.text};
    border-right: 1px solid ${(props) => props.theme.colors.enclosureBorder};
`

const SubTitle = styled.h2`
    font-family: ${(props) => props.theme.typography.headingFont};
    background-color: ${(props) => darken(0.03, props.theme.colors.enclosureBackground)};
    font-size: 13px;
    margin: 0;
    padding: 7px 12px;
    color: ${(props) => props.theme.colors.accent};
`

const SectionTitle = styled.h3`
    color: ${(props) => props.theme.colors.accent};
    font-size: 12px;
    margin: 0;
    padding: 7px 12px;
    // border-bottom: 1px solid ${(props) => darken(0.06, props.theme.colors.background)};
`

const Item = styled.div`
    font-size: 11px;
    margin: 0;
    padding: 5px 12px;
    // border-bottom: 1px solid ${(props) => darken(0.06, props.theme.colors.background)};
`
