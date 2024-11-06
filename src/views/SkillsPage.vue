<template>
  <div class="skills container py-5  text-start">
    <h1 class=" mb-5">My Skills & Expertise</h1>

    <!-- Programming Languages -->
    <div class="skill-section mb-5">
      <h2 class="border-bottom pb-2">Programming Languages</h2>
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
      <h2 class="border-bottom pb-2">Frameworks & Libraries</h2>
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
      <h2 class="border-bottom pb-2">Development Tools</h2>
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
</style>
