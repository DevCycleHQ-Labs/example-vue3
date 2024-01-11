<script setup>
import AppDescription from './components/AppDescription.vue'
import ToggleBot from './components/ToggleBot.vue';
</script>

<script>
import { initializeDevCycle } from './devcycle.js';

export default {
  data() {
    return {
      initialized: false,
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
    })
  }
}
</script>

<template>
  <div className="App">
    <div className="App-header">
      <p>Demo Application</p>
      <img
        height="46"
        src="/devcycle-togglebot-full-colour.svg"
        alt="DevCycle"
      />
    </div>
    
    <div v-if="initialized" className="App-wrapper">
      <ToggleBot />
      <AppDescription />
    </div>
    <div v-else>
      <h2>Initializing...</h2>
    </div>

    <a
      className="App-link"
      href="https://docs.devcycle.com/sdk/client-side-sdks/javascript/"
      target="_blank"
      rel="noopener noreferrer"
    >
      DevCycle JS SDK Docs
    </a>
  </div>
</template>
