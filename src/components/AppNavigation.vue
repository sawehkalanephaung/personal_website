<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </router-link>
      <!-- Default Bootstrap Burger Menu -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link
            class="nav-item nav-link"
            :class="{ active: activeSection === 'home' }"
            to="/"
            @click="closeMenu"
          >Home</router-link>
          <router-link
            class="nav-item nav-link text-nowrap"
            :class="{ active: activeSection === 'about' }"
            to="/about"
            @click="closeMenu"
          >About Me</router-link>
          <router-link
            class="nav-item nav-link"
            :class="{ active: activeSection === 'experience' }"
            to="/experience"
            @click="closeMenu"
          >Experience</router-link>
          <router-link
            class="nav-item nav-link"
            :class="{ active: activeSection === 'education' }"
            to="/education"
            @click="closeMenu"
          >Education</router-link>
          <router-link
            class="nav-item nav-link"
            :class="{ active: activeSection === 'skills' }"
            to="/skills"
            @click="closeMenu"
          >Skills</router-link>
          <router-link
            class="nav-item nav-link"
            :class="{ active: activeSection === 'contact' }"
            to="/contact"
            @click="closeMenu"
          >Contact</router-link>
          <div class="button-container">
            <button  @click="previewResume"  type="button" class="btn btn-outline-primary">Resume</button>
            <DarkModeToggle class="dark-mode-switch" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import DarkModeToggle from "./DarkModeToggle.vue";
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const activeSection = ref('');
const route = useRoute();

// Function to close the menu
const closeMenu = () => {
  const navbarCollapse = document.getElementById('navbarNavAltMarkup');
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
  }
};

// preview resume
function previewResume() {
  const resumePath = '/Resume.pdf';
  const link = document.createElement('a');
  link.href = resumePath;
  link.target = '_blank'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Watch for route changes to update activeSection
watch(
  () => route.path,
  (newRoutePath) => {
    if (newRoutePath) {
      switch (newRoutePath) {
        case '/':
          activeSection.value = 'home';
          break;
        case '/about':
          activeSection.value = 'about';
          break;
        case '/experience':
          activeSection.value = 'experience';
          break;
        case '/education':
          activeSection.value = 'education';
          break;
        case '/skills':
          activeSection.value = 'skills';
          break;
        case '/contact':
          activeSection.value = 'contact';
          break;
        default:
          activeSection.value = '';
      }
    }
  },
  { immediate: true }
);
</script>

<style scoped>


.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--white);
  border-bottom: 1px solid var(--hightlight);
}

body.dark-mode .navbar {
  background-color: var(--black);
}

body {
  padding-top: 80px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.dark-mode-switch {
  transform: translateY(-10px);
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-item:hover {
  color: var(--black);
}

.nav-item,
.navbar-nav > * {
  display: flex;
  align-items: center;
}

.navbar-nav .btn-outline-primary {
  margin-left: 2rem;
}

.btn-outline-primary {
  margin: 0;
}

#navbarNavAltMarkup {
  transition: all 0.3s ease-in-out;
}

.nav-item.active {
  border-bottom: 2px solid var(--red);
  color: var(--black);
  font-weight: bold;
}

body.dark-mode .nav-link.active {
  border-bottom: 2px solid var(--primary-blue) !important; 
  color: var(--white);
}

@media (max-width: 991.98px) {
  #navbarNavAltMarkup {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--red);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 4px;
  }

  #navbarNavAltMarkup .navbar-nav {
    flex-direction: column;
    align-items: left;
    gap: 1rem;
  }

  #navbarNavAltMarkup .nav-item {
    width: 100%;
    text-align: left;
    color: var(--white);
  }

  body.dark-mode #navbarNavAltMarkup {
    background-color: var(--dark-gray);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  body.dark-mode .btn-outline-primary {
    color: var(--white);
    outline: 1px solid var(--blue);
  }

  body.dark-mode .btn-outline-primary:hover {
    background-color: var(--blue);
    color: var(--pure-white);
  }

  .navbar-nav .btn-outline-primary {
    margin-left: 0;
    margin-top: 1rem;
  }

  .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .button-container {
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
    border-top: 1px solid var(--white);
  }

  .nav-item.active {
    border-bottom: 1px solid var(--white);
    color: var(--white);
    font-weight: bold;
  }
  body.dark-mode .button-container {
    border-top: 1px solid var(--white);
  }
}

.logo {
  width: 6rem;
  height: 3rem;
}

body.dark-mode .btn-outline-primary {
  outline: 1px solid transparent;
  border: none;
}

body.dark-mode .btn-outline-primary {
  color: var(--white);
  outline: 1px solid var(--primary-blue);
}

body.dark-mode .btn-outline-primary:hover {
  background-color: var(--primary-blue);
  color: var(--pure-white);
}

body.dark-mode .nav-item:hover {
  color: var(--pure-white);
}

body.dark-mode .nav-item {
  color: var(--pure-white);
}

.btn-outline-primary {
  color: var(--red);
  outline: 1px solid var(--red);
  border: none;
}

.btn-outline-primary:hover {
  color: var(--white);
  background-color: var(--red);
  border: none;
}

@media (max-width: 991.98px) {
  .btn-outline-primary {
    color: var(--white);
    outline: 1px solid var(--white);
    border: none;
  }

  .btn-outline-primary:hover {
    color: var(--red);
    background-color: var(--white);
    border: none;
  }
}

.navbar-toggler {
  border: none;
  outline: none;
  box-shadow: none !important;
}

body.dark-mode .navbar-toggler {
  border: none;
  outline: none;
  box-shadow: none !important;
}
.navbar-toggler-icon {
  filter: invert(28%) sepia(89%) saturate(7491%) hue-rotate(353deg) brightness(97%) contrast(119%);
}

body.dark-mode .navbar-toggler-icon {
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
}</style>
