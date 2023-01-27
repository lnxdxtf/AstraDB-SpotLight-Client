import { createRouter, createWebHistory } from 'vue-router'
import store from "../store/store"

async function lazyLoadPage(page: string, authenticated: boolean = false) {
    if (authenticated) return await import(`../../views/authenticated/${page}.vue`)
    return await import(`../../views/${page}.vue`)
}



export function router() {
    const routes = [
        { path: '/', name: 'Home', component: () => lazyLoadPage('Home') },
        { path: '/:pathMatch(.*)*', redirect: "/", },
        { path: '/not-auth', component: () => lazyLoadPage('NOTAUTH', true) },
        {
            path: '/astradb', name: 'AstraDB', beforeEnter: (to: any, from: any, next: any) => { store.state.astraModule.astraClient ? next() : next('/not-auth') }, children: [
                { path: '/astradb/:pathMatch(.*)*', redirect: "/" },
                { path: '/astradb/keyspaces', name: 'keyspaces', component: () => lazyLoadPage('Keyspaces', true) },
                { path: '/astradb/:keyspace/tables/', name: 'Tables', component: () => lazyLoadPage('Tables', true) },
                { path: '/astradb/:keyspace/:table/', name: 'Table', component: () => lazyLoadPage('Table', true) },
            ]
        }
    ]
    const router = createRouter({
        history: createWebHistory(),
        routes,
    })
    return router
}