<script setup lang="ts">
import { toppingsArr, pizzaSize, doughSize } from '@/data'
import PizzaCalculate from './PizzaCalculate.vue'
</script>

<template>
  <div class="w-full font-barlow">
    <div class="flex flex-col max-w-[600px] font-barlow sm:mx-auto mx-2 gap-8">
      <!-- Pizza Boyutu - Hamur Boyutu -->
      <div class="flex w-full">
        <div class="flex flex-col w-full gap-4">
          <h2 class="text-xl font-semibold">Boyut Seç <span class="text-[#CE2829]">*</span></h2>
          <div class="flex">
            <div class="flex flex-wrap justify-between gap-2 relative">
              <label
                v-for="(pizza, index) in pizzaSize"
                :key="index"
                class="flex gap-2 topping-label items-center text-[#5F5F5F] font-medium font-barlow"
              >
                <input type="radio" name="pizzaSize" class="size-radio rounded-full" />
                <span class="absolute ml-[17px]">{{ pizza }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-xl font-semibold">Hamur Seç <span>*</span></h2>
          <select
            class="text-[#5F5F5F] font-medium font-barlow w-[200px] bg-[#FAF7F2] py-4 rounded-md sm:w-[250px] sm:pl-2"
          >
            <option disabled selected class="text-[#5F5F5F] font-medium">
              Hamur Kalınlığı Seç
            </option>
            <option v-for="dough in doughSize" :key="dough" :value="dough">{{ dough }}</option>
          </select>
        </div>
      </div>
      <!-- Ek Malzemeler -->
      <div class="flex flex-col gap-4 font-barlow">
        <h2 class="text-xl font-semibold">Ek Malzemeler</h2>
        <p class="font-medium text-[#5F5F5F]">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <div class="flex flex-wrap justify-between gap-2">
          <label
            v-for="(topping, index) in toppingsArr"
            :key="index"
            class="flex gap-2 topping-label items-center text-[#5F5F5F] font-bold font-barlow w-[45%] sm:w-[32%]"
            :class="{ 'sm:ml-1 sm:mr-auto mr-0 ml-0': index === toppingsArr.length - 1 }"
          >
            <input type="checkbox" class="topping-checkbox flex items-center justify-center" />
            {{ topping }}
          </label>
        </div>
      </div>
      <!-- Siparis Notu -->
      <div class="flex flex-col gap-4">
        <h2 class="font-semibold text-xl">Sipariş Notu</h2>
        <textarea
          name="Siparis Notu"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          class="flex w-full pt-6 pl-3 text-[#5F5F5F] font-medium bg-[#FAF7F2] rounded-md"
        ></textarea>
      </div>
      <hr class="border w-full border-[#5F5F5F80] opacity-50" />
      <!-- Sipariş ver Butonu ve Adet Sayısı -->
      <PizzaCalculate />
    </div>
  </div>
</template>

<style scoped>
.topping-checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 45px;
  height: 45px;
  background-color: #faf7f2;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.topping-checkbox::after {
  font-family: 'Font Awesome 5 Free';
  content: '\f00c';
  font-weight: 900;
  font-size: 20px;
  color: #464646;
  display: none;
}

.topping-checkbox:hover {
  background-color: #cac8c5;
}

.topping-checkbox:checked {
  background-color: #fdc913;
}

.topping-checkbox:checked::after {
  display: block;
}

/* .custom-center {
  margin-left: 4px;
  margin-right: auto;
} */

.size-radio {
  appearance: none;
  -webkit-appearance: none;
  width: 45px;
  height: 45px;
  background-color: #faf7f2;
  cursor: pointer;
  transition: background-color 0.3s;
}

.size-radio::after {
  font-family: 'Font Awesome 5 Free';
  content: '\f00c';
  font-weight: 900;
  font-size: 20px;
  color: #464646;
  display: none;
}

.size-radio:hover {
  background-color: #cac8c5;
}

.size-radio:checked {
  background-color: #fdc913;
}
</style>
