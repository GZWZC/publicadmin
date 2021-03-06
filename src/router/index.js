import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

let routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        props: true
    }
];

export default new Router({
    routes
})
