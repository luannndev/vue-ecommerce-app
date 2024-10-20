<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>Preis: {{ product.price }} €</p>
    <button @click="addToCart(product)">In den Warenkorb</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductDetail',
  props: ['id'],
  data() {
    return {
      product: { id: this.id, name: '', price: 0 },
    };
  },
  created() {
    const products = [
      { id: 1, name: 'Produkt 1', price: 29.99 },
      { id: 2, name: 'Produkt 2', price: 19.99 },
      { id: 3, name: 'Produkt 3', price: 49.99 },
    ];
    this.product = products.find(p => p.id === parseInt(this.id));
  },
  methods: {
    ...mapActions(['addToCart']),
  },
};
</script>