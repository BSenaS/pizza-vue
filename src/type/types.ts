type PizzaType = {
  pizzaSizeState: string
  doughSizeState: string
  extraIngredients: string[]
  customerNote: string
  pizzaCount: number
}

type ErrorMsgType = {
  sizeError: string
  doughSizeError: string
  ingredientsError: string
  customerNoteError: string
  calculateErrorMsg: string
}
export type { PizzaType, ErrorMsgType }
