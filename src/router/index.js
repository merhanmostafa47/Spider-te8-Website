import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Home Page | spider-te8',
      metaTags: [
        {
          name: 'description',
          content: 'Home page of our spider-te8 App.',
        },
        {
          property: 'og:description',
          content: 'Home page of our spider-te8 App.',
        },
      ],
    },
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Home Page | spider-te8',
      metaTags: [
        {
          name: 'description',
          content: 'Home page of our spider-te8 App.',
        },
        {
          property: 'og:description',
          content: 'Home page of our spider-te8 App.',
        },
      ],
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})
export default router
