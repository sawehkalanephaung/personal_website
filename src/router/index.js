import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import AboutMe from '@/views/AboutMe.vue';
import Experience from '@/views/ExperiencePage.vue';
import Education from '@/views/EducationPage.vue';
import Skills from '@/views/SkillsPage.vue';
import Contact from '@/views/ContactPage.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
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
    path: '/skills',
    name: 'Skills',
    component: Skills
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
