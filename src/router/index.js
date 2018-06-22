import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Task from '@/components/Task';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Task',
      component: Task
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
