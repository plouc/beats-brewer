import styled from 'styled-components/macro'
import { darken } from 'polished'
import { BiBox } from 'react-icons/bi'
import { FaDrum, FaWaveSquare } from 'react-icons/fa'
import { CgPiano } from 'react-icons/cg'
import { BsGrid3X2GapFill } from 'react-icons/bs'
import { demoProjects } from '../presets/projects/demoProjects'
import { SYNTH_TYPES } from '../synths/definitions'
import { drumKits } from '../library/drumKits'
import { samples } from '../library/samples'
import { useAppStore } from '../useApp'
import { ExplorerFolder } from './ExplorerFolder'

export const Explorer = () => {
    const project = useAppStore((state) => state.project)
    const createEmptyProject = useAppStore((state) => state.createEmptyProject)
    const loadProject = useAppStore((state) => state.loadProject)
    const openPattern = useAppStore((state) => state.openPattern)

    return (
        <Container>
            <Item onClick={createEmptyProject}>New Empty Project</Item>
            {project && (
                <>
                    <SubTitle>{project.name}</SubTitle>
                    <ExplorerFolder
                        defaultIsOpen
                        title={
                            <SectionTitle>
                                <BsGrid3X2GapFill /> Patterns {project.patterns.length}
                            </SectionTitle>
                        }
                    >
                        {project.patterns.map((pattern) => {
                            return (
                                <Item
                                    key={pattern.id}
                                    onClick={() => {
                                        openPattern(pattern.id)
                                    }}
                                >
                                    <BsGrid3X2GapFill /> {pattern.name}
                                </Item>
                            )
                        })}
                    </ExplorerFolder>
                </>
            )}
            <SubTitle>Library</SubTitle>
            <ExplorerFolder
                defaultIsOpen
                title={
                    <SectionTitle>
                        <BiBox /> Demo Projects {demoProjects.length}
                    </SectionTitle>
                }
            >
                {demoProjects.map((project) => (
                    <Item
                        key={project.name}
                        onClick={() => {
                            loadProject(project)
                        }}
                    >
                        <BiBox /> {project.name}
                    </Item>
                ))}
            </ExplorerFolder>
            <SectionTitle>Instruments</SectionTitle>
            <ExplorerFolder
                title={
                    <SectionTitle>
                        <CgPiano /> Synths {SYNTH_TYPES.length}
                    </SectionTitle>
                }
            >
                {SYNTH_TYPES.map((synthType) => (
                    <Item key={synthType}>
                        <CgPiano /> {synthType}
                    </Item>
                ))}
            </ExplorerFolder>
            <ExplorerFolder
                title={
                    <SectionTitle>
                        <FaDrum /> Drum Kits {drumKits.length}
                    </SectionTitle>
                }
            >
                {drumKits.map((drumKit) => (
                    <Item key={drumKit.id}>
                        <FaDrum /> {drumKit.name}
                    </Item>
                ))}
            </ExplorerFolder>
            <ExplorerFolder
                title={
                    <SectionTitle>
                        <FaWaveSquare /> Samples {samples.length}
                    </SectionTitle>
                }
            >
                {samples.map((sample) => (
                    <Item key={sample.id}>
                        <FaWaveSquare /> {sample.name}
                    </Item>
                ))}
            </ExplorerFolder>
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
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.accent};
    font-size: 12px;
    margin: 0;
    padding: 7px 12px;

    svg:first-child {
        margin-right: 1ch;
    }
`

const Item = styled.div`
    display: flex;
    align-items: center;
    font-size: 11px;
    margin: 0;
    padding: 5px 12px;
    cursor: pointer;
    // border-bottom: 1px solid ${(props) => darken(0.06, props.theme.colors.background)};

    svg:first-child {
        margin-right: 1ch;
    }

    &:hover {
        background-color: ${(props) => darken(0.03, props.theme.colors.enclosureBackground)};
    }
`
