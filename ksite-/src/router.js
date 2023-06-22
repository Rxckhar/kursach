import {createRouter, createWebHistory} from "vue-router"
import Main from './components/Main.vue'

import Dilivery from './components/Dilivery.vue'
import Contacts from './components/Contacts.vue'
import AboutUs from './components/AboutUs.vue'

import Config from './components/Config.vue'
import Basket from './components/Basket.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/config',
            name: 'config',
            component: Config
        },
        {
            path: '/basket',
            name: 'basket',
            component: Basket
        },
        {
            path: '/dilivery',
            name: 'dilivery',
            component: Dilivery
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        },
        

    ]
})

export default router;