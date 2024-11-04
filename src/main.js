import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router

// import custome colory system
import '@/assets/scss/main.scss';  // Use @ alias for src directory

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // import the awesome icons



createApp(App)
  .use(router) // Use the router
  .mount('#app');
