<template>
  <img
    alt="ToggleBot"
    :class="`spin-${spinSpeed}`"
    :src="shouldWink ? togglebotWink : togglebot"
    width="125"
    height="125"
  />
</template>

<script>
import { getDevCycleClient } from '../devcycle.js';
import togglebot from '../assets/togglebot.png'
import togglebotWink from '../assets/togglebot-wink.png'

export default {
  name: 'ToggleBot',
  data() {
    return {
      togglebot,
      togglebotWink,
      spinSpeed: 'off',
      shouldWink: false,
    }
  },
  async mounted() {
    const speedVariable = getDevCycleClient().variable('togglebot-speed', 'off')
    this.spinSpeed = speedVariable.value
    speedVariable.onUpdate((newValue) => {
      this.spinSpeed = newValue
    })

    const winkVariable = getDevCycleClient().variable('togglebot-wink', false)
    this.shouldWink = winkVariable.value
    winkVariable.onUpdate((newValue) => {
      this.shouldWink = newValue
    })
  },
}
</script>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .spin-slow {
    animation: Spin infinite 20s linear;
  }
  .spin-fast {
    animation: Spin infinite 5s linear;
  }
  .spin-super-fast {
    animation: Spin infinite 1s linear;
  }
}

@keyframes Spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
