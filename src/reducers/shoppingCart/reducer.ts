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
      const item = state.filter(
        (item: Coffee) => item.title === action.data.title,
      )

      const shoppingCartWithoutTheItem = state.filter(
        (item: Coffee) => item.title !== action.data.title,
      )

      if (item[0]) {
        return [
          ...shoppingCartWithoutTheItem,
          {
            id: action.data.id,
            title: action.data.title,
            image: action.data.image,
            price: action.data.price,
            amount: item[0].amount + action.data.amount,
          },
        ]
      }
      break
    }

    case ActionTypes.ADD_ONE_AMOUNT_OF_ITEM: {
      const item = state.filter(
        (item: Coffee) => item.title === action.data.title,
      )

      const shoppingCartWithoutTheItem = state.filter(
        (item: Coffee) => item.title !== action.data.title,
      )

      if (item[0]) {
        return [
          ...shoppingCartWithoutTheItem,
          {
            id: action.data.id,
            title: action.data.title,
            image: action.data.image,
            price: action.data.price,
            amount: item[0].amount + 1,
          },
        ]
      }
      break
    }

    case ActionTypes.REMOVE_ONE_AMOUNT_OF_ITEM: {
      const item = state.filter(
        (item: Coffee) => item.title === action.data.title,
      )

      const shoppingCartWithoutTheItem = state.filter(
        (item: Coffee) => item.title !== action.data.title,
      )

      if (item[0]) {
        return [
          ...shoppingCartWithoutTheItem,
          {
            id: action.data.id,
            title: action.data.title,
            image: action.data.image,
            price: action.data.price,
            amount: item[0].amount - 1,
          },
        ]
      }
      break
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

      const item = state.filter(
        (item: Coffee) => item.title === coffeeToAdd.title,
      )
      const shoppingCartWithoutTheItem = state.filter(
        (item: Coffee) => item.title !== coffeeToAdd.title,
      )

      if (item[0]) {
        return [
          ...shoppingCartWithoutTheItem,
          {
            id: coffeeToAdd.id,
            title: coffeeToAdd.title,
            image: coffeeToAdd.coffeeImage,
            price: coffeeToAdd.price,
            amount: item[0].amount + 1,
          },
        ]
      }

      return [
        ...shoppingCartWithoutTheItem,
        {
          id: coffeeToAdd.id,
          title: coffeeToAdd.title,
          image: coffeeToAdd.coffeeImage,
          price: coffeeToAdd.price,
          amount: coffeeToAdd.amountInTheCart + 1,
        },
      ]
    }
    default:
      return state
  }

  return state
}
