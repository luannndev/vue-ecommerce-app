import { createStore } from 'vuex';

export default createStore({
    state: {
        cart: [],
    },
    mutations: {
        ADD_TO_CART(state, product) {
            const existingProduct = state.cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
        },
        REMOVE_FROM_CART(state, productId) {
            state.cart = state.cart.filter(item => item.id !== productId);
        },
        CLEAR_CART(state) {
            state.cart = [];
        },
    },
    actions: {
        addToCart({ commit }, product) {
            commit('ADD_TO_CART', product);
        },
        removeFromCart({ commit }, productId) {
            commit('REMOVE_FROM_CART', productId);
        },
        clearCart({ commit }) {
            commit('CLEAR_CART');
        },
    },
    getters: {
        cartItems: (state) => state.cart,
        totalItems: (state) => state.cart.reduce((total, item) => total + item.quantity, 0),
        totalPrice: (state) => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
    },
});