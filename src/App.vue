<template>
  <div class="container-fluid position-relative">
  <div id="app">
    <LoadingScreen />
    <CustomCursor/>
    <button @click="toggleMode">Toggle Mode</button>
    <AppNavigation />
    <router-view></router-view>

  </div>
      
</div>
</template>

<script setup>
import { ref } from 'vue';
import AppNavigation from './components/AppNavigation.vue';
import CustomCursor from './components/CustomCursor.vue';
import LoadingScreen from './components/LoadingScreen.vue';
// Define a ref for dark mode state
const isDarkMode = ref(false);

// Function to toggle dark mode
const toggleMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle('dark-mode', isDarkMode.value);
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  height: 100vh;
  position: relative;
  cursor: none; /* Hide default mouse pointer */
}

</style>
