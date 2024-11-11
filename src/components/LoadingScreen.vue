<template>
    <div class="loading-overlay" v-if="isLoading">
      <div class="loader">
        <span class="loader-text">loading</span>
        <span class="load"></span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const isLoading = ref(true);
  
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 2000); // 2 seconds loading time
  });
  </script>
  
  <style scoped>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  body.dark-mode .loading-overlay {
    background-color: var(--charcoal);
  }
  
  .loader {
    width: 80px;
    height: 50px;
    position: relative;
  }
  
  .loader-text {
    position: absolute;
    top: 0;
    padding: 0;
    margin: 0;
    color: var(--red);
    animation: text_713 3.5s ease both infinite;
    font-size: .8rem;
    letter-spacing: 1px;
  }
  
  body.dark-mode .loader-text {
    color: var(--primary-blue);
  }
  
  .load {
    background-color: var(--red);
    border-radius: 50px;
    display: block;
    height: 16px;
    width: 16px;
    bottom: 0;
    position: absolute;
    transform: translateX(64px);
    animation: loading_713 3.5s ease both infinite;
  }
  
  body.dark-mode .load {
    background-color: var(--primary-blue);
  }
  
  .load::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--red-light);
    border-radius: inherit;
    animation: loading2_713 3.5s ease both infinite;
  }
  
  body.dark-mode .load::before {
    background-color: var(--blue-light);
  }
  
  /* Your provided keyframes remain the same */
  @keyframes text_713 {
  0% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }
  40% {
    letter-spacing: 2px;
    transform: translateX(26px);
  }
  80% {
    letter-spacing: 1px;
    transform: translateX(32px);
  }
  90% {
    letter-spacing: 2px;
    transform: translateX(0px);
  }
  100% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }
}

@keyframes loading_713 {
  0% {
    width: 16px;
    transform: translateX(0px);
  }
  40% {
    width: 100%;
    transform: translateX(0px);
  }
  80% {
    width: 16px;
    transform: translateX(64px);
  }
  90% {
    width: 100%;
    transform: translateX(0px);
  }
  100% {
    width: 16px;
    transform: translateX(0px);
  }
}

@keyframes loading2_713 {
  0% {
    transform: translateX(0px);
    width: 16px;
  }
  40% {
    transform: translateX(0%);
    width: 80%;
  }
  80% {
    width: 100%;
    transform: translateX(0px);
  }
  90% {
    width: 80%;
    transform: translateX(15px);
  }
  100% {
    transform: translateX(0px);
    width: 16px;
  }
}
  </style>
  