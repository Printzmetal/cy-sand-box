import pluginCypress from 'eslint-plugin-cypress'
export default [
  {
    plugins: {
      cypress: pluginCypress
    },
    rules: {
      'cypress/no-unnecessary-waiting': 'off'
    }
  }
]