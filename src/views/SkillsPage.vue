<template>
    <d class="container-fluid ">
      <div class="wave-container">
      <img src="@/assets/wave_animation_light.svg" alt="wave animation" class="wave-background light-mode-wave" />
      <img src="@/assets/wave_animation_dark.svg" alt="wave animation" class="wave-background dark-mode-wave" />
    </div>
  <div class="skills container py-5  text-start">
    <h1 class=" mb-5">My Skills & Expertise</h1>

    <!-- Programming Languages -->
    <div class="skill-section mb-5">
      <h2 class="custom-border-bottom pb-2">Programming Languages</h2>
      <div class="row g-4">
        <div class="col-6 col-md-3" v-for="(skill, index) in programmingLanguages" :key="index">
          <div class="skill-card">
            <i :class="skill.icon"></i>
            <span class="skill-name d-none d-md-block mt-2">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Frameworks -->
    <div class="skill-section mb-5">
      <h2 class="custom-border-bottom pb-2">Frameworks & Libraries</h2>
      <div class="row g-4">
        <div class="col-6 col-md-3" v-for="(framework, index) in frameworks" :key="index">
          <div class="skill-card">
            <i :class="framework.icon"></i>
            <span class="skill-name d-none d-md-block mt-2">{{ framework.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Tools -->
    <div class="skill-section">
      <h2 class="custom-border-bottom pb-2">Development Tools</h2>
      <div class="row g-4">
        <div class="col-6 col-md-3" v-for="(tool, index) in tools" :key="index">
          <div class="skill-card">
            <i :class="tool.icon"></i>
            <span class="skill-name d-none d-md-block mt-2">{{ tool.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </d>
</template>

<script setup>
import { ref } from 'vue'

const programmingLanguages = ref([
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'Java', icon: 'fab fa-java' },
  { name: 'PHP', icon: 'fab fa-php' },
  { name: 'TypeScript', icon: 'fas fa-code' }
])

const frameworks = ref([
  { name: 'Vue.js', icon: 'fab fa-vuejs' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Angular', icon: 'fab fa-angular' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap' }
])

const tools = ref([
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'AWS', icon: 'fab fa-aws' },
  { name: 'NPM', icon: 'fab fa-npm' },
  { name: 'GitHub', icon: 'fab fa-github' }
])
</script>

<style scoped>
.skill-card {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

body.dark-mode .skill-card {
  background: var(--dark-gray);
  color: #fff;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px var(--red);
}
body.dark-mode .skill-card:hover {
  box-shadow: 0 4px 15px var(--primary-blue);
}


.skill-card i {
  font-size: 2.5rem;
  color: #ff4081;
}
body.dark-mode .skill-card i {
  color: var(--primary-blue);
}



.skill-name {
  font-size: 1rem;
  color: #333;
  margin-top: 10px;
}
body.dark-mode .skill-name {
  color: var(--primary-blue);
}
.skill-section h2 {
  color: #333;
  margin-bottom: 1.5rem;
}
body.dark-mode .skill-section h2 {
  color: var(--white);
}

.custom-border-bottom {
  border-bottom: 2px solid #ff4081;
}

body.dark-mode .custom-border-bottom {
  border-bottom: 2px solid var(--primary-blue);
}

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


/* Responsive styles */
@media screen and (max-width: 1024px) {
.wave-background {
  display: none;
}
}
</style>
