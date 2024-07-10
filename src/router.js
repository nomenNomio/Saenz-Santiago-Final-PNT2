//https://router.vuejs.org/

import { createRouter, createWebHistory } from 'vue-router';

import Formulario from './componentes/Formulario.vue';
import Usuarios  from './componentes/Usuarios.vue';


const routes = [
    { path: '/', redirect: '/form' },
    { path: '/form', component: Formulario },
    { path: '/usuarios', component: Usuarios },

    { path: '/:pathmatch(.*)*', redirect: '/form' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,  // es igual a -> routes: routes
})

export default router