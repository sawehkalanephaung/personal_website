<template>
  <div class="container-fluid position-relative">
  <div id="app">
    <AppNavigation />
    <router-view></router-view>

  </div>
      
</div>
</template>

<script setup>
import AppNavigation from './components/AppNavigation.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
