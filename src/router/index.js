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
      title: 'About Page | spider-te8',
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
    path: '/services',
    name: 'ServicesPage',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Services Page | spider-te8',
      metaTags: [
        {
          name: 'description',
          content: 'Services Page of our spider-te8 App.',
        },
        {
          property: 'og:description',
          content: 'Services Page of our spider-te8 App.',
        },
      ],
    },
  },
  {
    path: '/projects',
    name: 'ProjectsPage',
    props: (route) => ({ category: route.query.category }),
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Projects Page | spider-te8',
      metaTags: [
        {
          name: 'description',
          content: 'Projects Page of our spider-te8 App.',
        },
        {
          property: 'og:description',
          content: 'Projects Page of our spider-te8 App.',
        },
      ],
    },
  },
  {
    path: '/blog',
    name: 'BlogPage',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Blog  Page | spider-te8',
      metaTags: [
        {
          name: 'description',
          content: 'Blog Page of our spider-te8 App.',
        },
        {
          property: 'og:description',
          content: 'Blog  Page of our spider-te8 App.',
        },
      ],
    },
  },
  {
    path: '/store',
    name: 'StorePage',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Store Page | spider-te8',
      metaTags: [
        {
          name: 'description',
          content: 'Store Page of our spider-te8 App.',
        },
        {
          property: 'og:description',
          content: 'Store Page of our spider-te8 App.',
        },
      ],
    },
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Contact Page | spider-te8',
      metaTags: [
        {
          name: 'description',
          content: 'Contact Page of our spider-te8 App.',
        },
        {
          property: 'og:description',
          content: 'Contact Page of our spider-te8 App.',
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
