import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router ({
    mode: "history",
    routes: [
        {
            path: '/dashboard/',
            name: 'Dashboard',
            component: ()=> import(/* webpackChunkName: "PageDashboard "*/'../views/DashboardView.vue'),
        },
        {
            path: '/',
            name: 'Dashboard',
            component: ()=> import(/* webpackChunkName: "PageDashboard "*/'../views/DashboardView.vue'),
        },
        {
            path: '/about',
            name: 'PageAbout',
            component: ()=> import(/* webpackChunkName: "PageAbout "*/'../views/PageAbout.vue'),
        },
        {
            path: '/add/:section/:category',
            name: 'AddPaymentForm',
            component: ()=> import(/* webpackChunkName: "AddPaymentForm "*/'../components/AddPaymentForm.vue'),
        },
        {
            path: '/notfound',
            name: 'NotFound',
            component: ()=> import(/* webpackChunkName: "NotFound "*/'../views/NotFound.vue'),
        },
    ]
})

export default router;