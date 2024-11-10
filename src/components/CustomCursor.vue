<template>
    <div>
      <div class="big-cursor" ref="bigCursor"></div>
      <div class="small-cursor" ref="smallCursor"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  const bigCursor = ref(null);
  const smallCursor = ref(null);
  
  onMounted(() => {
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
  
      // Update small cursor position immediately
      smallCursor.value.style.left = `${clientX}px`;
      smallCursor.value.style.top = `${clientY}px`;
  
      // Update big cursor position with a delay
      bigCursor.value.style.transform = `translate(${clientX - 34}px, ${clientY - 22}px)`;



    });
  });  </script>
  <style scoped>
  .big-cursor {
    width: 44px;
    height: 44px;
    background-color: var(--big-cursor-color);
    z-index: 1001;
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.5s ease-out; /* Longer duration for delay effect */
  }
  
  .small-cursor {
    width: 14px;
    height: 14px;
    background-color: var(--small-cursor-color);
    z-index: 1002; 
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }
 
  </style>
  