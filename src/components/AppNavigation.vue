<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </a>
      <!-- Burger Menu -->
      <div class="burger-wrapper d-lg-none">
        <label class="burger-1" for="burger">
          <input
            type="checkbox"
            id="burger"
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
          <a class="nav-item nav-link " :class="{ active: activeSection === 'about' }" href="#about" @click="setActiveSection('about')">About me</a>
          <a class="nav-item nav-link" :class="{ active: activeSection === 'experience' }" href="#experience" @click="setActiveSection('experience')">Experience</a>
          <a class="nav-item nav-link" :class="{ active: activeSection === 'education' }" href="#education" @click="setActiveSection('education')">Education</a>
          <a class="nav-item nav-link" :class="{ active: activeSection === 'skills' }" href="#skills" @click="setActiveSection('skills')">Skills</a>
          <a class="nav-item nav-link" :class="{ active: activeSection === 'contact' }" href="#contact" @click="setActiveSection('contact')">Contact</a>
          <button type="button" class="btn btn-outline-primary me-2">Resume</button>
          <DarkModeToggle />
      </div>

      </div>
    </div>
  </nav>
</template>

<script setup>
import DarkModeToggle from "./DarkModeToggle.vue";
import { ref } from 'vue';

const activeSection = ref('about');

const setActiveSection = (section) => {
  activeSection.value = section;
};

</script>

<style scoped>
.navbar {
  position: relative;
  z-index: 1000;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 2rem; /* Adds equal spacing between all nav items */
}

.nav-item:hover{
  color: var(--dark-text);
}

.nav-item, .navbar-nav > * {
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
  border-bottom: 2px solid var(--dark-text);
  color: var(--dark-text);
  font-weight: bold;
}


/* Dark mode - current selection */
body.dark-mode .nav-link.active {
  border-bottom: 2px solid var(--primary-text);
  color: var(--primary-text);
}



@media (max-width: 991.98px) {
  #navbarNavAltMarkup {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--light-background);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }

  #navbarNavAltMarkup .navbar-nav {
    flex-direction: column;
    align-items: left;
    gap: 1rem;
  }

  #navbarNavAltMarkup .nav-item {
    width: 100%;
    text-align: left;
  }

  .navbar-nav .btn-outline-primary {
    margin-left: 0;
    margin-top: 1rem; /* Adds space above button on mobile */
  }
  .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem; /* Reduced spacing for mobile view */
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
  color: var(--dark-text);
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
  background: var(--dark-background);
  border-radius: 12px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

body.dark-mode .burger-1 span {
  background-color: var(--primary-background);
}

body.dark-mode .nav-item{
  color: var(--primary-text);
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

.burger-1 i{
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
  color: var(--primary);
  outline: 1px solid var(--secondary);
}
body.dark-mode .btn-outline-primary:hover {
  background-color: var(--secondary);
  color: white;
}

body.dark-mode .nav-item:hover{
  color: var(--secondary);
}

body.dark-mode .nav-item{
  color: var(--accent);
}

</style>
