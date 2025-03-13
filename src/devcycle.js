import * as DevCycle from '@devcycle/js-client-sdk'

let devcycleClient = null

export function initializeDevCycle() {
  const DEVCYCLE_CLIENT_SDK_KEY = import.meta.env.VITE_DEVCYCLE_CLIENT_SDK_KEY
  if (!DEVCYCLE_CLIENT_SDK_KEY) {
    alert('Set your VITE_DEVCYCLE_CLIENT_SDK_KEY environment variable to use the DevCycle JS SDK.')
  }

  devcycleClient = DevCycle.initializeDevCycle(
    DEVCYCLE_CLIENT_SDK_KEY,
    // Modify this user object to see how it affects targeting
    {
      user_id: 'user-1',
      name: 'User 1',
      email: 'user1@email.com'
    },
    { 
      logLevel: 'debug',
      // Controls the interval between flushing events to the DevCycle servers
      eventFlushIntervalMS: 1000
    }
  )
  return devcycleClient
}

export function getDevCycleClient() {
  return devcycleClient
}