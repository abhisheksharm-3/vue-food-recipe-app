import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import SearchByLetter from "../views/SearchByLetter.vue"
import SearchByIngredients from "../views/SearchByIngredients.vue"
import SearchByName from "../views/SearchByName.vue"
import DefaultLayout from '../components/DefaultLayout.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: SearchByName
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: SearchByLetter
            }, {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredients',
                component: SearchByIngredients
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router