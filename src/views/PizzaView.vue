<script setup lang="ts">
import PizzaHero from '@/components/pizza/PizzaHero.vue'
import HeaderView from '@/layout/header/HeaderView.vue'
</script>

<template>
  <HeaderView />
  <div class="flex flex-col max-w-[1920px] mx-auto items-center">
    <PizzaHero />
  </div>
</template>

<style scoped></style>
