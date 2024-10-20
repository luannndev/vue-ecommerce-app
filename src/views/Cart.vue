<template>
  <div>
    <h1>Warenkorb</h1>
    <ul>
      <CartItem
          v-for="item in cartItems"
          :key="item.id"
          :item="item"
          @remove="removeFromCart(item.id)"
      />
    </ul>
    <div v-if="totalItems > 0">
      <h2>Gesamtpreis: {{ totalPrice }} €</h2>
      <button @click="clearCart">Warenkorb leeren</button>
    </div>
    <div v-else>
      <h2>Ihr Warenkorb ist leer.</h2>
    </div>
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Cart',
  components: {
    CartItem,
  },
  computed: {
    ...mapState(['cart']),
    totalItems() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    ...mapActions(['removeFromCart', 'clearCart']),
  },
};
</script>