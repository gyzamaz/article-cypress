import { actions } from './actions'
import { mutations } from './mutations'

export default {
  namespaced: true,
  state: {
    isDesktop: null,
    isMobile: null,
    isTablet: null
  },
  actions,
  mutations
}
