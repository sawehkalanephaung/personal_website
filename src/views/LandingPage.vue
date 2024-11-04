<template>
    <div :class='landing-page'>
      <section class="hero">
        <h1>Welcome to My Personal Website</h1>
        <p>Discover my projects, experience, and more.</p>
        <MyButton @click="navigateToAbout">Learn More About Me</MyButton>
      </section>
    </div>
  </template>
  
  <script setup>
  import MyButton from '@/components/MyButton.vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  
  const navigateToAbout = () => {
    router.push({ name: 'AboutMe' });
  }
  </script>
  
  <style scoped>
  .landing-page {
    text-align: center;
    padding: 50px;
  }
  
  .hero {
    background-color: #f8f9fa;
    padding: 50px;
    border-radius: 10px;
  }
  
  .hero h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  .hero p {
    font-size: 1.2em;
    margin-bottom: 30px;
  }
  </style>
  