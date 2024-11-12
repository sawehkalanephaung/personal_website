<template>
    <div class="container-fluid position-relative vh-100 overflow-hidden">
     <div class="wave-container">
       <img src="@/assets/wave_animation_light.svg" alt="wave animation" class="wave-background light-mode-wave" />
       <img src="@/assets/wave_animation_dark.svg" alt="wave animation" class="wave-background dark-mode-wave" />
     </div>
     <div class="container h-100 d-flex align-items-center hero-bennner">
       <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
         <div class="col-12 col-lg-6 d-flex justify-content-center slide-in-right">
           <img src="@/assets/image1.png" class="img-fluid  w-100 rounded-4" alt="image" width="700"
             height="500" loading="lazy" />
         </div>
         <div class="col-lg-6 text-start slide-in-left">
           <h1 class="display-5 fw-bold lh-1 mb-3">
             About me
           </h1>
           <div class="text-container ">
             <span class="text first-text display-1">I am a</span>
             <span class="text sec-text display-1">Front-End Developer</span>
           </div>
           <p class="text-start fs-5">Hello! I’m Saw, a front-end developer and UI designer passionate about creating intuitive user interfaces. I specialize in transforming UI designs into functional websites and applications using HTML, CSS, JavaScript, and modern frameworks.</p>
           <p class="text-start fs-5">
             Skills and tools:
           </p>
           <ul class="dev-tools">
            <li class="icons">
                <button class="Btn">
                <div class="sign"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg></div>
                <div class="text">HTML 5</div>
                </button>
                <i class="fa-brands fa-bootstrap"></i>
            </li>
            <li class="icons">
                <button class="Btn">
                <div class="sign">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path></svg> </div>               
                     <div class="text">CSS</div>
                </button>
                <i class="fa-brands fa-css3-alt"></i>
            </li>
            <li class="icons">
                <button class="Btn">
                <div class="sign">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4 238.2 333.5 225 333.5 201.4zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1 0-55.8 28.1-54.7 58.5c1 29.3-.3 67.2-9.8 98.1c-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1c9.5 30.9 10.9 68.8 9.8 98.1c-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5c-1-29.3 .3-67.2 9.8-98.1c9.6-31 25.7-50.6 52.1-53.1v-28.5C542.7 239.2 526.5 219.6 517 188.6zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4c0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3C383.4 349.7 352.1 375.1 300.2 375.1zM290.2 266.4h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5C344.7 279.6 326.1 266.4 290.2 266.4z"></path></svg></div>
                <div class="text">Bootstrap</div>
                </button>
                <i class="fa-brands fa-bootstrap"></i>
            </li>
            <li class="icons">
                <button class="Btn">
                <div class="sign">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9996 4.85999C8.82628 4.85999 6.84294 6.44665 6.04961 9.61999C7.23961 8.03332 8.62794 7.43832 10.2146 7.83499C11.12 8.06109 11.7666 8.71757 12.4835 9.44545C13.6507 10.6295 15.0004 12 17.9496 12C21.1229 12 23.1063 10.4133 23.8996 7.23998C22.7096 8.82665 21.3213 9.42165 19.7346 9.02499C18.8292 8.79889 18.1827 8.1424 17.4657 7.41452C16.2995 6.23047 14.9498 4.85999 11.9996 4.85999ZM6.04961 12C2.87628 12 0.892943 13.5867 0.0996094 16.76C1.28961 15.1733 2.67794 14.5783 4.26461 14.975C5.17 15.2011 5.81657 15.8576 6.53354 16.5855C7.70073 17.7695 9.05039 19.14 11.9996 19.14C15.1729 19.14 17.1563 17.5533 17.9496 14.38C16.7596 15.9667 15.3713 16.5617 13.7846 16.165C12.8792 15.9389 12.2326 15.2824 11.5157 14.5545C10.3495 13.3705 8.99982 12 6.04961 12Z"></path></svg></div>                
                    <div class="text">Tailwind</div>
                </button>
                <i class="ri-tailwind-css-fill"></i>
            </li>
            <li class="icons">
                <button class="Btn">
                <div class="sign">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg></div>                
                    <div class="text">JavaScript</div>
                </button>
                <i class="fa-brands fa-js"></i>
            </li>
            <li class="icons">
                <button class="Btn">
                <div class="sign">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"></path></svg></div>               
                     <div class="text">Vue.js</div>
                </button>
                <i class="fa-brands fa-vuejs"></i>
            </li>
            <li class="icons">
                <button class="Btn">
                <div class="sign">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M120.8 335.5c-5.9-.4-12.6-.8-20.2-1.3c-3.3 4.1-6.6 8.4-6.6 13.5c0 18.5 65.5 18.5 65.5-1.5c0-8.3-7.4-8.7-38.8-10.7zm7.8-117.9c-32.3 0-33.7 44.5-.7 44.5c32.5 0 31.7-44.5 .7-44.5zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM243.9 172.2c-14.5 0-22.9-8.4-22.9-22.9c0-14.5 8.4-22.3 22.9-22.3c14.7 0 23.1 7.8 23.1 22.3s-8.4 22.9-23.1 22.9zM149.6 195h49.5l0 21.6-23.4 1.8c4.6 5.8 9.4 14 9.4 25.7c0 48.7-57.2 47.2-74.2 42.4l-8.4 13.4c5 .3 9.8 .6 14.3 .8c56.3 3.2 80.5 4.6 80.5 38.5c0 29.2-25.7 45.7-69.9 45.7c-46 0-63.5-11.6-63.5-31.7c0-11.4 5.1-17.5 14-25.9c-8.4-3.5-11.2-9.9-11.2-16.8c0-9.6 7.4-16.3 23-30.6l.2-.2c-12.4-6.1-21.8-19.3-21.8-38.1c0-51.6 56.6-53.3 81.6-46.8zM270.5 303.1l13 1.8 0 20.1H211.1V304.9c2.7-.4 5-.7 6.9-.9c9.9-1.2 10.1-1.3 10.1-6V223.3c0-4.4-.9-4.7-10.1-7.8c-1.9-.7-4.2-1.4-6.9-2.4l2.8-20.6h52.6V298c0 4.1 .2 4.6 4.1 5.1zm106.6-10.4L384 315c-10.9 5.4-26.9 10.2-41.4 10.2c-30.2 0-41.7-12.2-41.7-40.9V217.7c0-.8 0-1.4-.2-1.8c-.8-1.2-4.2-.7-19.6-.7V192.6c22.3-2.5 31.2-13.7 34-41.4h24.2c0 33.3-.6 38 .7 38.6c.3 .1 .7 0 1.3 0h35.8v25.4H339.3v60.7c0 .2 0 .5 0 .9c-.2 6.3-.9 30.4 37.9 15.9z"></path></svg></div>
                <div class="text">Git</div>
                </button>
                <i class="fa-brands fa-square-git"></i>
            </li>
           </ul>
             
           <div class="d-grid gap-2 d-md-flex justify-content-md-start">
           <button  @click="previewResume" class="btn  btn-lg px-4 me-md-2 cta mt-4">
            <span>Resume</span>
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
 </template>
 
 <script setup>
 function previewResume() {
   const resumePath = '/Resume.pdf';
   const link = document.createElement('a');
   link.href = resumePath;
   link.target = '_blank'; 
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
 }
 </script>

