<template>
  <div id="app" class="text-blue-darker container mx-auto">
    <div class="main-nav">
      <Logo />
      <Burger />
    </div>
    <Sidebar />
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}
</style>
<script>
import _ from 'lodash'
import Burger from './components/Burger'
import Sidebar from './components/Sidebar'
import Logo from './components/Logo'

export default {
  components: { Logo, Sidebar, Burger },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeWindow)
  },
  beforeCreate () {
    const { innerWidth } = window

    this.$store.dispatch('window/windowIsResizing', {
      width: innerWidth
    })

    this.$nextTick(function () {
      window.addEventListener('resize', this.resizeWindow)
    })
  },

  methods: {
    // eslint-disable-next-line
    resizeWindow: _.debounce(function() {
      const { innerWidth } = window

      this.$store.dispatch('window/windowIsResizing', {
        width: innerWidth
      })
    }, 100)
  }
}
</script>
