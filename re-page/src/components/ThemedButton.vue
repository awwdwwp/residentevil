<template>
    <v-btn
    :class="['themed-btn', customClass]"
    :style="computedStyle"
    :color="color"
    :variant="variant"
    @click="handleClick">
    <slot />
    </v-btn>
</template>

<script lang="ts">
    import { useThemeStore } from '@/stores/themeStore';

    export default {
        name:'ThemedButton',
        data() {
            return {
                store: useThemeStore()
            }
        }, props: {
            color: {type:String, default:'primary'},
            variant:{type:String as ()=> 'flat' | 'text' | 'elevated' | 'outlined' | 'plain' | 'tonal'
                , default:'flat'},
            customClass:{type:String, default:''}
        },
        emits: ['click'],
        methods: {
            handleClick() {
                this.$emit('click')
            }
        },
        computed: {
            currentTheme(): string {
                return this.store.currentTheme
            },
            computedStyle(): Record<string, string> {
                const colors = this.$vuetify.theme.current.colors || {}
                const bg = colors['primary'] || '#24010546'

                let textColor = 'accent'
                if (this.color === 'primary' || this.color === 'accent') {
                    textColor = colors['surface'] || '#fff'
                } else if (this.color === 'surface' || this.color === 'secondary') {
                    textColor = colors['accent'] || '#ff0000'
                }
                const borderColor = colors['secondary']
                return {
                    background:bg,
                    color: `${textColor} !important`,
                    width: '100%',
                    maxWidth:'220px',
                    height: '50px',
                    border: `1px solid ${borderColor}`,
                    borderRadius: '0px',
                    fontSize: '14px',
                    letterSpacing: '0.05rem',
                    transition: 'background 0.3s',
                    position: 'relative',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }
        }
    }
</script>

<style scoped>
.themed-btn {
    font-family: 'Oswald', sans-serif; 
}

.themed-btn:hover {
  filter: brightness(2);
  
}

.themed-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0.25);
  pointer-events: none;
}
@media (max-width: 600px) {
  .themed-btn {
    font-size: 12px !important;
    min-height: 36px;
    padding: 0 12px;
  }
}
</style>