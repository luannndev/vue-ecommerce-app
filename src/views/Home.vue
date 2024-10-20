<template>
  <div>
    <h1>Produkte</h1>
    <div class="product-grid">
      <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Produkt 1', price: 29.99 },
        { id: 2, name: 'Produkt 2', price: 19.99 },
        { id: 3, name: 'Produkt 3', price: 49.99 },
      ],
    };
  },
  methods: {
    ...mapActions(['addToCart']),
  },
};
</script>

<style>
.product-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>