<template>
    <v-dialog v-model="dialog" max-width="1000">
        <v-card color="white" class="overlay-card">
            <v-card-text class="overlay-content">
                <v-img
            :src="article?.image"
            max-width="400px"
            class="overlay-image mx-auto"
            contain
            ></v-img>
            <v-card-title class="mt-2">{{ article?.title }}</v-card-title>
            <v-card-subtitle><div class="subtitle">{{ article?.date }} - {{ article?.category }}</div></v-card-subtitle>
            <div class="text-section">
                <pre class="wrap-text">{{ article?.content }}</pre>
            </div>
           

            <v-card-actions>
                <v-spacer />
                <ThemedButton color="surface" @click="$emit('update:modelValue', false)">
                    Close
                </ThemedButton>
            </v-card-actions>
            </v-card-text>
            
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
    import type { Article } from '@/stores/newsStore';
import ThemedButton from './ThemedButton.vue';

    export default {
        name:'ArticleOverlay',
        components: {ThemedButton},
        props: {
            modelValue: {
                type:Boolean,
                required: true
            },
            article: {
                type:Object as ()=> Article | null,
                default:null
            }
        },
        emits: ['update:modelValue'],
        computed: {
            dialog: {
                get():boolean {
                    return this.modelValue
                },
                set(value:boolean) {
                    this.$emit('update:modelValue', value)
                }
            }
        }
    }
</script>

<style scoped>
    .v-card-title {
        font-size: 1.7rem;
        font-weight: 600;
    }
    .v-card-subtitle {
        opacity: 1;
    }
.subtitle {
    padding: 6px;
    background-color: rgb(var(--v-theme-surface));
    color:white;
    display: inline-block;
  line-height: 1.4;
}
.overlay-card {
  max-height: 100vh;       
  overflow-y: auto;          
}

.wrap-text {
  white-space: pre-wrap;   
  word-break: break-word;
  overflow-wrap: break-word;     
  margin-top: 12px;
}
.v-card-text {
  max-height: 90vh;   
  overflow-y: auto; 
}
.overlay-image {
  width: 100%;
  aspect-ratio: 1;         
  object-fit: cover;
  margin-bottom: 16px;
}
.text-section {
  word-break: break-word;  
  overflow-wrap: break-word;
}

</style>