<style scoped>
.about-me {
  padding: 20px;
}

.text-container {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.text {
  position: relative;
  color: var(--red);
  font-size: 30px;
  font-weight: 600;
}

.first-text {
  color: var(--black);
  margin-right: 10px;
}

.action-btn {
  color: var(--white);
  background-color: var(--red);
  font-weight: bold;
}

.action-btn:hover {
  color: var(--white);
  background-color: var(--black);
  font-weight: bold;
}

.wave-container {
  position: fixed;
  top: 40vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}

.wave-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
}

.container-fluid {
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden !important;
}

.light-mode-wave {
  display: block;
}

.dark-mode-wave {
  display: none;
}

/* Dark mode styles */
body.dark-mode {
  .text {
    color: var(--blue);
    font-size: 30px;
    font-weight: 600;
  }

  .action-btn {
    color: var(--white);
    background-color: var(--primary-blue);
    font-weight: bold;
  }

  .action-btn:hover {
    color: var(--blue);
    background-color: var(--white);
    font-weight: bold;
  }

  .light-mode-wave {
    display: none;
  }

  .dark-mode-wave {
    display: block;
  }
}


/* Tablet styles (768px to 1024px) */
@media screen and (max-width: 1024px) {
  .img-fluid {
    width: 100%;
    max-width: 400px;
    margin-bottom: 2rem;
  }

  .row {
    flex-direction: column-reverse !important;
  }

  .text-container {
    width: 100%;
    text-align: center;
  }

  .col-lg-6 {
    width: 100%;
    text-align: center;
  }

  .d-md-flex {
    justify-content: center !important;
  }

  .wave-container {
    display: none;
  }

  p.fs-5 {
    text-align: center;
    padding: 0 1rem;
  }
}

