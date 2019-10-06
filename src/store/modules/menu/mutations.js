import types from './types'

export const mutations = {
  [types.TOGGLE_NAVIGATION] (state) {
    state.isNavOpen = !state.isNavOpen
  }
}
