<script setup>
import { ref } from 'vue';




    const isMenuVisible = ref(false);

    const  toggleMenu = () => {
      isMenuVisible.value = !isMenuVisible.value;
    };
</script>
<template>
<header class="relative inset-x-0 top-0 z-50">
    <nav class="fixed top-0 left-0 right-0 flex items-center justify-between p-6 lg:px-8 bg-white " aria-label="Global">
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/391px-Apple_logo_black.svg.png" alt="">
        </RouterLink>
      </div>
      <div class="flex lg:hidden"  @click="toggleMenu">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink to="/Products" class="text-sm font-semibold leading-6 text-gray-900">Product</RouterLink>
        <RouterLink to="/Features" class="text-sm font-semibold leading-6 text-gray-900">Features</RouterLink>
        <RouterLink to="/Marketplace" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</RouterLink>
        <RouterLink to="/Company" class="text-sm font-semibold leading-6 text-gray-900">Company</RouterLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end mr-8">
        <RouterLink to="/Cart" class="text-sm font-semibold leading-6 text-gray-900">My Cart</RouterLink>
      </div>
      <div class="hidden lg:flex lg:flex-none  lg:justify-end">
        <RouterLink to="/" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></RouterLink>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="lg:hidden" role="dialog" aria-modal="true" v-if="isMenuVisible">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-50"></div>
      <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/391px-Apple_logo_black.svg.png" alt="">
          </RouterLink>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="toggleMenu">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink to="/Products" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</RouterLink>
              <RouterLink to="/Features" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</RouterLink>
              <RouterLink to="/Marketplace" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</RouterLink>
              <RouterLink to="/Company" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</RouterLink>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">My Cart</a>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
        
    
</template>