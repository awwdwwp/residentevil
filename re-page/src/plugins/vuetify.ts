import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import {aliases, mdi} from 'vuetify/iconsets/mdi'
import type { ThemeDefinition } from 'vuetify'

export const reTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#0b0b0b',
    surface: '#111111',
    primary: '#b40000',
    secondary: '#920000',
    accent: '#ff0000',
    error: '#ff3333',
    info: '#9e9e9e',
    success: '#37ff00',
    warning: '#ffcc00',
  }
}

export const vuetify = createVuetify({
    icons: {
        defaultSet:'mdi',
        aliases,
        sets: {mdi},

    },
    theme: {
        defaultTheme: 'reTheme',
        themes: {
            reTheme
        },
    },
})