import { createRouter, createWebHistory } from 'vue-router'
import store from "../store/store"

async function lazyLoadPage(page: string, pageAuthenticated: boolean = false) {
    const auth = store.state.astraModule.authenticated
    if (auth && pageAuthenticated) {
        return await import(`../../views/authenticated/${page}.vue`)
    } else if (!auth && pageAuthenticated) {
        return await import('../../views/authenticated/NOTAUTH.vue')
    }
    else {
        return await import(`../../views/${page}.vue`)
    }
}

export function router() {
    const routes = [
        { path: '/', name: 'Home', component: () => lazyLoadPage('Home') },
        { path: '/:pathMatch(.*)*', redirect: "/", },
    ]
    const router = createRouter({
        history: createWebHistory(),
        routes,
    })
    return router
}