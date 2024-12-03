import {useMemo, useState, useEffect, createContext} from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { palette } from './palette';
import { shadows } from './shadows';
import { overrides } from './overrides';
import { typography } from './typography';
import { customShadows } from './custom-shadows';


// ----------------------------------------------------------------------

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {

    const [darkMode, setDarkMode] = useState(null);

    const handleThemeChange = (newTheme) => {
        localStorage.setItem('theme', newTheme);
        setDarkMode(newTheme === 'dark');
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setDarkMode(storedTheme === 'dark');
        } else {
            localStorage.setItem('theme', 'light');
            setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (darkMode !== null) {
            const theme = darkMode ? 'dark' : 'light';
            handleThemeChange(theme);
        }
    }, [darkMode]);


    const memoizedValue = useMemo(
        () => ({
            palette: palette(darkMode),
            typography,
            shadows: shadows(),
            customShadows: customShadows(),
            shape: { borderRadius: 8 }
        }),
        [darkMode]
    );

    const theme = createTheme(memoizedValue);

    theme.components = overrides(theme);

    return (
        <ThemeContext.Provider value={[darkMode, setDarkMode]}>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node,
};