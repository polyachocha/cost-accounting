import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '../views/HomeView.vue'
import PageAbout from '../views/PageAbout.vue'
import NotFound from '../views/NotFound.vue'
import AddPaymentForm from '../components/AddPaymentForm.vue'

Vue.use(Router)

const router = new Router ({
    mode: "history",
    routes: [
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: HomeView
        },
        {
            path: '/dashboard/:page',
            name: 'Dashboard',
            component: HomeView
        },
        {
            path: '/about',
            name: 'PageAbout',
            component: PageAbout
        },
        {
            path: '/add/:section/:category',
            name: 'AddPaymentForm',
            component: AddPaymentForm
        },
        {
            path: '/notfound',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '*',
            redirect:'/notfound'
        },
    ]
})

export default router;