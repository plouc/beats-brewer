import React, { useEffect } from 'react'
import * as Tone from 'tone'
import styled, { ThemeProvider } from 'styled-components/macro'
import './ui/normalize.css'
import { GlobalStyle } from './ui/theme/GlobalStyle'
import { AppHeader } from './ui/AppHeader'
import { Explorer } from './explorer/Explorer'
import { Sequencer } from './sequencer/Sequencer'
import { Keyboard } from './keyboard/Keyboard'
import { Drums } from './drums/Drums'
import { useAppStore } from './useApp'

function App() {
    const theme = useAppStore((state) => state.theme)
    const patterns = useAppStore((state) => state.openedPatterns)

    useEffect(() => {
        Tone.start()
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <AppHeader />
                <Explorer />
                <div>
                    {patterns.map((pattern) => {
                        if (pattern.type === 'sequencer') {
                            return <Sequencer key={pattern.id} pattern={pattern} />
                        }

                        return (
                            <div key={pattern.id}>
                                {pattern.name} {pattern.type}
                            </div>
                        )
                    })}
                    <div>
                        <Keyboard />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                        }}
                    >
                        <Drums />
                    </div>
                </div>
            </Layout>
        </ThemeProvider>
    )
}

const Layout = styled.div`
    display: grid;
    grid-template-columns: 200px auto;
`

export default App
