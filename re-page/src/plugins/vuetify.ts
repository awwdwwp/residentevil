import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import {aliases, mdi} from 'vuetify/iconsets/mdi'
import { reTheme } from './themes/reTheme'
import { requiemTheme } from './themes/requiemTheme'

export const vuetify = createVuetify({
    icons: {
        defaultSet:'mdi',
        aliases,
        sets: {mdi},

    },
    theme: {
        defaultTheme: 'default',
        themes: {
            default:reTheme,
            requiem:requiemTheme
        },
    },
})