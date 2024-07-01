<script setup lang="ts">
import location from '../../assets/footer/location.png'
import envelope from '../../assets/footer/envelope.png'
import phone from '../../assets/footer/phone.png'
import { footerImages } from '../../data'
</script>

<template>
  <main class="w-full bg-[#1A1A1A] text-white font-barlow text-[18px] py-16">
    <div class="flex flex-col sm:flex-row max-w-[1320px] mx-auto sm:justify-center">
      <div
        class="flex flex-col sm:flex-row flex-wrap text-center items-center gap-4 sm:items-start sm:ml-4"
      >
        <div class="flex flex-col gap-4">
          <h1 class="text-5xl font-semibold font-londrina">Teknolojik Yemekler</h1>
          <div class="flex flex-row items-center gap-2">
            <img :src="location" alt="Location" class="w-[30px] h-[30px]" />
            <span>341 Londonderry Road, Istanbul Türkiye</span>
          </div>
          <div class="flex flex-row items-center gap-2">
            <img :src="envelope" alt="Envelope" class="w-[30px] h-[30px]" />
            <span>aciktim@teknolojikyemekler.com</span>
          </div>
          <div class="flex flex-row items-center gap-2">
            <img :src="phone" alt="phone" class="w-[30px] h-[30px]" />
            <span>+90 216 123 45 67</span>
          </div>
        </div>
        <!-- Sıcak Menü -->
        <div class="flex flex-col gap-2">
          <h2 class="mb-4 text-2xl font-semibold">Sıccacık Menuler</h2>
          <span>Terminal Pizza</span>
          <span>5 Kişilik Hackathlon Pizza</span>
          <span>useEffect Tavuklu Pizza</span>
          <span>Beyaz Console Frosty</span>
          <span>Testler Geçti Mutlu Burger</span>
          <span>Position Absolute Acı Burger</span>
        </div>
      </div>
      <!-- Instagram -->
      <div class="flex flex-col max-w-[350px] mx-auto gap-4 sm:mr-0 sm:mr-4">
        <h2 class="text-2xl font-semibold">Instagram</h2>
        <div class="flex flex-wrap justify-between gap-4">
          <img
            v-for="img in footerImages"
            :src="img"
            alt="Resim"
            :key="img"
            class="w-[100px] h-[100px]"
          />
        </div>
      </div>
    </div>
  </main>
</template>
