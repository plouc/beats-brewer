import React from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'
import './ui/normalize.css'
import { GlobalStyle } from './ui/theme/GlobalStyle'
import { AppHeader } from './ui/AppHeader'
import { Explorer } from './explorer/Explorer'
import { Playlist } from './playlist/Playlist'
import { Sequencer } from './sequencer/Sequencer'
import { Mixer } from './mixer/Mixer'
import { Keyboard } from './keyboard/Keyboard'
import { Drums } from './drums/Drums'
import { EffectsControls } from './effects/EffectsControls'
import { DemoComponents } from './DemoComponents'
import { WelcomeModal } from './ui/WelcomeModal'
import { useAppStore } from './store/useApp'

const SHOW_DEMO_COMPONENTS = true
const SHOW_PLAYLIST = false
const SHOW_KEYBOARD = false
const SHOW_DRUMS = false
const SHOW_WELCOME_MODAL = false

export const App = () => {
    const skin = useAppStore((state) => state.skin)
    const project = useAppStore((state) => state.project)
    const openedPattern = useAppStore((state) => {
        if (!state.project) return undefined
        if (state.openedPatternId === null) return undefined

        return state.project.patterns.find((pattern) => pattern.id === state.openedPatternId)
    })

    return (
        <ThemeProvider theme={skin.theme}>
            <GlobalStyle />
            {SHOW_WELCOME_MODAL && <WelcomeModal />}
            <Layout>
                <AppHeader />
                <Explorer />
                <Content>
                    {SHOW_DEMO_COMPONENTS && <DemoComponents />}
                    {SHOW_PLAYLIST && <Playlist />}
                    {SHOW_KEYBOARD && <Keyboard />}
                    {SHOW_DRUMS && <Drums />}
                    {openedPattern && openedPattern.type === 'sequencer' && (
                        <Row>
                            <Sequencer pattern={openedPattern} />
                        </Row>
                    )}
                    {project && (
                        <Row>
                            <Mixer />
                            <EffectsControls />
                        </Row>
                    )}
                </Content>
            </Layout>
        </ThemeProvider>
    )
}

const Layout = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: 46px auto;
`

const Content = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    padding: ${(props) => props.theme.sizes.mainGap / 2}px;
`

const Row = styled.div`
    display: flex;
`
