import React, { useEffect } from 'react'
import * as Tone from 'tone'
import styled, { ThemeProvider } from 'styled-components/macro'
import './ui/normalize.css'
import { defaultTheme } from './ui/theme/defaultTheme'
// import { lightTheme } from './ui/theme/lightTheme'
import { GlobalStyle } from './ui/theme/GlobalStyle'
import { AppHeader } from './ui/AppHeader'
import { Explorer } from './explorer/Explorer'
import { Sequencer } from './sequencer/Sequencer'
import { Keyboard } from './keyboard/Keyboard'
import { Drums } from './drums/Drums'

function App() {
    useEffect(() => {
        Tone.start()
    }, [])

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Layout>
                <AppHeader />
                <Explorer />
                <div>
                    <div
                        style={{
                            display: 'flex',
                        }}
                    >
                        <Sequencer />
                    </div>
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
