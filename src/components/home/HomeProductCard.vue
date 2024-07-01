<script setup lang="ts">
defineProps<{
  data: {
    src: string
    pizzaName: string
    rating: string
    stock: string
    price: string
  }
}>()
</script>

<template>
  <div
    class="urunler-btn flex flex-col w-[80%] mx-auto font-barlow cursor-pointer rounded-3xl sm:w-[300px] max-h-[500px]"
  >
    <div class="flex flex-col justify-center py-4">
      <img :src="data.src" :alt="data.pizzaName" />
      <h2 class="text-xl font-bold mx-4">{{ data.pizzaName }}</h2>
      <div class="flex justify-between mx-4">
        <span>{{ data.rating }}</span>
        <span>{{ data.stock }}</span>
        <span>{{ data.price }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.urunler-btn {
  border-radius: 1em;
  background-color: #faf7f2;
  border-color: #ffffff00;
  box-shadow:
    0 10px 10px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 2rem;
}

.urunler-btn:hover {
  box-shadow:
    0 24px 36px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}
</style>
