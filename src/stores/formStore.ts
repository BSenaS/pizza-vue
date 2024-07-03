import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { type PizzaType } from '../type/types'

export const useFormStore = defineStore('formStore', () => {
  const pizzaState = ref<PizzaType>({
    pizzaSizeState: '',
    doughSizeState: '',
    extraIngredients: [],
    customerNote: '',
    pizzaCount: 1
  })

  const totalCost = computed(() => {
    return pizzaState.value.pizzaCount * 85.5 + pizzaState.value.extraIngredients.length * 5
  })
  const ingredientsCost = computed<number>(() => {
    return pizzaState.value.extraIngredients.length * 5
  })
  const incrementPizzaCount = () => {
    pizzaState.value.pizzaCount++
    console.log(pizzaState.value)
  }

  const decrementPizzaCount = () => {
    if (pizzaState.value.pizzaCount <= 1) return
    pizzaState.value.pizzaCount--
  }

  return { pizzaState, totalCost, incrementPizzaCount, decrementPizzaCount, ingredientsCost }
})
