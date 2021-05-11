<template>
  <div id="app">
    <the-navbar />
    <div class="" v-if="loading">
      Cargando ...
    </div>
    <router-view v-show="!loading" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  computed: {
    ...mapState({
      loading: (state) => state.loader.isLoading,
    }),
  },
  components: {
    TheNavbar,
  },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
