<template>
   <div class="container-fluid position-relative vh-100 overflow-hidden">
    <div class="wave-container">
      <img src="@/assets/wave_animation_light.svg" alt="wave animation" class="wave-background light-mode-wave" />
      <img src="@/assets/wave_animation_dark.svg" alt="wave animation" class="wave-background dark-mode-wave" />
    </div>
    <div class="container h-100 d-flex align-items-center hero-bennner">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-12 col-lg-6 d-flex justify-content-center">
          <img src="@/assets/image1.png" class="img-fluid  w-100 rounded-4" alt="image" width="700"
            height="500" loading="lazy" />
        </div>
        <div class="col-lg-6 text-start">
          <h1 class="display-5 fw-bold lh-1 mb-3">
            Hi there !
          </h1>
          <div class="text-container ">
            <span class="text first-text display-1">I am a</span>
            <span class="text sec-text display-1">Front-End Developer</span>
          </div>
          <p class="text-start fs-5">As a passionate student in my final year, i specialize in front-end
            development and UI/UX Design with a strong background in both
            fields, I bring creativity, technical skills, and a fresh
            perspective to every project. My dedication to learning and staying
            up to date with the latest trends allows me to effectively deliver
            value to any team. I am excited to apply my creative ideas and
            commitment to your company.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-startn ">
            <MyButton @click="goToContact" class="btn btn-primary btn-lg px-4 me-md-2 action-btn  mt-4">Contact</MyButton>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyButton from '@/components/MyButton.vue';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();

const goToContact = () => {
  router.push({ name: 'Contact' });
}

onMounted(() => {
  const text = document.querySelector(".sec-text");

  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Front-End Developer";
    }, 0);
    setTimeout(() => {
      text.textContent = "UX & UI Developer"
    }, 4000);
    setTimeout(() => {
      text.textContent = "Freelencer"
    }, 8000)

  }
  textLoad();
  setInterval(textLoad, 12000)
})
</script>

<style scoped>
.about-me {
  padding: 20px;
}

.text-container {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.text {
  position: relative;
  color: var(--red);
  font-size: 30px;
  font-weight: 600;
}

/* dark mode */
body.dark-mode .text {
  position: relative;
  color: var(--blue);
  font-size: 30px;
  font-weight: 600;
}

.first-text {
  color: var(--black);
  margin-right: 10px;
}

/* Dark mode */
body.dark-mode .first-text,
body.dark-mode h1 {
  color: var(--white);
}

.sec-text:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--white);
  border-left: 2px solid var(--red);
  animation: animate 4s steps(12) infinite;
}

/* Dark mode  */
body.dark-mode .sec-text:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--charcoal);
  border-left: 2px solid var(--blue);
  animation: animate 4s steps(12) infinite;
}

@keyframes animate {

  40%,
  60% {
    left: calc(100% + 4px);
  }

  100% {
    left: 0%;
  }
}

.action-btn {
  color: var(--white);
  background-color: var(--red);
  font-weight: bold;

}

.action-btn:hover {
  color: var(--white);
  background-color: var(--black);
  font-weight: bold;
}

/* Dark mode */
body.dark-mode .action-btn {
  color: var(--white);
  background-color: var(--primary-blue);
  font-weight: bold;

}
body.dark-mode .action-btn:hover {
  color: var(--blue);
  background-color: var(--white);
  font-weight: bold;
}

.wave-container {
  position: fixed;
  top: 40vh; /* Moves the wave down by 20% of viewport height */
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}


.wave-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
}

.container-fluid {
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden !important;
}


.light-mode-wave {
  display: block;
}

.dark-mode-wave {
  display: none;
} 

body.dark-mode .light-mode-wave {
  display: none;
}

body.dark-mode .dark-mode-wave {
  display: block;
}
</style>