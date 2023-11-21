<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<script>
import { ref } from 'vue'
import { getDevCycleClient } from '../devcycle.js';
import users from '../data/users.js'

const userSelect = ref(null)

export default {
  data() {
    return {
      users,
      currentUser: undefined,
      devcycleClient: undefined
    }
  },
  mounted() {
    this.devcycleClient = getDevCycleClient()
  },
  methods: {
    /**
     * Identifying a new user object will retreive new variable values
     */
    identifyUser(changeEvent) {
      const user = JSON.parse(changeEvent.target.value)
      this.devcycleClient.identifyUser(user)
    },
    /**
     * Resetting the user will clear the user's identity and retreive new variable values
     */
    resetUser() {
      this.devcycleClient.resetUser()
      userSelect.value.value = '{}'
    },
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <h3>
    You’ve successfully created a project with
    <a href="https://docs.devcycle.com/sdk/client-side-sdks/javascript/" target="_blank" rel="noopener">DevCycle</a> +
    <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
    <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
  </h3>

  <select :onChange="identifyUser" className="App-button" ref="userSelect">
    <option
      v-for="user in users"
      :key="user.user_id"
      :value="JSON.stringify(user)"
    >
      {{user.name}}
    </option>
    <option key="anonymous" value="{}">Anonymous User</option>
  </select>

  <button class="App-button" :onClick="resetUser">Reset User</button>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
  margin: 0.5em;
}

h3 {
  font-size: 1.2rem;
}
</style>
