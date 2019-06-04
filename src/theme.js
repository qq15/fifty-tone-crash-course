import React from 'react';

export const themes = {
    light: {},
    dark: {
        foreground: '#fff',
        background: '#222222'
    },
};

export const ThemeContext = React.createContext(themes.dark);
