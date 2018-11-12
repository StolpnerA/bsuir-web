<template>
  <div id="app">
    <navigation-bar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';

export default {
  components: {
    NavigationBar,
  },
};
</script>


<style lang="scss">
#app {
  font-size: 4vmin;
  display: flex;
  max-width: 500px;
  justify-content: space-between;
}
</style>
