<script>
export default {
  name:"HeaderView",
}
</script>

<template>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Welcome! Want to see products. <RouterLink to="/Products" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Product <span aria-hidden="true">&rarr;</span></RouterLink>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Feel free to Explore our site</h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">this site is made with Love</p>
      </div>
    </div>
</template>
