import React,{ createContext } from 'react';
import { useColorScheme } from 'react-native';

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    
    const scheme = useColorScheme();
    let text = scheme === 'dark' ? 'white' : '#2d333a';
    let back = scheme === 'dark' ? '#2d333a' : 'white';
   
    return (
        <ThemeContext.Provider value={{ back ,text}}>
            {children}
        </ThemeContext.Provider>

    )
};