/* Mobile landscape styles (480px to 767px) */
@media screen and (max-width: 768px) {
  .img-fluid {
    display: none;
  }

  .text {
    font-size: 1.5rem;
  }

  h1.display-5 {
    font-size: 2rem;
  }

  .py-5 {
    padding: 1rem 0 !important;
  }

  .g-5 {
    --bs-gutter-y: 1rem;
  }
}

/* Mobile portrait styles (up to 479px) */
@media screen and (max-width: 480px) {
  .img-fluid {
    max-width: 250px;
  }

  .text {
    font-size: 1.25rem;
  }

  h1.display-5 {
    font-size: 1.75rem;
  }

  p.fs-5 {
    font-size: 1rem !important;
  }
}



.tools-list {
  list-style: none;
  padding: 0;
  gap: 1rem;
  margin-top: 2rem;
}

.tools-list li {
  cursor: pointer;
}



/*  dev tool styles */
/* From Uiverse.io by vinodjangid07 */ 

ul, li{
  list-style: none;
  padding: 0;
  margin: 0;
}

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
  background-color:  var(--red);
}


.sign {
  width: 100%;
  transition-duration: .3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign svg {
  width: 17px;
}

.sign svg path {
  fill: var(--white);
}
/* text */
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

body.dark-mode .Btn {
    background-color: var(--primary-blue);
    color: var(--white);
}

body.dark-mode .text{
    color: var(--white); 
    font-size: 1rem;
}

/* hover effect on button width */
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
/* hover effect button's text */
.Btn:hover .text {
  opacity: 1;
  width: 70%;
  transition-duration: .3s;
  padding-right: 6px;
}
/* button click effect*/
.Btn:active {
  transform: translate(2px ,2px);
}



/* Responsive styles for skills and tools */
@media screen and (max-width: 768px) {
  .dev-tools {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Btn {
    display: none; /* Hide the button on smaller screens */
  }

  .icons i {
    font-size: 2rem; /* Adjust icon size */
    display: block; /* Ensure icons are visible */
  }
}

@media screen and (min-width: 769px) {
  .dev-tools {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
  }

  .Btn {
    display: flex; /* Show the button on larger screens */
  }

  .icons i {
    display: none; /* Hide the standalone icon on larger screens */
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
  color: var(--black);
  white-space: nowrap;
  display: flex;
  align-items: center;
}
body.dark-mode .cta span {
  color: var(--white);
}

.cta:hover span {
  color: var(--white);
  transition: all 0.3s ease;
}
body.dark-mode .cta:hover span {
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

/* Add these new animation classes */
.slide-in-left {
  animation: slideInLeft 1s ease-out forwards;
  opacity: 0;
}

.slide-in-right {
  animation: slideInRight 1s ease-out forwards;
  opacity: 0;
}

@keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}


</style>

