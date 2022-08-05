import { coffeeList } from '../../utils/coffeeList'
import { ActionTypes } from './actions'

interface Coffee {
  id: string
  image: string
  title: string
  price: number
  amount: number
}

export function shoppingCartReducer(state: Coffee[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM_IN_CART:
      return [...state, action.payload.newCoffee]

    case ActionTypes.ADD_ITEM_IF_ALREADY_EXISTS_THIS_IN_CART: {
      return state.map((item: Coffee) => {
        if (item.title === action.data.title) {
          return {
            ...item,
            amount: item.amount + action.data.amount,
          }
        }

        return item
      })
    }

    case ActionTypes.ADD_ONE_AMOUNT_OF_ITEM: {
      return state.map((item: Coffee) => {
        if (item.title === action.data.title) {
          return {
            ...item,
            amount: item.amount + 1,
          }
        }

        return item
      })
    }

    case ActionTypes.REMOVE_ONE_AMOUNT_OF_ITEM: {
      return state.map((item: Coffee) => {
        if (item.title === action.data.title) {
          return {
            ...item,
            amount: item.amount - 1,
          }
        }

        return item
      })
    }

    case ActionTypes.REMOVE_ITEM_OF_CART: {
      const shoppingCartWithoutTheItem = state.filter(
        (item: Coffee) => item.title !== action.title,
      )

      return [...shoppingCartWithoutTheItem]
    }

    case ActionTypes.ADD_ITEM_ON_DROP: {
      const coffeeData = coffeeList.filter((item) => item.id === action.id)
      const coffeeToAdd = coffeeData[0]

      const itemFounded = state.filter(
        (item: Coffee) => item.title === coffeeToAdd.title,
      )

      if (itemFounded[0]) {
        return state.map((item: Coffee) => {
          if (item.title === coffeeToAdd.title) {
            return {
              ...item,
              amount: item.amount + 1,
            }
          }

          return item
        })
      }

      return [
        ...state,
        {
          id: coffeeToAdd.id,
          title: coffeeToAdd.title,
          image: coffeeToAdd.coffeeImage,
          price: coffeeToAdd.price,
          amount: coffeeToAdd.amountInTheCart + 1,
        },
      ]
    }

    case ActionTypes.CLEAR_CART: {
      return []
    }

    default:
      return state
  }
}
