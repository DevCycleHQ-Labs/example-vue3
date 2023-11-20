<script setup>
import UserContent from './components/UserContent.vue'
import ToggleBot from './components/ToggleBot.vue';
</script>

<script>
import { initializeDevCycle } from './devcycle.js';

export default {
  data() {
    return {
      initialized: false,
      greeting: ''
    }
  },
  async mounted() {
    /**
     * Initialize the DevCycle client with your SDK key and user
     */
    const devcycleClient = initializeDevCycle()

    /**
     * Wait for the client to initialize before accessing variable values
     */
    await devcycleClient.onClientInitialized(() => {
      this.initialized = true

      /**
       * The "variable" method will return a variable object that can be used to
       * access the variable's value and other properties.
       * If no value is defined for the current user, the default value will be returned.
       */
      const greetingVariable = devcycleClient.variable('togglebot-greeting', 'Hello World!')
      this.greeting = greetingVariable.value
      greetingVariable.onUpdate((newValue) => {
        console.log('greeting updated', newValue)
        this.greeting = newValue
      })
    })
  }
}
</script>

<template>
  <div v-if="initialized">
    <ToggleBot />
    <UserContent :msg="greeting" />
  </div>
  <div v-else>
    <h1>Loading...</h1>
  </div>

  <a
    className="App-link"
    href="https://docs.devcycle.com/sdk/client-side-sdks/javascript/"
    target="_blank"
    rel="noopener noreferrer"
  >
    DevCycle JS SDK Docs
  </a>
</template>
