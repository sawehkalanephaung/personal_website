<template>
  <div class="container-fluid">
    <div class="wave-container">
      <img src="@/assets/wave_animation_light.svg" alt="wave animation" class="wave-background light-mode-wave" />
      <img src="@/assets/wave_animation_dark.svg" alt="wave animation" class="wave-background dark-mode-wave" />
    </div>
    <div class="container col-xxl-8 px-4 py-5">
      <div class="col-10 col-sm-8 col-lg-6 mt-5">
        <h1 class="display-6 fw-bold lh-1 text-start">Experience</h1>
      </div>
      <div v-for="(project, index) in projects" :key="index" class="col-sm-12 mb-4 text-start">
        <div class="card project-card">
          <div class="card-body d-flex flex-column flex-lg-row">
            <img :src="project.image" alt="Project Image" class="project-image" />

            <div class="project-details">
              <h5 class="card-title fs-3 mb-4 fw-bold">{{ project.title }}</h5>
              <h6 class="card-subtitle mb-3 fs-5">{{ project.role }} | {{ project.duration }}</h6>
              <p class="card-text fs-5 mb-5">{{ project.description }}</p>
              <h6 class="card-subtitle mb-4 fs-5 fw-bold">Tools</h6>
              <div class="dev-tools">
                <li v-for="(tool, toolIndex) in project.tools" :key="toolIndex" class="icons">
                  <button class="Btn">
                    <div class="sign" v-if="tool.svg" v-html="tool.svg"></div>
                    <div class="sign" v-else><i :class="tool.icon"></i></div>
                    <div class="text">{{ tool.name }}</div>
                  </button>

                </li>
              </div>
              <div class="justify-content-end d-grid gap-2 d-md-flex justify-content-md-end">
                      <button  @click="openLink(project.github)" class="btn  btn-lg px-4 me-md-2 cta mt-4">
                  <span><i class="fab fa-github"></i></span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';
import { projects } from '@/store/experienceData.js';

const openLink = (url) => {
  window.open(url, '_blank');
};

onMounted(() => {
  nextTick(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.card');
    if (cards.length) {
      cards.forEach((card) => {
        observer.observe(card);
      });
    }
  });
});
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  transition: all 0.6s ease-out;
  animation: fadeInUp 0.8s ease forwards;
  animation-play-state: paused;
}

.project-card.visible {
  animation-play-state: running;
}

.project-image {
  width: 100%;
  height: auto;
  max-width: 400px;
  margin-bottom: 20px;
  border-radius: 4px;
}

.project-details {
  flex: 1;
  padding-left: 20px;
}

@media (min-width: 992px) {
  .project-card {
    flex-direction: row;
  }

  .project-image {
    margin-bottom: 0;
 
  }
}

body.dark-mode .project-card {
  background-color: var(--dark-gray);
}


body.dark-mode .project-card:hover {
  box-shadow: 0 8px 16px var(--primary-blue);
  transition: all 0.3s ease;
}

.project-card:hover {
  box-shadow: 0 8px 16px var(--red);
  transition: all 0.3s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dev-tools .btn {
  margin-right: 10px;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  color: #333;
  text-decoration: none;
}

.dev-tools .btn:hover {
  background-color: #e2e6ea;
}

body.dark-mode .dev-tools .btn {
  color: var(--white);
  background-color: var(--dark-gray);
}

body.dark-mode .dev-tools .btn:hover {
  background-color: #555;
}

body.dark-mode .dev-tools {
  color: var(--white);
}

.card-text {
  color: var(--dark-gray);
}

body.dark-mode .card {
  background-color: var(--dark-gray);
}
.card-title{

}

body.dark-mode .card-title,
body.dark-mode .card-subtitle,
body.dark-mode .card-text,
body.dark-mode .text-muted {
  color: var(--white);
}

.link-btn {
  background-color: var(--red);
  margin-top: 20px;
}

/* background animation */
.wave-container {
  position: fixed;
  top: 40vh; /* Moves the wave down by 20% of viewport height */
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.wave-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

.container-fluid {
  min-height: 100vh;
  max-height: 100vh;
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

body.dark-mode .card:hover {
  box-shadow: 0 8px 16px var(--primary-blue);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 16px var(--red);
  transition: all 0.3s ease;
}

/* Responsive styles */
@media screen and (max-width: 1024px) {
  .wave-background {
    display: none;
  }
}


/* Add this to your existing styles */
.Btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: var(--red);
}

.sign {
  width: 100%;
  transition-duration: .3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign i {
  width: 17px;
  color: var(--white);
}

.text {
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  transition-duration: .3s;
}

.Btn:hover {
  width: 125px;
  border-radius: 40px;
  transition-duration: .3s;
}

.Btn:hover .sign {
  width: 30%;
  transition-duration: .3s;
  padding-left: 8px;
}

.Btn:hover .text {
  opacity: 1;
  width: 70%;
  transition-duration: .3s;
  padding-right: 6px;
}

.Btn:active {
  transform: translate(2px ,2px);
}

/* Dark mode styles */
body.dark-mode .Btn {
  background-color: var(--primary-blue);
}

/* Responsive styles */
@media screen and (max-width: 768px) {
  .dev-tools {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .icons {
    display: flex;
    align-items: center;
  }

}


@media screen and (min-width: 769px) {
  .dev-tools {
    display: flex;
    flex-direction: row;
    gap: 1rem;

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
  color: var(--white);
  white-space: nowrap;
  display: flex;
  align-items: center;
}
body.dark-mode .cta span i {
  color: var(--white);
}

.cta:hover span i {
  color: var(--white);
  transition: all 0.3s ease;
}
body.dark-mode .cta:hover span i {
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




</style>
