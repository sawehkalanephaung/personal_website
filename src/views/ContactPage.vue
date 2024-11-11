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
          <div class="social-icons fs-2 text-center mt-4">
            <a href="#" class="text-primary me-4 linkedin pop-in" style="animation-delay: 0.8s">
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              class="text-primary me-4 github pop-in"
              style="animation-delay: 0.9s"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="#"
              class="text-primary me-4 instagram pop-in"
              style="animation-delay: 1s"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              class="text-primary me-4 facebook pop-in"
              style="animation-delay: 1.1s"
            >
              <i class="fab fa-facebook"></i>
            </a>
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

/* .contact-form-container {
background: #fff;
padding: 2.5rem;
border-radius: 15px;
box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
body.dark-mode .contact-form-container {
  background: var(--dark-gray);
}
body.dark-mode .contact-form-container > h2 {
  color: var(--white);
} */

.form-floating {
  margin-bottom: 1rem;
}

.btn-primary {
  padding: 0.8rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 30px;
}

.social-icon {
  font-size: 1.8rem;
  color: #333;
  transition: color 0.3s ease;
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
.social-icons a {
  text-decoration: none;
  transition: color 0.3s ease;
}

.email i {
  color: var(--red);
}

.linkedin i {
  color: #0A66C2;
}

.github i {
  color: #333333;
}
body.dark-mode .github i{
  color: var(--pure-white);
}

.instagram i {
  color: #E4405F;
}

.facebook i {
  color: #1877F2;
}
.social-icons i {
  transition: transform 0.3s ease;
}

.social-icons a:hover i {
  transform: translateY(-5px);
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

/* Enhanced hover animations for social icons */
.social-icons i {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-icons a:hover i {
  transform: translateY(-5px) scale(1.1);
}
</style>
