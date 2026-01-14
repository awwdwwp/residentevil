<template>
    <div class="theme-switcher-wrapper">
        <v-btn
    icon
    color="primary"
    @click="toggleTheme"
    :title="currentTheme === 'default' ? 'Default' : 'Requiem'">
        <v-icon>
            {{ currentTheme === 'default' ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}
        </v-icon>
    </v-btn>
    </div>
    
    <div class="theme-palette">
        <div
        v-for="(color,name) in themeColors"
        :key="name"
        :style="{background:color}"
        class="palette-dot"
        :title="name"
        ></div>
    </div>
    
    
</template>

<script lang="ts">
    import { useThemeStore } from '@/stores/themeStore';


    export default {
        name:'ThemeSwitcher',
        data() {
            return {
                store: useThemeStore()
            }
        },
        computed: {
            currentTheme() {
                return this.store.currentTheme
            },
            themeColors(): Record<string,string>{
                 const theme = this.$vuetify.theme.current as { colors: Record<string,string> }

                const colors = theme.colors
                return {
                    primary:colors.primary as string,
                    secondary:colors.secondary  as string,
                    surface:colors.surface as string,
                    accent:colors.accent as string
                }
            }
        },
        methods: {
            toggleTheme() {
                const newTheme = this.currentTheme === 'default' ? 'requiem' : 'default'

                this.store.setTheme(newTheme)

                
            }
        }
    }
</script>

<style scoped>
.v-btn {
  transition: transform 0.2s;
}
.v-btn:hover {
  transform: scale(1.1);
}
.theme-switcher-wrapper {
  display: flex;
  flex-direction: column;
  align-items:center;
}

.theme-palette {
  display: flex;
  gap: 4px;
  
}

.palette-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>