<template>
  <div class="product-card">
    <h2>{{ product.name }}</h2>
    <p>Preis: {{ product.price }} €</p>
    <button @click="$emit('add-to-cart', product)">In den Warenkorb</button>
    <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">Details</router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
}
</style>
