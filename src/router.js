import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Authorization from './views/Authorization.vue';
import store from './store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/menu-item/:id',
      name: 'home',
      component: Home,
      // beforeEnter: (to, from, next) => {
      //   console.log(store.state.isAdmin);
      //   if (store.state.isAdmin) {
      //     next();
      //   } else {
      //     next({ name: 'authorization' });
      //   }
      // }
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: Authorization,
    },
  ],
});
