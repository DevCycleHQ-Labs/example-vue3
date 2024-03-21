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
      return shouldWink ? 'togglebot-wink.svg' : 'togglebot.svg'
    },
    getVariationName: () => {
      const features = getDevCycleClient().allFeatures()
      return features['hello-togglebot']?.variationName ?? 'Default'
    }
  },
  mounted() {
    const devcycleClient = getDevCycleClient()

    this.spinSpeed = devcycleClient.variableValue('togglebot-speed', 'off')
    devcycleClient.subscribe('variableUpdated:togglebot-speed', (key, updatedVariable) => {
      this.spinSpeed = updatedVariable.value
    })

    this.shouldWink = devcycleClient.variableValue('togglebot-wink', false)
    devcycleClient.subscribe('variableUpdated:togglebot-wink', (key, updatedVariable) => {
      this.shouldWink = updatedVariable.value
    })
  }
}
</script>
