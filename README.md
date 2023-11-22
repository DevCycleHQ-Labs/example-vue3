# DevCycle JS SDK Example App with Vue.js

An example app built using [Vue.js](https://vuejs.org/) and the [DevCycle JS SDK](https://docs.devcycle.com/sdk/client-side-sdks/javascript/)

## Creating a Demo Feature
This example app is designed to have 3 different experiences: one for `user-1`, one for `user-2`, and the default experience for all other users. This requires that your project has a feature with the expected variables, as well as some simple targeting rules. To set up that feature:

* [Create a new Release feature](https://docs.devcycle.com/introduction/quickstart#2-create-a-feature) on the DevCycle dashboard and add the following variables:
   * `togglebot-greeting`: String
        * Set this to a different greeting message for each of your variations.
   * `togglebot-wink`: Boolean
        * Set this to `true` in one variation and `false` in the other.
   * `togglebot-speed`: String
        * Set this to `fast` in one variation, and `off` in the other
* Create the following [targeting rules](https://docs.devcycle.com/essentials/targeting) in your Development environment:
    * A rule targeting the user with `User ID` `is` `user-1` 
        * Serve this user your first variation
    * A rule targeting the user with `User ID` `is` `user-2`
        * Serve this user with the other variation

Now when you run the example app and switch your identity between these users, you'll be able to see the different variations.

## Running the Example

* Run `yarn install` in the project directory to install dependencies
* Create a `.env` file and set `VITE_DEVCYCLE_CLIENT_SDK_KEY` to the SDK Key for your environment.\
You can find this under [Settings > Environments](https://app.devcycle.com/r/environments) on the DevCycle dashboard. [Learn more about environments](https://docs.devcycle.com/essentials/environments).

### `yarn start`

Compile and Hot-Reload for Development

### `yarn build`

Compile and Minify for Production

### `yarn test`

Run Unit Tests with [Vitest](https://vitest.dev/)

## Documentation
For more information about using the DevCycle JS SDK, see [the documentation](https://docs.devcycle.com/sdk/client-side-sdks/javascript/)
