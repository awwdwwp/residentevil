<template>
    <v-container class="game-wrapper my-16">
        <v-card class="game-card pa-8" elevation="12">
            <v-img 
            :src="reqImage"
            class="mx-auto mb-6"
            contain/>

            <v-img 
            :src="logoImage"
            max-width="420"
            class="mx-auto mb-6"
            contain/>
            
            <v-row justify="center" class="mb-8">
                <v-col cols="4" sm="3" v-for="unit in countdownUnits"
                :key="unit.label"
                >
                <div class="time-value">{{ unit.value }}</div>
                <div class="time-label">{{ unit.label }}</div>
                </v-col>
            </v-row>

            <p class="release-text mb-6">
                Launches February 27
            </p>
        </v-card>
    </v-container>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        name:'GameCountdown',
        data() {
            return {
                reqImage: import.meta.env.BASE_URL + 'req.webp',
                logoImage: import.meta.env.BASE_URL + 'logo_w.webp',
                targetDate: new Date('2026-02-27T00:00:00'),
                now:new Date(),
                timer: null as number | null
            }
        },
        computed: {
            timeLeft() {
                const diff = this.targetDate.getTime() - this.now.getTime()
                const totalSeconds = Math.max(Math.floor(diff / 1000), 0)

                return {
                    days: Math.floor(totalSeconds / 86400),
                    hours: Math.floor((totalSeconds % 86400) / 3600),
                    minutes: Math.floor((totalSeconds % 3600) / 60),
                    seconds: totalSeconds % 60
                }
            },
            countdownUnits() {
                return [
                    {label: 'Days', value:this.timeLeft.days},
                    {label: 'Hours', value:this.pad(this.timeLeft.hours)},
                    {label: 'Minutes', value:this.pad(this.timeLeft.minutes)},
                    {label: 'Seconds', value:this.pad(this.timeLeft.seconds)}
                ]
            }
        },
        methods: {
            updateTime() {
                this.now = new Date()
            },
            pad(value:number): string {
                return value.toString().padStart(2, '0')
            }
        },
        mounted() {
            this.timer = window.setInterval(this.updateTime,1000)
        },
        unmounted() {
            if (this.timer) clearInterval(this.timer)
        }
    })
</script>

<style scoped>
.game-wrapper {
  display: flex;
  justify-content: center;
}

.game-card {
  max-width: 900px;
  width: 100%;
  background: linear-gradient(180deg, #0a0a0a, #141414);
  border: 1px solid rgba(214, 214, 214, 0.4);
  text-align: center;
  box-shadow: 0 0 40px rgba(17, 0, 0, 0.35);
}

.time-box {
  background: rgba(0, 0, 0, 0.65);
  border: 1px solid rgba(0, 0, 0, 0.6);
  padding: 18px 10px;
  border-radius: 10px;
}

.time-value {
  font-size: 2.4rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}

.time-label {
  font-size: 0.85rem;
  letter-spacing: 1px;
  color: #ccc;
  text-transform: uppercase;
}

.release-text {
  color: #ddd;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.release-text, .time-label {
    font-family: 'Oswald', sans-serif;
}
</style>