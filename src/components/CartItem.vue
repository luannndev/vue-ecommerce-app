<template>
  <li>
    {{ item.name }} ({{ item.quantity }}) - {{ item.price * item.quantity }} €
    <button @click="$emit('remove')">Löschen</button>
  </li>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
li {
  display: flex;
  justify-content: space-between;
}
button {
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
