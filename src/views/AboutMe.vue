<template>
    <div class="about-me">
      <h1>About Me</h1>
      <p>This is the about me section of the personal website.</p>
      <MyButton @click="goToContact">Contact Me</MyButton>
    </div>
  </template>
  
  <script setup>
  import MyButton from '@/components/MyButton.vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goToContact = () => {
    router.push({ name: 'Contact' });
  }
  </script>
  
  <style scoped>
  .about-me {
    padding: 20px;
  }
  </style>
  