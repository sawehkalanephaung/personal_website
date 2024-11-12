import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/LandingPage.vue';
import AboutMe from '@/views/AboutView.vue';
import Experience from '@/views/ExperienveView.vue';
import Education from '@/views/EducationPage.vue';
import Contact from '@/views/ContactPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
 
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
