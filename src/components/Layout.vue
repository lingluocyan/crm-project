<template>
  <div>
    <app-header></app-header>
    <app-nav-bar></app-nav-bar>
    <app-main></app-main>
  </div>
</template>

<script>
import AppHeader from './AppHeader/index.vue'
import AppMain from './AppMain/index'
import AppNavBar from "./AppNavBar/index"
export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: { AppHeader, AppMain, AppNavBar }
}
</script>

<style scoped lang="scss"></style>
