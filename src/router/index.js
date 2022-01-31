import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Hesuan from '../views/Hesuan/index.vue'
import Area from '../views/Area/index.vue'
import Prevention from '../views/Prevention/index.vue'
import City from '../views/City/City.vue'
import Travel from '../views/Travel/Travel.vue'
import SelectCity from '../views/SelectCity/SelectCity.vue'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/hesuan',
        name:'Hesuan',
        component:Hesuan
    },
    {
        path:'/area',
        name:'Area',
        component:Area
    },
    {
        path:'/prevention',
        name:'Prevention',
        component:Prevention
    },
    {
        path:'/city/:cityname',
        name:'City',
        component:City,
        props:true,
    },
    {
        path:'/travel',
        name:'Travel',
        component:Travel
    },
    {
        path:'/selectCity',
        name:'SelectCity',
        component:SelectCity
      }
]

const router = new VueRouter({
    routes
})

export default router