import types from './types'

const BREAK_POINTS = {
  'MOBILE': 768,
  'TABLET': 991
}

export const actions = {
  windowIsResizing ({ commit }, { width }) {
    commit(types.RESIZE_WINDOW, width)
    commit(types.SET_MOBILE_SIZE, width < BREAK_POINTS.MOBILE)
    commit(types.SET_TABLET_SIZE, width <= BREAK_POINTS.TABLET && width >= BREAK_POINTS.MOBILE)
    commit(types.SET_DESKTOP_SIZE, width > BREAK_POINTS.TABLET)
  },
  setDesktopState ({ commit }, currentState) {
    commit(types.SET_DESKTOP_SIZE, currentState)
  },
  setMobileState ({ commit }, currentState) {
    commit(types.SET_MOBILE_SIZE, currentState)
  },
  setTabletState ({ commit }, currentState) {
    commit(types.SET_TABLET_SIZE, currentState)
  }
}
