import React from 'react'
import Navigation from './navigation'
import { ThemeProvider } from './src/Components/Context/themeContext'

const App = () =>
    <ThemeProvider>
        <Navigation />
    </ThemeProvider>

export default App