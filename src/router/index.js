import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '../components/Inicio.vue';
import Flashcards from '../components/Flashcards.vue';
import Topicos from '../components/Topicos.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
    props: true
  },
  {
    path: '/flashcards',
    name: 'Flashcards',
    component: Flashcards,
    props: true
  },
  {
    path: '/topicos',
    name: 'Topicos',
    component: Topicos,
    props: true
  }
];

const router = new Router({
  mode: 'history',
  routes
});

export default router;