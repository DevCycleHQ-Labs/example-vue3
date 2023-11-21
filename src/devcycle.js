import * as DevCycle from '@devcycle/devcycle-js-sdk'
import users from './data/users'

let devcycleClient = null

export function initializeDevCycle() {
  const DEVCYCLE_CLIENT_SDK_KEY = import.meta.env.VITE_DEVCYCLE_CLIENT_SDK_KEY
  if (!DEVCYCLE_CLIENT_SDK_KEY) {
    alert('Set your VITE_DEVCYCLE_CLIENT_SDK_KEY environment variable to use the DevCycle JS SDK.')
  }

  devcycleClient = DevCycle.initializeDevCycle(
    DEVCYCLE_CLIENT_SDK_KEY,
    users[0], // initialize with user-1
    { logLevel: 'debug' }
  )
  return devcycleClient
}

export function getDevCycleClient() {
  return devcycleClient
}