import { createWebHistory, createRouter } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./components/HomePage.vue'),
        },
        {
            path: '/scene',
            name: 'Scene',
            component: () => import('./components/ScenePage.vue'),
        },
    ],
});


export default router;
