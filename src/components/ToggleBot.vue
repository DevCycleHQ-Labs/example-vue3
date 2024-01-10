<template>
  <div className="App-content">
    <div className="ToggleBot-message">
      "{{getMessage(spinSpeed)}}"
    </div>
    <img
      :src="getImageSource(spinSpeed, shouldWink)"
      :class="`ToggleBot-logo spin-${spinSpeed}`"
      alt="togglebot"
    />
    <div className="ToggleBot-variation">
      Serving Variation: <b>"{{getVariationName()}}"</b>
    </div>
  </div>
</template>

<script>
import { getDevCycleClient } from '../devcycle.js';


export default {
  name: 'ToggleBot',
  data() {
    return {
      spinSpeed: 'off',
      shouldWink: false,
    }
  },
  methods: {
    getMessage: (spinSpeed) => {
      switch (spinSpeed) {
        case 'slow':
          return 'Awesome, look at you go!'
        case 'fast':
          return 'This is fun!'
        case 'off-axis':
          return '...I\'m gonna be sick...'
        case 'surprise':
          return 'What the unicorn?'
        default:
          return 'Hello! Nice to meet you.'
      }
    },
    getImageSource: (spinSpeed, shouldWink) => {
      if (spinSpeed === 'surprise') return 'unicorn.svg'
      return shouldWink ? 'togglebot-wink.png' : 'togglebot.png'
    },
    getVariationName: () => {
      const devcycleClient = getDevCycleClient()
      return devcycleClient.config.features['hello-togglebot']?.variationName ?? 'Default'
    }
  },
  mounted() {
    const devcycleClient = getDevCycleClient()

    const speedVariable = devcycleClient.variable('togglebot-speed', 'off')
    this.spinSpeed = speedVariable.value
    speedVariable.onUpdate((newValue) => {
      this.spinSpeed = newValue
    })

    const winkVariable = devcycleClient.variable('togglebot-wink', false)
    this.shouldWink = winkVariable.value
    winkVariable.onUpdate((newValue) => {
      this.shouldWink = newValue
    })
  }
}
</script>
