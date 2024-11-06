<template>
    <div class="container-fluid ">
      <div class="wave-container">
      <img src="@/assets/wave_animation_light.svg" alt="wave animation" class="wave-background light-mode-wave" />
      <img src="@/assets/wave_animation_dark.svg" alt="wave animation" class="wave-background dark-mode-wave" />
    </div>
    <div class="container col-xxl-8 px-4 py-5 ">
      <div class="col-12 mb-5 text-start">
        <h1 class="display-5 fw-bold lh-1 mb-3">Education</h1>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum distinctio voluptatum ut voluptatibus, accusantium quae explicabo repudiandae iure reprehenderit ab vero, quod ullam rem, reiciendis voluptatem! Delectus hic laboriosam vero.</p>
      </div>      <!-- List all education here -->
<div class="timeline">
  <div class="timeline-item left">
    <div class="card bg-light">
      <div class="card-bodyb text-end">
        <h5 class="card-title">Bachelor of Computer Science</h5>
        <h6 class="card-subtitle mb-2 text-muted">University of Example | 2020-2024</h6>
        <ul class="list-unstyled">
          <li>Major in Software Engineering</li>
          <li>GPA: 3.8/4.0</li>
          <li>Dean's List: 2020-2024</li>
          <li>Relevant Coursework: Web Development, UI/UX Design, Database Systems</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="timeline-item right">
    <div class="card bg-light">
      <div class="card-body text-start">
        <h5 class="card-title">High School Diploma</h5>
        <h6 class="card-subtitle mb-2 text-muted">Example High School | 2016-2020</h6>
        <ul class="list-unstyled">
          <li>Advanced Placement in Computer Science</li>
          <li>Student Council Technology Officer</li>
          <li>oding Club President</li>
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
    background-color: white;
    border: 4px solid var(--red);
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    z-index: 1;
  }
  body.dark-mode  .timeline-item::after {
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
  
  .timeline-item .card:hover {
    box-shadow: 0 8px 16px var(--red);
    transition: all 0.3s ease;
  }
  body.dark-mode .timeline-item .card:hover {
    box-shadow: 0 8px 16px var(--primary-blue);
    transition: all 0.3s ease;
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
  </style>
  