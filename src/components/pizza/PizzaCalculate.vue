<script setup lang="ts">
import router from '@/router'
import { useFormStore } from '@/stores/formStore'
import { storeToRefs } from 'pinia'

const formStore = useFormStore()
const { incrementPizzaCount, decrementPizzaCount } = formStore
const { totalCost, pizzaState, ingredientsCost } = storeToRefs(formStore)

const navigateToSuccess = () => {
  router.push('/success')
}
</script>

<template>
  <div
    class="flex flex-col items-center gap-2 sm:flex-row font-barlow font-semibold w-full sm:justify-between sm:items-start py-12"
  >
    <div class="flex items-center bg-[#FAF7F2] h-[60px] rounded-md gap-2">
      <button
        class="px-8 h-full rounded-md hover:bg-[#FDC913] delayed-transition"
        @click="decrementPizzaCount"
      >
        -
      </button>
      {{ pizzaState.pizzaCount }}
      <button
        class="px-8 h-full rounded-md hover:bg-[#FDC913] delayed-transition"
        @click="incrementPizzaCount"
      >
        +
      </button>
    </div>

    <div class="flex flex-col w-full sm:w-[60%] font-barlow gap-4 mt-2 sm:mt-0 bg-[#FAF7F2] pt-8">
      <h2 class="text-xl font-semibold mx-8">Sipariş Toplamı</h2>
      <div class="flex justify-between text-[18px] text-[#5F5F5F] mx-8">
        <span>Seçimler</span>
        <span>{{ ingredientsCost }}₺</span>
      </div>
      <div class="flex justify-between text-[18px] text-[#CE2829] mx-8 pb-4">
        <span>Toplam</span>
        <span>{{ totalCost }}₺</span>
      </div>

      <button
        class="bg-[#FDC913] text-[18px] font-semibold rounded-b-md px-4 py-3 cursor-pointer hover:opacity-80"
        @click="navigateToSuccess"
      >
        SİPARİŞ VER
      </button>
    </div>
  </div>
</template>

<style scoped>
.delayed-transition {
  transition: background-color 0.3s;
}
</style>
