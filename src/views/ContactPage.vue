<template>
  <div class="contact-page min-vh-100 d-flex align-items-center justify-content-center">
    <div class="container py-5">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-5 text-center text-lg-start contact-container  slide-in-left">
          <h1
            class="display-4 fw-bold lh-1 mb-3 fade-in"
          >
            Get in touch
          </h1>
          <p class="col-lg-10 fs-4 fade-in">
            Please feel free to contact me
          </p>
          <div class="contact-info mb-4">
            <div  class="contact-item d-flex align-items-center rounded py-3 px-4 card_bg mb-3 fade-up" style="animation-delay: 0.2s" >
            <a  href="mailto:your.ehkalanephaung96@gmail.com" style="text-decoration: none;">  <i class="fas fa-envelope me-3 icon-resize p-2"></i> </a> 
              <div class="contact-details">
                <h3 class="mb-0">Email</h3>
                <a  class="text-decoration" href="mailto:your.ehkalanephaung96@gmail.com<">ehkalanephaung96@gmail.com</a>
              </div>
            </div>

            <div class="contact-item d-flex align-items-center rounded py-3 px-4 card_bg mb-3 fade-up" style="animation-delay: 0.4s">
              <a href="tel:+66985305017" style="text-decoration: none;"><i class="fas fa-phone  me-3 icon-resize p-2"></i></a>
              <div class="contact-details">
                <h3>Phone</h3>
                <a class="text-decoration" href="tel:+66985305017">+66 985305017</a>
              </div>
            </div>
            <div class="contact-item d-flex align-items-center rounded py-3 px-4 card_bg mb-3 fade-up" style="animation-delay: 0.6s">
              <i class="fas fa-map-marker-alt  me-3 icon-resize p-2"></i>
              <div class="contact-details">
                <h3>Location</h3>
                <p class="mb-0">Chiang Mai, Chiang Mai, Thailand</p>
              </div>
            </div>
          </div>
     <!--  the social-icons div with this -->
            <div class="social-icons fs-2 text-center mt-4">
              <button class="Btn linkedin pop-in" @click="openLink('YOUR_LINKEDIN_URL')" style="animation-delay: 0.8s">
                <svg class="svgIcon" viewBox="0 0 448 512" height="1.2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                </svg>
                <span class="text">LinkedIn</span>
              </button>

              <button class="Btn github pop-in" @click="openLink('YOUR_GITHUB_URL')" style="animation-delay: 0.9s">
                <svg class="svgIcon" viewBox="0 0 496 512" height="1.2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                </svg>
                <span class="text">Github</span>
              </button>

              <button class="Btn instagram pop-in" @click="openLink('YOUR_INSTAGRAM_URL')" style="animation-delay: 1s">
                <svg class="svgIcon" viewBox="0 0 448 512" height="1.2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
                <span class="text">Instagram</span>
              </button>

              <button class="Btn facebook pop-in" @click="openLink('YOUR_FACEBOOK_URL')" style="animation-delay: 1.1s">
                <svg class="svgIcon" viewBox="0 0 320 512" height="1.2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
                <span class="text">Facebook</span>
              </button>
            </div>

        </div>

        <!-- Right Column: Images -->
        <div class="col-lg-7 contact-container slide-in-right">
          <div class="img-container">
            <!-- Add images for light and dark mode -->
            <img src="@/assets/contact-light.svg" alt="Contact Light" class="img-fluid mb-4 light-mode-image fade-in" />
            <img src="@/assets/contact-dark.svg" alt="Contact Dark" class="img-fluid mb-4 dark-mode-image fade-in" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

body.dark-mode .contact-container h1,
body.dark-mode .contact-container p {
  color: var(--white);
}

body.dark-mode .contact-info h3,
body.dark-mode .contact-info a,
body.dark-mode .contact-info p {
  color: var(--black);
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-card i {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 1rem;
}

.contact-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.contact-card a {
  text-decoration: none;
  color: #666;
}

body.dark-mode3 .contact-card a {
  color: var(--primary-blue);
}


.form-floating {
  margin-bottom: 1rem;
}

.btn-primary {
  padding: 0.8rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 30px;
}

.social-icon {
  social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}
}

.social-icon:hover {
  color: #007bff;
}

.fa-github:hover { color: #333; }
.fa-linkedin:hover { color: #0077b5; }
.fa-twitter:hover { color: #1da1f2; }
.fa-instagram:hover { color: #e4405f; }

@media (max-width: 991px) {
  .contact-info {
    margin-bottom: 2rem;
  }
}

.Btn {
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.4s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.icon-resize {
  font-size: 2rem; 
  width: 70px;
  height: 70px;
  background-color: var(--red);
  border-radius: 10%;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
}

body.dark-mode .icon-resize {
  background-color: var(--primary-blue);
}
.icon-resize:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

/* social link*/
.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.linkedin {
  background: #0A66C2;
}
.github {
  background: #333;
}


body.dark-mode .github {
  background: #fff;
}
body.dark-mode .github .svgIcon path {
  fill:var(--black);
}
body.dark-mode .github span{
  color: black;
}

.instagram {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}


.facebook {
  background: #1877F2;
}

.Btn:hover {
  width: 110px;
  border-radius: 30px;
}

.Btn:hover .text {
  opacity: 1;
}

.Btn:hover .svgIcon {
  opacity: 0;
}

.text {
  position: absolute;
  color: white;
  width: 120px;
  font-weight: 600;
  opacity: 0;
  transition-duration: 0.4s;
}


.svgIcon {
  transition-duration: 0.3s;
}

.svgIcon path {
  fill: white;
}

/* Keep existing animation classes */
.pop-in {
  animation: popIn 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes popIn {
  0% {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
}

.text {
  position: absolute;
  color: white;
  width: 120px;
  font-weight: 600;
  opacity: 0;
  transition-duration: 0.4s;
  font-size: 14px; /* Added font size */
}



/*  end social link*/

.card_bg {
  background-color: var(--background);
}

body.dark-mode .card_bg{
  background-color: var(--light-gray);
}
.text-decoration{
  text-decoration: none;
}

.action-btn{
  background-color: var(--red);
}
body.dark-mode .action-btn{
  background-color: var(--primary-blue);
}
.action-btn:hover{
  transform: scale(1.03);
  transition: transform 0.2s ease;
  background-color: var(--red);
  color: var(--white);
}


/* Hide dark mode image by default */
.dark-mode-image {
  display: none;
}

/* Show dark mode image and hide light mode image in dark mode */
body.dark-mode .dark-mode-image {
  display: block;
}
body.dark-mode .light-mode-image {
  display: none;
}

/* Hide both light and dark mode images for small screen size */
@media (max-width: 767px) {
  .light-mode-image,
  .dark-mode-image {
    display: none !important;
  }
}

/* New animation classes */
.slide-in-left {
  animation: slideInLeft 1s ease-out forwards;
  opacity: 0;
}

.slide-in-right {
  animation: slideInRight 1s ease-out forwards;
  opacity: 0;
}

.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}

.fade-up {
  animation: fadeUp 0.8s ease-out forwards;
  opacity: 0;
}

.pop-in {
  animation: popIn 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes slideInLeft {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeUp {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes popIn {
  0% {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
}

</style>
