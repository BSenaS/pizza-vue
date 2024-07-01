<script setup lang="ts">
import burger from '../../assets/home/top-icons/burger.png'
import ramen from '../../assets/home/top-icons/ramen.png'
import drink from '../../assets/home/top-icons/drink.png'
import fastFood from '../../assets/home/top-icons/fastFood.png'
import pizza from '../../assets/home/top-icons/pizza.png'
import fries from '../../assets/home/top-icons/fries.png'

const iconsArr = [
  { src: burger, alt: 'Burger' },
  { src: ramen, alt: 'YENİ! Kore' },
  { src: drink, alt: 'Gazlı İçecek' },
  { src: fastFood, alt: 'Fast Food' },
  { src: pizza, alt: 'Pizza' },
  { src: fries, alt: 'Kızartmalar' }
]
</script>

<template>
  <div class="flex font-barlow font-bold text-xl justify-around flex-wrap mx-5 gap-2">
    <div v-for="icon in iconsArr" :key="icon.alt" class="flex items-center gap-2">
      <img :src="icon.src" :alt="icon.alt" class="w-12 h-12" />
      <span class="flex text-center">
        {{ icon.alt }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
