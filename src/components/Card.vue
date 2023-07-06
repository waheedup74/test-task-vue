<script setup>
import { useProductStore } from '../stores/store';
import { RouterLink } from 'vue-router';

const productStore = useProductStore();

const props = defineProps({
  companyName: String,
  name: String,
  price: {
    type: Number,
    validator: (value) => {
      return !Number.isInteger(value);
    },
  },
  productId: String,
});

const addToCart = (productId) => {
  const product = productStore.getProductById(productId);
  productStore.addToCart(product);
};
const imageUrl = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80';

</script>

<template>
  <div class="rounded-md border">
    <div class="bg-cover bg-center h-52 w-100" :style="`background-image: url(${imageUrl})`"></div>
    <div class="bg-gray-200 p-4">
      <div class="block xl:flex xl:justify-between">
        <div class="flex-none xl:w-1/2">
          <div class="flex items-center">
            <div class="mr-2 font-bold">Name:</div>
            <div>{{ name }}</div>
          </div>
          <div class="flex items-center">
            <div class="mr-2 font-bold">Company:</div>
            <div>{{ companyName }}</div>
          </div>
        </div>
        <div class="flex-none w-1/2">
          <div class="flex md:justify-end">
            <div class="mr-2 font-bold">Price:</div>
            <div>${{ price }}</div>
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-4">
        <div class="flex-none bg-green-500 text-white text-sm text-base px-4 py-2 rounded hover:bg-indigo-600">
          <RouterLink :to="'/Products/' + productId">Description</RouterLink>
        </div>
        <div>
          <button @click="addToCart(productId)" class="bg-indigo-500 text-sm text-base text-white px-4 py-2 rounded hover:bg-green-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

