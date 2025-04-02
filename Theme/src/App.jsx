import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'

function App() {

    const [ThemeMode, SetThemeMode] = useState('light');

    const lightTheme = () => {
        SetThemeMode('light');
    };

    const darkTheme = () => {
        SetThemeMode('dark');
    }

    useEffect(() => {
        document.querySelector('html').classList.remove('dark', "light")
        document.querySelector('html').classList.add(ThemeMode)
    }, [ThemeMode]);

  return (
    <ThemeProvider value={{ThemeMode, lightTheme, darkTheme}}>
        <div className='flex flex-col justify-center items-center h-screen'>
            <ThemeBtn />
            <Card />
        </div>
    </ThemeProvider>
  )
}

export default App