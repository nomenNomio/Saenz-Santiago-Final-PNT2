//https://router.vuejs.org/

import { createRouter, createWebHistory } from 'vue-router';

import Conversor from './componentes/Conversor.vue';
import Respuestas from './componentes/Respuestas.vue';

const routes = [
    { path: '/', redirect: '/conversor' },
    { path: '/conversor', component: Conversor },
    { path: '/respuestas', component: Respuestas },
    { path: '/:pathmatch(.*)*', redirect: '/conversor' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,  // es igual a -> routes: routes
})

export default router