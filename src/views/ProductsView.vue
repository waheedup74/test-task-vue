
<script setup>
import { ref, onMounted } from 'vue';
import Card from '../components/Card.vue';
import { useProductStore } from '../stores/store';

const products = ref(null);

const productStore = useProductStore();

onMounted(() => {
  products.value =  productStore.getAllProducts;
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <Card v-for="(product, index) in products" :key="index" :companyName="product.details.company" :price="product.details.price" :productId="product.id" :name="product.name" />
  </div>
</template>