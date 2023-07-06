<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '../stores/store';

const productStore = useProductStore();

const products = ref([]);

const removeFromCart = (product) => {
  productStore.removeFromCart(product.product.id);
  updateCartProducts();
};

const updateCartProducts = () => {
  products.value = productStore.getCartProducts;
  console.log(products.value);
};


onMounted(() => {
  updateCartProducts();
});

</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen" v-if="products.length > 0">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <!-- Product Card -->
      <div v-for="product in products" :key="product.product.id" class="bg-white shadow-md rounded-md p-4">
        <h2 class="text-lg font-semibold mb-2">{{ product.product.name }}</h2>
        <p class="text-gray-700 mb-2">{{ product.product.details.price }}</p>
        <p class="text-gray-700 mb-2">Quantity: {{ product.quantity }}</p>
        <button @click="removeFromCart(product)" class="bg-red-500 text-white rounded px-4 py-2">Remove</button>
      </div>
    </div>
    <p class="mt-4 font-bold text-green-500">Total Payable Amount: ${{ productStore.totalAmount }}</p>
    <button
      type="button"
      v-if="productStore.totalAmount > 0"
      class="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
      @click="productStore.checkout()"
    >
      Proceed to Checkout
    </button>
  </div>
  <div class="flex flex-col items-center justify-center min-h-screen" v-else>
    <p class="px-4 py-2">No items in Cart</p>
  </div>
</template>