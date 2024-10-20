import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import ProductDetail from '../views/ProductDetail.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetail, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
