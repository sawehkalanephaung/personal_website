<template>
  <div class="container-fluid">
    <div class="wave-container">
      <img src="@/assets/wave_animation_light.svg" alt="wave animation" class="wave-background light-mode-wave" />
      <img src="@/assets/wave_animation_dark.svg" alt="wave animation" class="wave-background dark-mode-wave" />
    </div>
    <div class="container col-xxl-8 px-4 py-5 ">
      <div class="col-10 col-sm-8 col-lg-6 mt-5">
        <h1 class="display-6 fw-bold lh-1 text-start">Experience</h1>
        <hr class="w-100 border border-1 opacity-50 mb-4">
      </div>      
      <div class="col-sm-12 mb-4 text-start">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title fs-3 ">Senior Project: ApartEase</h5>
            <h6 class="card-subtitle mb-2 fs-5">
              Front-End Developer & UI/UX Designer | March 2024 - October -
              2024
            </h6>
            <p class="card-text fs-6">
              For my senior project, I developed ApartEase a web-based app
              that automates utility bill collection and calculation for
              apartment managers. Using machine learning and image
              recognition, it extracts electric meter data from images and
              links it to apartments via QR codes, automatically calculating
              bills. ApartEase eliminates manual data entry, reduces errors,
              and eases the workload for property managers.
            </p>
            <h6 class="card-subtitle mb-2 fs-6">Tools</h6>
            <div class="dev-tools d-flex flex-row mb-3">
              <ul class="d-flex justify-content-start">
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
                  <a href="https://reactjs.org" class="btn btn-light p-2 d-none d-md-block" target="_blank">
                    React
                  </a>
                  <i class="fab fa-react p-2 d-md-none" onclick="window.open('https://reactjs.org', '_blank')"></i>
                </li>
                <li>
                  <a href="https://getbootstrap.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
                    Bootstrap
                  </a>
                  <i class="fab fa-bootstrap p-2 d-md-none" onclick="window.open('https://getbootstrap.com', '_blank')"></i>
                </li>
                <li>
                  <a href="https://git-scm.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
                    Git
                  </a>
                  <i class="fab fa-git-alt p-2 d-md-none" onclick="window.open('https://git-scm.com', '_blank')"></i>
                </li>
              </ul>
            </div>
            <div class="d-flex justify-content-end">
              <MyButton @click="openLink('https://github.com')" class="link-btn">Github <i class="fas fa-arrow-right ms-2"></i></MyButton>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 mb-4 text-start">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title fs-3">UI/UX Design: E-bike & Scooter Renter</h5>
            <h6 class="card-subtitle mb-2 fs-5">
              UI/UX Designer | August 2024 - September - 2024
            </h6>
            <p class="card-text fs-6">
              In the E-bike and Scooter Renter project, I designed three key
              components: a web application, a wearable interface, and an AR
              experience. I optimized the web app for seamless vehicle
              rentals, created a simple, real-time wearable UI for rentals and
              navigation, and developed an AR interface that overlays route
              guidance and vehicle locations. This project enhanced my skills
              in multi-platform design and integrating innovative technologies
              into user-centered solutions.
            </p>
            <h6 class="card-subtitle mb-2 fs-6">Tools</h6>
            <div class="dev-tools d-flex flex-row mb-3">
              <ul class="d-flex justify-content-start">
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
      <a href="https://reactjs.org" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        React
      </a>
      <i class="fab fa-react p-2 d-md-none" onclick="window.open('https://reactjs.org', '_blank')"></i>
    </li>
    <li>
      <a href="https://getbootstrap.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        Bootstrap
      </a>
      <i class="fab fa-bootstrap p-2 d-md-none" onclick="window.open('https://getbootstrap.com', '_blank')"></i>
    </li>
    <li>
      <a href="https://git-scm.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        Git
      </a>
      <i class="fab fa-git-alt p-2 d-md-none" onclick="window.open('https://git-scm.com', '_blank')"></i>
    </li>
              </ul>
            </div>
            <div class="d-flex justify-content-end">
              <MyButton @click="openLink('https://github.com')" class="link-btn">Github <i class="fas fa-arrow-right ms-2"></i></MyButton>
            </div>
          </div>
        </div>
      </div>
      <!-- end card 2-->

      <div class="col-sm-12 mb-4 text-start">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title fs-3">
              Front-End Web development: Food order and delivery
            </h5>
            <h6 class="card-subtitle mb-2  fs-5">
              Front-End Developer & UI/UX Designer | January 2023 - March -
              2023
            </h6>
            <p class="card-text fs-6">
              This project is about developing food order and delivery system,
              including Web UI, Web responsiveness, and connect front-end and
              back-end development. I am experience in web development tools
              such as HTML, CSS, JavaScript, Bootstrap, Node.js and Mongo(
              NoSQL).
            </p>
            <h6 class="card-subtitle mb-2 fs-6">Tools</h6>
            <div class="dev-tools d-flex flex-row mb-3">
              <ul class="d-flex justify-content-start">
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
      <a href="https://reactjs.org" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        React
      </a>
      <i class="fab fa-react p-2 d-md-none" onclick="window.open('https://reactjs.org', '_blank')"></i>
    </li>
    <li>
      <a href="https://getbootstrap.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        Bootstrap
      </a>
      <i class="fab fa-bootstrap p-2 d-md-none" onclick="window.open('https://getbootstrap.com', '_blank')"></i>
    </li>
    <li>
      <a href="https://git-scm.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        Git
      </a>
      <i class="fab fa-git-alt p-2 d-md-none" onclick="window.open('https://git-scm.com', '_blank')"></i>
    </li>
              </ul>
            </div>
            <div class="d-flex justify-content-end">
              <MyButton @click="openLink('https://github.com')" class="link-btn">Github <i class="fas fa-arrow-right ms-2"></i></MyButton>
            </div>
          </div>
        </div>
      </div>
      <!-- end card 3-->
      <div class="col-sm-12 mb-4 text-start">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title fs-3">DevOps: Web Deploying project</h5>
            <h6 class="card-subtitle mb-2 fs-5">
              DevOps Engineer | February 2023 - March - 2023
            </h6>
            <p class="lead fs-6">
              I am experience of DevOps practices such as Version controls,
              AWS cloud services, Docker, Automated testing, Integration
              testing and Unit testing.
            </p>
            <h6 class="card-subtitle mb-2  fs-6">Tools</h6>
            <div class="dev-tools d-flex flex-row mb-3">
              <ul class="d-flex justify-content-start">
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
      <a href="https://reactjs.org" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        React
      </a>
      <i class="fab fa-react p-2 d-md-none" onclick="window.open('https://reactjs.org', '_blank')"></i>
    </li>
    <li>
      <a href="https://getbootstrap.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        Bootstrap
      </a>
      <i class="fab fa-bootstrap p-2 d-md-none" onclick="window.open('https://getbootstrap.com', '_blank')"></i>
    </li>
    <li>
      <a href="https://git-scm.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        Git
      </a>
      <i class="fab fa-git-alt p-2 d-md-none" onclick="window.open('https://git-scm.com', '_blank')"></i>
    </li>
              </ul>
            </div>
            <div class="d-flex justify-content-end">
              <MyButton @click="openLink('https://github.com')" class="link-btn">Github <i class="fas fa-arrow-right ms-2"></i></MyButton>
            </div>
          </div>
        </div>
      </div>

      <!-- end card 4 -->
      <div class="col-sm-12 mb-4 text-start ">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title fs-3">UI/ UX Design: CM Trail project</h5>
            <h6 class="card-subtitle mb-2 fs-5">
              UI/UX Designer | July 2022 - Augest -2022
            </h6>
            <p class="card-text fs-6">
              I've contributed to projects like CM Trail as a UI/UX Designer.
              I conduct user research, design intuitive interfaces, and
              perform usability tests to ensure seamless user experiences. I'm
              skilled in design user interface, wireframing, and prototyping.
            </p>
            <h6 class="card-subtitle mb-2  fs-6">Tools</h6>
            <div class="dev-tools d-flex flex-row mb-3">
              <ul class="d-flex justify-content-start">
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
      <a href="https://reactjs.org" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        React
      </a>
      <i class="fab fa-react p-2 d-md-none" onclick="window.open('https://reactjs.org', '_blank')"></i>
    </li>
    <li>
      <a href="https://getbootstrap.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        Bootstrap
      </a>
      <i class="fab fa-bootstrap p-2 d-md-none" onclick="window.open('https://getbootstrap.com', '_blank')"></i>
    </li>
    <li>
      <a href="https://git-scm.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        Git
      </a>
      <i class="fab fa-git-alt p-2 d-md-none" onclick="window.open('https://git-scm.com', '_blank')"></i>
    </li>
              </ul>
            </div>
            <div class="d-flex justify-content-end">
              <MyButton @click="openLink('https://github.com')" class="link-btn">Github <i class="fas fa-arrow-right ms-2"></i></MyButton>
            </div>
          </div>
        </div>
      </div>

      <!-- end card 5 -->
      <div class="col-sm-12 mb-4 text-start">
        <div class="card ">
          <div class="card-body">
            <h5 class="card-title fs-3">Senior Project: ApartEase</h5>
            <h6 class="card-subtitle mb-2 fs-5">
              Front-End Developer & UI/UX Designer | March 2024 - October -
              2024
            </h6>
            <p class="card-text fs-6">
              For my senior project, I developed ApartEase a web-based app
              that automates utility bill collection and calculation for
              apartment managers. Using machine learning and image
              recognition, it extracts electric meter data from images and
              links it to apartments via QR codes, automatically calculating
              bills. ApartEase eliminates manual data entry, reduces errors,
              and eases the workload for property managers.
            </p>
            <h6 class="card-subtitle mb-2 fs-6">Tools</h6>
            <div class="dev-tools d-flex flex-row mb-3">
              <ul class="d-flex justify-content-start">
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
      <a href="https://reactjs.org" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        React
      </a>
      <i class="fab fa-react p-2 d-md-none" onclick="window.open('https://reactjs.org', '_blank')"></i>
    </li>
    <li>
      <a href="https://getbootstrap.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        Bootstrap
      </a>
      <i class="fab fa-bootstrap p-2 d-md-none" onclick="window.open('https://getbootstrap.com', '_blank')"></i>
    </li>
    <li>
      <a href="https://git-scm.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        Git
      </a>
      <i class="fab fa-git-alt p-2 d-md-none" onclick="window.open('https://git-scm.com', '_blank')"></i>
    </li>
              </ul>
            </div>
            <div class="d-flex justify-content-end">
              <MyButton @click="openLink('https://github.com')" class="link-btn">Github <i class="fas fa-arrow-right ms-2"></i></MyButton>
            </div>
          </div>
        </div>
      </div>

      <!-- end card 6-->
      <div class="col-sm-12 mb-4 text-start">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title fs-3">Senior Project: ApartEase</h5>
            <h6 class="card-subtitle mb-2  fs-5">
              Front-End Developer & UI/UX Designer | March 2024 - October -
              2024
            </h6>
            <p class="card-text fs-6">
              For my senior project, I developed ApartEase a web-based app
              that automates utility bill collection and calculation for
              apartment managers. Using machine learning and image
              recognition, it extracts electric meter data from images and
              links it to apartments via QR codes, automatically calculating
              bills. ApartEase eliminates manual data entry, reduces errors,
              and eases the workload for property managers.
            </p>
            <h6 class="card-subtitle mb-2 fs-6">Tools</h6>
            <div class="dev-tools d-flex flex-row mb-3">
              <ul class="d-flex justify-content-start">
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
      <a href="https://reactjs.org" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        React
      </a>
      <i class="fab fa-react p-2 d-md-none" onclick="window.open('https://reactjs.org', '_blank')"></i>
    </li>
    <li>
      <a href="https://getbootstrap.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        Bootstrap
      </a>
      <i class="fab fa-bootstrap p-2 d-md-none" onclick="window.open('https://getbootstrap.com', '_blank')"></i>
    </li>
    <li>
      <a href="https://git-scm.com" class="btn btn-light p-2 d-none d-md-block" target="_blank">
        Git
      </a>
      <i class="fab fa-git-alt p-2 d-md-none" onclick="window.open('https://git-scm.com', '_blank')"></i>
    </li>
              </ul>
            </div>
            <div class="d-flex justify-content-end">
              <MyButton @click="openLink('https://github.com')" class="link-btn">Github <i class="fas fa-arrow-right ms-2"></i></MyButton>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted,nextTick } from 'vue';
import MyButton from '@/components/MyButton.vue';

const openLink = (url) => {
  window.open(url, '_blank');
};

onMounted(() => {
  // Wait for DOM to be ready
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

.card-text{
  color: var(--dark-gray);
}
body.dark-mode .card{
  background-color: var(--dark-gray);
}

body.dark-mode .card-title,
body.dark-mode .card-subtitle,
body.dark-mode .card-text,
body.dark-mode .text-muted {
  color: var(--white);
}
.link-btn{
  background-color: var(--red);
}



/* background animage */

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
/* add transaction and animation */
/* Add these animation styles */
.card {
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.6s ease-out;
  animation: fadeInUp 0.8s ease forwards;
  animation-play-state: paused;
}

.card.visible {
  animation-play-state: running;
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


  </style>