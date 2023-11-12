import { createRouter, createWebHistory } from 'vue-router';
import CocktailList from '../components/CocktailList.vue';
import CocktailDetails from '../components/CocktailDetails.vue';

const routes = [
  {
    // Use a dynamic segment for level
    path: '/:level',
    component: CocktailList,
    props: true, // Pass route.params to the component as props
    children: [
      {
        path: ':slug',
        component: CocktailDetails,
        props: true
      }
    ]
  },
  // Redirect to '/simple' as a default route
  {
    path: '/',
    redirect: '/simple'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;