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
            :class="{ active: activeSection === 'contact' }"
            to="/contact"
            @click="closeMenu"
          >Contact</router-link>
          <div class="button-container">
            <button  @click="previewResume"  type="button" class="btn button fw-bold">Resume</button>
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
  const resumePath = '/resume.pdf';
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

.navbar-nav .button{
  margin-left: 2rem;
}

.button {
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


  body.dark-mode .button:hover {
    background-color: var(--blue);
    color: var(--pure-white);
  }

  .navbar-nav .button{
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


body.dark-mode .nav-item:hover {
  color: var(--pure-white);
}

body.dark-mode .nav-item {
  color: var(--pure-white);
}

.button {
  position: relative;
  display: inline-block;
  padding: 8px;
  text-align: center;
  font-size: 16px;
  letter-spacing: 1px;
  text-decoration: none;
  color: var(--red);
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 1px solid var(--red);
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 var(--red);
  outline: none;
}

.button:hover {
  color: var(--white);
  box-shadow: inset 0 -100px 0 0 var(--red);
}

.button:active {
  transform: scale(0.9);
  
}

/* Dark mode styles */
body.dark-mode .button{
  color: var(--primary-blue);
  border: 1px solid var(--primary-blue);
  box-shadow: inset 0 0 0 0 var(--primary-blue);
}

body.dark-mode .button:hover {
  color: var(--pure-white);
  box-shadow: inset 0 -100px 0 0 var(--primary-blue);
}



@media (max-width: 991.98px) {
  .button {
    color: var(--white);
    border: 2px solid var(--white);
    box-shadow: inset 0 0 0 0 var(--white);
  }

  .button:hover {
    color: var(--red);
    box-shadow: inset 0 -100px 0 0 var(--white);
  }

  body.dark-mode .button{
    color: var(--white);
    border: 2px solid var(--primary-blue);
    box-shadow: inset 0 0 0 0 var(--primary-blue);
  }

  body.dark-mode .button:hover {
    color: var(--pure-white);
    box-shadow: inset 0 -100px 0 0 var(--primary-blue);
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
