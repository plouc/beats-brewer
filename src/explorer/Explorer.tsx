import styled from 'styled-components/macro'
import { darken } from 'polished'
import { BiBox } from 'react-icons/bi'
import { FaDrum, FaWaveSquare } from 'react-icons/fa'
// import { CgPiano } from 'react-icons/cg'
import { BsGrid3X2GapFill } from 'react-icons/bs'
import { demoProjects } from '../library/demoProjects'
// import { SYNTH_TYPES } from '../synths/definitions'
import { drumKits } from '../library/drumKits'
import { samples } from '../library/samples'
import { useAppStore } from '../store/useApp'
import { ExplorerFolder } from './ExplorerFolder'
import { ExplorerItem } from './ExplorerItem'
import { ExplorerSectionTitle } from './ExplorerSectionTitle'

export const Explorer = () => {
    const project = useAppStore((state) => state.project)
    // const createEmptyProject = useAppStore((state) => state.createEmptyProject)
    const loadProject = useAppStore((state) => state.loadProject)
    const openPattern = useAppStore((state) => state.openPattern)

    return (
        <Container>
            {/*
            <Item onClick={createEmptyProject}>New Empty Project</Item>
            */}
            {project && (
                <>
                    <SubTitle>{project.name}</SubTitle>
                    <ExplorerFolder
                        defaultIsOpen
                        title={
                            <ExplorerSectionTitle
                                icon={BsGrid3X2GapFill}
                                count={project.patterns.length}
                            >
                                Patterns
                            </ExplorerSectionTitle>
                        }
                    >
                        {project.patterns.map((pattern) => {
                            return (
                                <ExplorerItem
                                    key={pattern.id}
                                    icon={BsGrid3X2GapFill}
                                    onClick={() => {
                                        openPattern(pattern.id)
                                    }}
                                >
                                    {pattern.name}
                                </ExplorerItem>
                            )
                        })}
                    </ExplorerFolder>
                </>
            )}
            <SubTitle>Library</SubTitle>
            <ExplorerFolder
                defaultIsOpen
                title={
                    <ExplorerSectionTitle icon={BiBox} count={demoProjects.length}>
                        Demo Projects
                    </ExplorerSectionTitle>
                }
            >
                {demoProjects.map((project) => (
                    <ExplorerItem
                        key={project.name}
                        icon={BiBox}
                        onClick={() => {
                            loadProject(project)
                        }}
                    >
                        {project.name}
                    </ExplorerItem>
                ))}
            </ExplorerFolder>
            {/*
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
            */}
            <ExplorerFolder
                defaultIsOpen
                title={
                    <ExplorerSectionTitle icon={FaDrum} count={drumKits.length}>
                        Drum Kits
                    </ExplorerSectionTitle>
                }
            >
                {drumKits.map((drumKit) => (
                    <ExplorerItem key={drumKit.id} icon={FaDrum}>
                        {drumKit.name}
                    </ExplorerItem>
                ))}
            </ExplorerFolder>
            <ExplorerFolder
                defaultIsOpen
                title={
                    <ExplorerSectionTitle icon={FaWaveSquare} count={samples.length}>
                        Samples
                    </ExplorerSectionTitle>
                }
            >
                {samples.map((sample) => (
                    <ExplorerItem key={sample.id} icon={FaWaveSquare}>
                        {sample.name}
                    </ExplorerItem>
                ))}
            </ExplorerFolder>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${(props) => props.theme.enclosure.background};
    color: ${(props) => props.theme.colors.text};
    border-right: 1px solid ${(props) => props.theme.enclosure.border};
`

const SubTitle = styled.h2`
    font-family: ${(props) => props.theme.typography.headingFont};
    background-color: ${(props) => darken(0.03, props.theme.enclosure.background)};
    font-size: 13px;
    margin: 0;
    padding: 7px 12px;
    color: ${(props) => props.theme.colors.accent};
`
