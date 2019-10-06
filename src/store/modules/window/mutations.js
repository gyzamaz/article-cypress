import types from './types'

export const mutations = {
  [types.RESIZE_WINDOW] (state, data) {
    state.width = data
  },
  [types.SET_DESKTOP_SIZE] (state, currentState) {
    state.isDesktop = currentState
  },
  [types.SET_MOBILE_SIZE] (state, currentState) {
    state.isMobile = currentState
  },
  [types.SET_TABLET_SIZE] (state, currentState) {
    state.isTablet = currentState
  }
}
