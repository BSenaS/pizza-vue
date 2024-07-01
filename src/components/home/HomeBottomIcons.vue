<script setup lang="ts">
import burger from '../../assets/home/top-icons/burger.png'
import ramen from '../../assets/home/top-icons/ramen.png'
import drink from '../../assets/home/top-icons/drink.png'
import fastFood from '../../assets/home/top-icons/fastFood.png'
import pizza from '../../assets/home/top-icons/pizza.png'
import fries from '../../assets/home/top-icons/fries.png'
const iconsArr = [
  { src: burger, alt: 'Burger' },
  { src: ramen, alt: 'Ramen' },
  { src: drink, alt: 'Soft Drinks' },
  { src: fastFood, alt: 'Fast Food' },
  { src: pizza, alt: 'Pizza' },
  { src: fries, alt: 'French Fries' }
]
</script>
<template>
  <div class="flex flex-col gap-12">
    <div class="flex flex-col gap-2 text-center font-bold">
      <h2 class="text-[#CE2829] font-satisfy text-4xl sm:text-5xl">en çok paketlenen menüler</h2>
      <h3 class="text-3xl">Acıktıran Kodlara Doyuran Lezzetler</h3>
    </div>
    <div class="flex font-barlow font-bold text-xl flex-wrap gap-2 justify-around sm:mx-5">
      <div
        v-for="icon in iconsArr"
        :key="icon.alt"
        class="menu-icons flex items-center gap-2 py-2 px-6 rounded-full cursor-pointer hover:bg-[#292929] hover:text-white"
      >
        <img :src="icon.src" :alt="icon.alt" class="w-12 h-12" />
        <span class="flex text-center">
          {{ icon.alt }}
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.menu-icons {
  transition: color, 0.3s;
}
</style>
