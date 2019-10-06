<template>
    <router-link :to="{ name: 'home' }">
        <img alt="Vue logo" src="../assets/logo.png" class="logo" data-testid="vueLogo">
    </router-link>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped>
    .logo {
        width: 10%;
        min-width: 120px;
    }
</style>
