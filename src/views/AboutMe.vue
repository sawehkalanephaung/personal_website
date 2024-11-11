<template>
   <div class="container-fluid position-relative vh-100 overflow-hidden">
    <div class="wave-container">
      <img src="@/assets/wave_animation_light.svg" alt="wave animation" class="wave-background light-mode-wave" />
      <img src="@/assets/wave_animation_dark.svg" alt="wave animation" class="wave-background dark-mode-wave" />
    </div>
    <div class="container h-100 d-flex align-items-center hero-bennner">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-12 col-lg-6 d-flex justify-content-center slide-in-right">
          <img src="@/assets/image1.png" class="img-fluid  w-100 rounded-4" alt="image" width="700"
            height="500" loading="lazy" />
        </div>
        <div class="col-lg-6 text-start slide-in-left">
          <h1 class="display-5 fw-bold lh-1 mb-3">
            About me
          </h1>
          <div class="text-container ">
            <span class="text first-text display-1">I am a</span>
            <span class="text sec-text display-1">Front-End Developer</span>
          </div>
          <p class="text-start fs-5">Hello! I’m Saw, a front-end developer and UI designer passionate about creating intuitive user interfaces. I specialize in transforming UI designs into functional websites and applications using HTML, CSS, JavaScript, and modern frameworks.</p>
          <p class="text-start fs-5">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul class="d-flex justify-content-start tools-list">
    <li>
      <a href="https://vuejs.org/" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        Vue.js
      </a>
      <i class="fab fa-vuejs p-2 d-md-none" onclick="window.open('https://vuejs.org/', '_blank')"></i>
    </li>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        HTML5
      </a>
      <i class="fab fa-html5 p-2 d-md-none" onclick="window.open('https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', '_blank')"></i>
    </li>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        CSS3
      </a>
      <i class="fab fa-css3-alt p-2 d-md-none" onclick="window.open('https://developer.mozilla.org/en-US/docs/Web/CSS', '_blank')"></i>
    </li>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        JavaScript
      </a>
      <i class="fab fa-js p-2 d-md-none" onclick="window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank')"></i>
    </li>
    <li>
      <a href="https://getbootstrap.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        Bootstrap
      </a>
      <i class="fab fa-bootstrap p-2 d-md-none" onclick="window.open('https://getbootstrap.com', '_blank')"></i>
    </li>
    <li>
    <a href="https://tailwindcss.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
      Tailwind
    </a>
    <svg class="p-2 d-md-none" width="44" height="44" viewBox="0 0 24 24" 
         onclick="window.open('https://tailwindcss.com', '_blank')"
         fill="currentColor">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
    </svg>
  </li>
    <li>
      <a href="https://git-scm.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        Git
      </a>
      <i class="fab fa-git-alt p-2 d-md-none" onclick="window.open('https://git-scm.com', '_blank')"></i>
    </li>
  </ul>         
   <div class="d-grid gap-2 d-md-flex justify-content-md-startn ">
            <MyButton @click="previewResume" class="btn btn-primary btn-lg px-4 me-md-2 action-btn  mt-4">Resume</MyButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyButton from '@/components/MyButton.vue';

function previewResume() {
  const resumePath = '/Resume.pdf';
  const link = document.createElement('a');
  link.href = resumePath;
  link.target = '_blank'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
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

.first-text {
  color: var(--black);
  margin-right: 10px;
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

/* Dark mode styles */
body.dark-mode {
  .text {
    color: var(--blue);
    font-size: 30px;
    font-weight: 600;
  }

  .action-btn {
    color: var(--white);
    background-color: var(--primary-blue);
    font-weight: bold;
  }

  .action-btn:hover {
    color: var(--blue);
    background-color: var(--white);
    font-weight: bold;
  }

  .light-mode-wave {
    display: none;
  }

  .dark-mode-wave {
    display: block;
  }
}

/* Desktop styles (1024px and above) */
@media screen and (min-width: 1025px) {
  /* Default desktop styles */
}

/* Tablet styles (768px to 1024px) */
@media screen and (max-width: 1024px) {
  .img-fluid {
    width: 100%;
    max-width: 400px;
    margin-bottom: 2rem;
  }

  .row {
    flex-direction: column-reverse !important;
  }

  .text-container {
    width: 100%;
    text-align: center;
  }

  .col-lg-6 {
    width: 100%;
    text-align: center;
  }

  .d-md-flex {
    justify-content: center !important;
  }

  .wave-container {
    display: none;
  }

  p.fs-5 {
    text-align: center;
    padding: 0 1rem;
  }
}

/* Mobile landscape styles (480px to 767px) */
@media screen and (max-width: 768px) {
  .img-fluid {
    display: none;
  }

  .text {
    font-size: 1.5rem;
  }

  h1.display-5 {
    font-size: 2rem;
  }

  .py-5 {
    padding: 1rem 0 !important;
  }

  .g-5 {
    --bs-gutter-y: 1rem;
  }
}

/* Mobile portrait styles (up to 479px) */
@media screen and (max-width: 480px) {
  .img-fluid {
    max-width: 250px;
  }

  .text {
    font-size: 1.25rem;
  }

  h1.display-5 {
    font-size: 1.75rem;
  }

  p.fs-5 {
    font-size: 1rem !important;
  }
}



.tools-list {
  list-style: none;
  padding: 0;
  gap: 1rem;
  margin-top: 2rem;
}

.tools-list li {
  cursor: pointer;
}

.tools-list .btn-light {
  border: 1px solid var(--red);
  color: var(--red);
}

body.dark-mode .tools-list .btn-light {
  border: 1px solid var(--primary-blue);
  color: var(--primary-blue);
  background: transparent;
}

.tools-list i {
  font-size: 1.5rem;
  color: var(--red);
}

body.dark-mode .tools-list i {
  color: var(--primary-blue);
}

svg {
  color: var(--red);
  cursor: pointer;
}

body.dark-mode svg {
  color: var(--primary-blue);
}

/* Add these new animation classes */
.slide-in-left {
  animation: slideInLeft 1s ease-out forwards;
  opacity: 0;
}

.slide-in-right {
  animation: slideInRight 1s ease-out forwards;
  opacity: 0;
}

@keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

</style>