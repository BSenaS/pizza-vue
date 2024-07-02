<script setup lang="ts">
import PizzaForm from '@/components/pizza/PizzaForm.vue'
import PizzaHero from '@/components/pizza/PizzaHero.vue'
import FooterView from '@/layout/footer/FooterView.vue'
import HeaderView from '@/layout/header/HeaderView.vue'
</script>

<template>
  <HeaderView />
  <div class="flex flex-col max-w-[1920px] mx-auto gap-4">
    <PizzaHero />
    <PizzaForm />
  </div>
  <FooterView />
</template>

<style scoped></style>
