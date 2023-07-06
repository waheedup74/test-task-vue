<script setup>
  import { ref, onMounted } from 'vue';
  import { useProductStore } from '../stores/store';
  import { useRoute } from 'vue-router';
  
  const productStore = useProductStore();
  const route = useRoute();
  
  const product = ref(null);
  
  onMounted(() => {
    const productId = route.params.id;
    product.value = productStore.getProductById(productId);
  });
  
  const addToCart = (product) => {
    productStore.addToCart(product);
  };
  const imageUrl = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80';

</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div v-if="product" class="text-center">
        <div class="w-52 h-52 mx-auto bg-cover bg-center rounded-md" :style="`background-image: url(${imageUrl})`"></div>
        <h1 class="text-4xl font-bold">{{ product ? product.name : 'Loading...' }}</h1>
        <p class="mt-4">{{ product ? product.details.description : 'Loading...' }}</p>
        <p class="mt-2">{{ product ? product.details.price : 'Loading...' }}</p>
        <p class="mt-2">{{ product ? product.details.company : 'Loading...' }}</p>
        <button
          type="button"
          class="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-green-600"
          @click="addToCart(product)"
        >
          Add to Cart
        </button>
      </div>
      <div v-else class="text-center">
        No Record Found
      </div>
    </div>
  </template>
  
  