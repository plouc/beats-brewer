import React from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'
import './ui/normalize.css'
import { GlobalStyle } from './ui/theme/GlobalStyle'
import { AppHeader } from './ui/AppHeader'
import { Explorer } from './explorer/Explorer'
import { Sequencer } from './sequencer/Sequencer'
import { Mixer } from './mixer/Mixer'
// import { Keyboard } from './keyboard/Keyboard'
// import { Drums } from './drums/Drums'
import { EffectsControls } from './effects/EffectsControls'
// import { SampleComponent } from './SampleComponent'
import { useAppStore } from './useApp'

function App() {
    const theme = useAppStore((state) => state.theme)
    const project = useAppStore((state) => state.project)
    const patterns = useAppStore((state) => state.openedPatterns)
    const app = useAppStore()
    console.log(app)

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <AppHeader />
                <Explorer />
                <Content>
                    {/*
                    <Row>
                        <SampleComponent />
                        <SampleComponent />
                    </Row>
                    */}
                    {patterns.map((pattern) => {
                        if (pattern.type === 'sequencer') {
                            return (
                                <Row key={pattern.id}>
                                    <Sequencer pattern={pattern} />
                                </Row>
                            )
                        }

                        // no component matching the pattern type available
                        return null
                    })}
                    {project && (
                        <Row>
                            <Mixer />
                            <EffectsControls />
                        </Row>
                    )}
                    {/*
                    <Keyboard />
                    <Drums />
                    */}
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

export default App
