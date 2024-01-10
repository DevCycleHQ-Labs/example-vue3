<template>
  <div className="App-description">
    <div v-if="variationKey === undefined">
      <h3>Welcome to DevCycle's example app.</h3>
      <p>
        Follow our README guide to create the Feature and Variables you need to control this app in DevCycle.
      </p>
    </div>
    <div v-else-if="variationKey === 'variation-wink'">
      <h3>Great! You've taken the first step in exploring DevCycle.</h3>
      <p>
        You've successfully toggled your very first Variation. You are now serving a different value to your users and you can see how the example app has reacted to this change.
      </p>
      <p>
        Next, go ahead and create a whole new Variation to see what else is possible in this app.
      </p>
    </div>
    <div v-else-if="variationKey === 'variation-base'">
      <h3>Welcome to DevCycle's example app.</h3>
      <p>
        If you got here through the onboarding flow, follow the instructions in the onboarding flow to change and create new Variations and see how the app reacts to new Variable values.
      </p>
    </div>
    <!-- custom variation -->
    <div v-else>
      <h3>You're getting the hang of things.</h3>
      <p>
        By creating a new Variation with new Variable values and toggling it on for all users, you've already explored the fundamental concepts within DevCycle.
      </p>
      <p>
        There's still so much more to the platform, so go ahead and complete the onboarding flow and play around with the feature that controls this example in your dashboard.
      </p>
    </div>
  </div>
</template>

<script>
import { getDevCycleClient } from '../devcycle.js';

export default {
  data() {
    return {
      variationKey: ''
    }
  },
  methods: {
    getVariationKey: () => {
      return getDevCycleClient().config.features['hello-togglebot']?.variationKey
    }
  },
  mounted() {
    this.variationKey = this.getVariationKey()
    getDevCycleClient().subscribe('configUpdated', () => {
      this.variationKey = this.getVariationKey()
    })
  }
}
</script>
