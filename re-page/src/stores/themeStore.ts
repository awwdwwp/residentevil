import {defineStore} from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: ()=> ({
        currentTheme: localStorage.getItem('theme') || 'default'
    }),
    actions: {
        setTheme(theme: 'default' | 'requiem') {
            this.currentTheme = theme
            localStorage.setItem('theme', theme)
        }
    }
})