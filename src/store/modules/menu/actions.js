import types from './types'

export const actions = {
  toggleNavigation ({ state, commit }, data) {
    commit(types.TOGGLE_NAVIGATION, data)
  }
}
