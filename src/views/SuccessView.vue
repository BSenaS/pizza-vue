<script setup lang="ts">
import { useFormStore } from '@/stores/formStore'
import { storeToRefs } from 'pinia'

const formStore = useFormStore()
const { totalCost, pizzaState, ingredientsCost } = storeToRefs(formStore)
</script>

<template>
  <div class="w-full min-h-screen bg-[#CE2829] text-white font-barlow">
    <div class="flex flex-col item-center max-w-[600px] mx-auto gap-8">
      <header class="font-londrina text-5xl text-center sm:mt-24 mt-12">
        <h1>Teknolojik Yemekler</h1>
      </header>
      <div class="text-center">
        <p class="font-satisfy text-[32px] text-[#FDC913]">lezzetin yolda</p>
        <p class="font-roboto sm:text-[86px] text-5xl font-light">SİPARİŞ ALINDI</p>
      </div>
      <hr class="border w-full border-white" />
      <div class="flex flex-col gap-8 items-center">
        <p class="text-2xl font-semibold">Position Absolute Acı Pizza</p>
        <div class="flex flex-col max-w-52 flex-wrap">
          <div>
            <span>Boyut:</span>
            <span class="font-semibold">{{ pizzaState.doughSizeState }}</span>
          </div>
          <div>
            <span>Hamur: </span>
            <span class="font-semibold">{{ pizzaState.pizzaSizeState }}</span>
          </div>
          <div class="flex">
            <span
              >Ek Malzemeler:
              <span v-for="item in pizzaState.extraIngredients" :key="item" class="font-semibold">{{
                item
              }}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center w-full font-barlow">
        <div
          class="flex flex-col items-center w-[270px] border border-[#FAF7F2] rounded-md py-10 text-[18px]"
        >
          <div class="flex flex-col w-[80%] gap-2">
            <span class="text-[20px] font-bold">Sipariş Toplamı</span>
            <div class="flex justify-between font-semibold">
              <span>Seçimler</span>
              <span>{{ ingredientsCost }}₺</span>
            </div>
            <div class="flex justify-between font-semibold">
              <span>Toplam</span>
              <span>{{ totalCost }}₺</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
