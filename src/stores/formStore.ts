import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type PizzaType, type ErrorMsgType } from '../type/types'
import router from '@/router'

export const useFormStore = defineStore('formStore', () => {
  const pizzaState = ref<PizzaType>({
    pizzaSizeState: '',
    doughSizeState: '',
    extraIngredients: [],
    customerNote: '',
    pizzaCount: 1
  })

  const errorMsg = ref<ErrorMsgType>({
    sizeError: '',
    doughSizeError: '',
    ingredientsError: '',
    customerNoteError: '',
    calculateErrorMsg: ''
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 620,
      left: 0,
      behavior: 'smooth'
    })
  }

  const navigateToSuccess = () => {
    let hasError = false

    if (pizzaState.value.pizzaSizeState.length === 0) {
      errorMsg.value.sizeError = 'Lütfen boyut seçiniz!'
      hasError = true
    } else {
      errorMsg.value.sizeError = ''
    }
    if (pizzaState.value.doughSizeState.length === 0) {
      errorMsg.value.doughSizeError = 'Lütfen hamur tipi seçiniz!'
      hasError = true
    } else {
      errorMsg.value.doughSizeError = ''
    }
    if (
      pizzaState.value.extraIngredients.length < 4 ||
      pizzaState.value.extraIngredients.length > 10
    ) {
      errorMsg.value.ingredientsError = 'Lütfen en az 4, en fazla 10 adet malzeme seçiniz!'
      hasError = true
    } else {
      errorMsg.value.ingredientsError = ''
    }
    if (pizzaState.value.customerNote.length < 3) {
      errorMsg.value.customerNoteError = 'Sipariş notu 3 karakterden az olamaz!'
      hasError = true
    } else {
      errorMsg.value.customerNoteError = ''
    }
    if (hasError) {
      scrollToTop()
    } else {
      router.push('/success')
    }
  }

  return {
    pizzaState,
    totalCost,
    incrementPizzaCount,
    decrementPizzaCount,
    ingredientsCost,
    navigateToSuccess,
    errorMsg
  }
})
