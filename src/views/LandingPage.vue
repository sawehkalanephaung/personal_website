<template>
  <div class="container-fluid position-relative vh-100 overflow-hidden d-flex justify-content-center align-items-center">
    <div class="wave-container">
      <img src="@/assets/wave_animation_light.svg" alt="wave animation" class="wave-background light-mode-wave" />
      <img src="@/assets/wave_animation_dark.svg" alt="wave animation" class="wave-background dark-mode-wave" />
    </div>
    <div class="text-center ">
      <h1 class="display-3 fw-bold lh-1 mb-3 fadeInLeft ">
        Hi there!
      </h1>
      <div class="text-container fadeInRight">
        <span class="text first-text display-2">I am a</span>
        <span class="text sec-text display-2">Frontend Developer</span>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-4 comeUp">
        <button @click="goToContact" class="btn btn-lg px-4 me-md-2 cta">
          <span>About me</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();

const goToContact = () => {
  router.push({ name: 'AboutMe' });
}

onMounted(() => {
  const text = document.querySelector(".sec-text");

  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Front-End Dev";
    }, 0);
    setTimeout(() => {
      text.textContent = "UX & UI Designer"
    }, 4000);
    setTimeout(() => {
      text.textContent = "Freelancer"
    }, 8000)
  }
  textLoad();
  setInterval(textLoad, 12000)
})
</script>

<style scoped>

.container-fluid {
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-container {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.text {
  position: relative;
  color: var(--red);
  font-size: clamp(2rem, 5vw, 3rem); /* Responsive font size */
  font-weight: 600;
}

body.dark-mode .text {
  color: var(--blue);
}

.first-text {
  color: var(--black);
  margin-right: 10px;
}

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

body.dark-mode .sec-text:before {
  background-color: var(--charcoal);
  border-left: 2px solid var(--blue);
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

/* CTA button styles */
.cta {
  position: relative;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin: 0;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 45px;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 50px;
  background: var(--red);
  width: 45px;
  height: 45px;
  transition: all 0.3s ease;
}
body.dark-mode .cta:before {
  background: var(--blue);
}

.cta span {
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-size: clamp(16px, 2vw, 18px);
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--black);
  white-space: nowrap;
  display: flex;
  align-items: center;
}
body.dark-mode .cta span {
  color: var(--white);
}

.cta:hover span {
  color: var(--white);
  transition: all 0.3s ease;
}
body.dark-mode .cta:hover span {
  color: var(--white);
}

.cta svg {
  position: relative;
  width: clamp(12px, 1.5vw, 15px);
  height: auto;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: var(--black);
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
  
}
body.dark-mode .cta svg {
  stroke: var(--white);
}

.cta:hover svg {
  stroke: var(--white);
  transform: translateX(0);
  transition: all 0.3s ease;
}

.cta:hover:before {
  width: 100%;
  background: var(--red);
}

.cta:hover svg {
  transform: translateX(0);

}

.cta:active {
  transform: scale(0.95);
  
}

/* wave animation */

.wave-container {
  position: fixed;
  top: 40vh;
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

@media screen and (max-width: 768px) {
  .text {
    font-size: clamp(1.5rem, 4vw, 2.5rem); /* Adjust font size for smaller screens */
  }

  h1.display-3 {
    font-size: clamp(2.5rem, 6vw, 3.5rem); /* Responsive heading size */
  }

  .text-container {
    width: 100%;
  }

  .wave-container {
    display: none;
  }

  .container {
    padding: 0 20px;
  }

  .row {
    margin: 0;
  }
}

@media screen and (max-width: 990px) {
  .text {
    font-size: clamp(1.5rem, 4vw, 2.5rem); /* Adjust font size for medium screens */
    text-align: center;
  }

  h1.display-3 {
    font-size: clamp(2.5rem, 6vw, 3.5rem); /* Responsive heading size */
    text-align: center;
  }

  .text-container {
    width: 100%;
    text-align: center;
  }
  .cta {
    margin: 0;
  }
  .cta span {
    font-size: 16px;
  }
  .cta svg {
    margin-left: 10px;
  }
}

@keyframes fadeInLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeInRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes comeUp {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

h1 {
  animation: fadeInLeft 2s ease-in-out forwards;
}

.text-container {
  animation: fadeInRight 2s ease-in-out forwards;
}

.cta {
  animation: comeUp 2s ease-in-out forwards;
}


</style>
