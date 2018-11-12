import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Authorization from './views/Authorization.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/menu-item/:id',
      name: 'home',
      component: Home,
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: Authorization,
    },
  ],
});
