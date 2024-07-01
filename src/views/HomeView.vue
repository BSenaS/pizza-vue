<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HomeTopIcons from '../components/home/HomeTopIcons.vue'
import HomeCards from '@/components/home/HomeCards.vue'
import HomeBottomIcons from '@/components/home/HomeBottomIcons.vue'
import { productData } from '../data'
import HomeProductCard from '@/components/home/HomeProductCard.vue'
import FooterView from '@/layout/footer/FooterView.vue'
</script>

<template>
  <header class="mb-8">
    <div class="flex flex-col text-center items-center gap-12 text-white">
      <h1 class="text-[42px] font-barlow font-bold mt-[100px]">Teknolojik Yemekler</h1>
      <h3 class="font-satisfy text-3xl text-[#fdc913]">fırsatı kaçırma</h3>
      <h2 class="font-roboto text-[64px] font-light md:text-[86px] max-w-[600px]">
        KOD ACIKTIRIR PIZZA DOYURUR
      </h2>
      <RouterLink
        to="/pizza"
        class="bg-[#fdc913] py-5 px-14 rounded-full text-black font-bold underline"
        >ACIKTIM</RouterLink
      >
    </div>
  </header>
  <div class="mb-8">
    <HomeTopIcons />
  </div>
  <main class="w-full bg-[#FAF7F2] py-24">
    <div class="flex flex-col gap-8 max-w-[1440px] mx-auto">
      <HomeCards />
      <HomeBottomIcons />
      <div class="flex flex-col sm:flex-row justify-around sm:flex-wrap">
        <div v-for="data in productData" :key="data.pizzaName">
          <HomeProductCard :data="data" />
        </div>
      </div>
    </div>
  </main>
  <FooterView />
</template>

<style scoped>
header {
  background-image: url(@/assets/home/mvp-banner.png);
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
