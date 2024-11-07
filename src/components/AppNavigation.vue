<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </router-link>
        <!-- Burger Menu -->
        <div class="burger-wrapper d-lg-none">
        <label class="burger-1" for="burger">
          <input
            type="checkbox"
            id="burger"
            ref="burgerCheckbox"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div class="navbar-collapse collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link
            class="nav-item nav-link"
            :class="{ active: activeSection === 'home' }"
            to="/"
            @click="closeMenu"
          >Home</router-link>
          <router-link
            class="nav-item nav-link"
            :class="{ active: activeSection === 'about' }"
            to="/about"
            @click="closeMenu"
          >About me</router-link>
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
            <button type="button" class="btn btn-outline-primary">Resume</button>
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
const burgerCheckbox = ref(null);

// Function to close the menu
const closeMenu = () => {
  if (burgerCheckbox.value) {
    burgerCheckbox.value.checked = false;
  }
};

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
  background-color: var(--white); /* Add background color to prevent content showing through */
}

body.dark-mode .navbar {
  background-color: var(--black);
}

/* Add padding to the body to prevent content from hiding behind the fixed navbar */
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
  /* Adjust this value as needed */
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  /* Adds equal spacing between all nav items */
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

/*  Adject the margin for the resume button */
.btn-outline-primary {
  margin: 0;
}

#navbarNavAltMarkup {
  transition: all 0.3s ease-in-out;
}

/* Light mode - current selection */
.nav-item.active {
  border-bottom: 2px solid var(--red);
  color: var(--black);
  font-weight: bold;
}

/* Dark mode - current selection */
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
    /* background-color: var(--primary-blue); */
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

  /* Add dark mode styling */
  body.dark-mode #navbarNavAltMarkup {
    background-color: var(--dark-gray);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  /*  small screen dark mode*/
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
    /* Adds space above button on mobile */
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

.burger-wrapper {
  display: none;
}

@media (max-width: 991.98px) {
  .burger-wrapper {
    display: block;
    position: relative;
  }
}

.burger-1 {
  position: relative;
  width: 40px;
  height: 35px;
  color: var(--black);
  background: transparent;
  cursor: pointer;
  display: block;
}

.burger-1 input {
  display: none;
}

.burger-1 span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: var(--red);
  border-radius: 12px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

body.dark-mode .burger-1 span {
  background-color: var(--pure-white);
}

body.dark-mode .nav-item {
  color: var(--light-gray);
}

.burger-1 span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger-1 span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger-1 span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}

.burger-1 input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 5px;
}

.burger-1 input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.burger-1 input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 28px;
  left: 5px;
}

.burger-1 i {
  font-size: 24px;
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
</style>
