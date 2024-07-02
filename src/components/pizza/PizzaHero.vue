<script setup lang="ts">
import { RouterLink } from 'vue-router'
import pizza from '../../assets/pizza.png'
</script>

<template>
  <div class="flex flex-col max-w-[600px] font-barlow">
    <div class="flex mx-auto overflow-hidden">
      <img :src="pizza" alt="Pizza Cropped Img" class="object-top -mt-12" />
    </div>
    <div class="flex flex-col gap-4 mx-2 sm:mx-0">
      <nav class="font-medium">
        <RouterLink to="/" class="text-[#5F5F5F]">Anasayfa</RouterLink>
        <span class="text-[#5F5F5F]"> - </span>
        <RouterLink to="/pizza" class="text-[#CE2829]">Sipariş Oluştur</RouterLink>
      </nav>
      <h2 class="text-[#292929] font-semibold text-3xl">Position Absolute Acı Pizza</h2>
      <div class="flex justify-between items-center">
        <span class="font-bold text-3xl">85.50₺</span>
        <span class="-mr-[120px] sm:-mr-[170px] text-[#5F5F5F]">4.9</span>
        <span class="text-[#5F5F5F]">(200)</span>
      </div>
      <p class="text-[#5F5F5F] leading-7">
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
        Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra
        geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
        yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
