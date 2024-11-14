<template>
    <div class="container-fluid ">
      <div class="wave-container">
      <img src="@/assets/wave_animation_light.svg" alt="wave animation" class="wave-background light-mode-wave" />
      <img src="@/assets/wave_animation_dark.svg" alt="wave animation" class="wave-background dark-mode-wave" />
    </div>
    <div class="container col-xxl-8 px-4 py-5 ">
      <div class="col-12 mb-5 mt-5 text-start fade-in-down">
        <h1 class="display-5 fw-bold lh-1 mb-3">Education</h1>
        <p class="fs-3"> Timeline of my Eudcation History </p>
        <p class="fs-4">Throughout my educational path, I've gained diverse knowledge and skills in software engineering, combining theoretical foundations with practical experience.</p>
      </div>     
       <!-- List all education here -->
<div class="timeline">
  <div class="timeline-item left slide-fade-right">
    <div class="card card-bg">
      <div class="card-body text-end">
        <h5 class="card-title fw-bold fs-2">Chiang Mai University</h5>
        <h6 class="card-subtitle mb-2 fs-4"> B.S in Software Engineering</h6>
        <h6 class="  fs-5 mb-4">2020-2024</h6>
        <ul class="list-unstyled fs-5 gap-2">
          <li>Computer & Programming ( JAVA ) 💻 </li>
          <li>OOP ( JAVA ) 🔄 </li>
          <li>Programming Logical Thinking 🧠 </li>
          <li>ADT and Problem Soving ( JAVA ) 🎯 </li>
          <li>Algorithrns Design and Analysis 📊 </li>
          <li>Intro to Software Engineering 🚀 </li>
          <li>Database System Design 🗄️ </li>
          <li>Font-end and Web Development 🌐 </li>
          <li>Software Requirement Analysis 📝 </li>
          <li>Software Design and Architecture 🏗️ </li>
          <li>DevOps 🔄 </li>
          <li>component-Based Software Development 🧩</li>
          <li>Software Construction and Testing 🛠️ </li>
          <li>Software Quality Assurance ✅ </li>        
        </ul>
      </div>
    </div>
  </div>

  <div class="timeline-item right slide-fade-left">
    <div class="card card-bg">
      <div class="card-body text-start">
        <h5 class="card-title fw-bold fs-2">BEAM</h5>
        <h6 class="card-subtitle mb-2 fs-4">GED Diploma</h6>
        <h6 class="mb-4 fs-5">2018-2019</h6>
        <ul class="list-unstyled fs-5 gap-2">
          <li>🔬 Science </li>
          <li>🔢 Mathermatic </li>
          <li>📚 English </li>
          <li>🌎 Social Study ( US ) </li>        </ul>
      </div>
    </div>
  </div>

  <div class="timeline-item left slide-fade-right">
    <div class="card card-bg">
      <div class="card-body text-end">
        <h5 class="card-title fw-bold fs-2">Thoo Mweh Khee Migrate School</h5>
        <h6 class="card-subtitle mb-2 fs-4 ">High School Deploma</h6>
        <h6 class="mb-4 fs-5">2010-2017</h6>
        <ul class="list-unstyled fs-5 gap-2">
          <li>Community Development 👥 </li>
          <li>Mathermatic 🔢 </li>
          <li>English 📚 </li>
          <li>Science 🔬 </li>
          <li>Social Study 🌎 </li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
</div> 
     
  </template>
  
  <script setup>
  // Add any necessary script logic here
  </script>
  
  <style scoped>

.timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: var(--red);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 3px;
  }

  body.dark-mode .timeline::after{
    background-color: var(--primary-blue);
  }
  
  .timeline-item {
    padding: 10px 40px;
    position: relative;
    width: 50%;
  }
  
  .timeline-item::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: var(--red);
    border: 4px solid var(--red);
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    z-index: 1;
  }
  body.dark-mode  .timeline-item::after {
    background-color: var(--primary-blue);
    border: 4px solid var(--primary-blue);
  }
  
  .left {
    left: 0;
  }
  
  .right {
    left: 50%;
  }
  
  .left::after {
    right: -12.5px;
  }
  
  .right::after {
    left: -12.5px;
  }
  
  .timeline-item .card {
    padding: 20px;
    border-radius: 6px;
    position: relative;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
/* Update the hover animation for cards to be smoother */
.timeline-item .card:hover {
  box-shadow: 0 8px 16px var(--red);
  transform: translateY(-5px);
  transition: all 0.4s ease;
}

body.dark-mode .timeline-item .card:hover {
  box-shadow: 0 8px 16px var(--primary-blue);
  transform: translateY(-5px);
  transition: all 0.4s ease;
}
  

  @media screen and (max-width: 768px) {
    .timeline::after {
      left: 31px;
    }
    
    .timeline-item {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }
    
    .timeline-item.right {
      left: 0;
    }
    
    .left::after, 
    .right::after {
      left: 19px;
    }
    
    .timeline-item .card {
      width: 100%;
    }
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



body.dark-mode .card-bg{
  background-color: var(--dark-gray);
  color: var(--white);
}

/* Responsive styles */
@media screen and (max-width: 1024px) {
.wave-background {
  display: none;
}
}

@media screen and (max-width: 768px) {
  .timeline {
    width: 60%;
    margin: 0 auto;
  }

  .timeline-item {
    width: 100%;
    margin: 1rem 0;
  }

  .timeline-item.left,
  .timeline-item.right {
    float: none;
    clear: both;
  }

  .card {
    width: 100%;
  }

  .card-body {
    padding: 1rem;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .card-subtitle {
    font-size: 1rem;
  }

  ul li {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 480px) {
  .timeline {
    width: 95%;
  }

  .card-title {
    font-size: 1.1rem;
    text-align: start;
  }

  .card-subtitle {
    font-size: 0.9rem;
    text-align: start;
  }

  ul li {
    font-size: 0.8rem;
    text-align: start;
  }
}


/* Add these new animation classes */
.fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
  opacity: 0;
}

.slide-fade-right {
  animation: slideFadeRight 0.8s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

.slide-fade-left {
  animation: slideFadeLeft 0.8s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
}

@keyframes fadeInDown {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideFadeRight {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideFadeLeft {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.card-subtitle{
  padding: 4px;
  border-radius: 4px;
  color: gray;

}
  </style>
  