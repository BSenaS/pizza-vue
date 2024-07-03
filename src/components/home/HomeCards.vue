<script setup lang="ts">
import router from '@/router'
const routeToSuccess = () => {
  router.push('/pizza')
}
</script>

<template>
  <div
    class="flex flex-col sm:flex-row flex-wrap items-center justify-center font-barlow text-white w-full gap-4"
  >
    <!-- left card -->
    <div class="card-1 flex flex-col w-full h-[500px] sm:w-[650px]">
      <div class="flex flex-col max-w-[300px] mt-8 ml-8 gap-8 py-6">
        <h2 class="font-bold text-5xl">Özel Lezzetus</h2>
        <p class="font-semibold text-[20px]">Position:Absolute Acı Burger</p>
        <div>
          <button
            class="py-4 px-8 rounded-full bg-white text-red-600 text-sm font-semibold"
            @click="routeToSuccess"
          >
            Sipariş Ver
          </button>
        </div>
      </div>
    </div>
    <!-- right card -->
    <div class="flex flex-col cards-wrapper w-full gap-4 sm:w-[650px]">
      <div class="card-2 h-[245px]">
        <div class="flex flex-col gap-4 mx-6 my-8">
          <h2 class="text-2xl font-bold max-w-48">Hackathlon Burger Menü</h2>
          <div>
            <button
              class="py-4 px-8 rounded-full bg-white text-red-600 text-sm font-semibold"
              @click="routeToSuccess"
            >
              Sipariş Ver
            </button>
          </div>
        </div>
      </div>
      <div class="card-3 h-[245px]">
        <div class="mx-6 my-8 flex flex-col gap-4">
          <h2 class="text-2xl font-bold text-black max-w-48">
            <span class="text-red-600">Çooook</span> hızlı npm gibi kurye
          </h2>
          <div>
            <button
              class="py-4 px-8 rounded-full bg-white text-red-600 text-sm font-semibold"
              @click="routeToSuccess"
            >
              Sipariş Ver
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-1 {
  background-image: url(@/assets/home/home-cards/kart-1.png);
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
  background-position: center;
}
.card-2 {
  background-image: url(@/assets/home/home-cards/kart-2.png);
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
  background-position: center;
}
.card-3 {
  background-image: url(@/assets/home/home-cards/cokhizli.png);
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
  background-position: center;
}
</style>
