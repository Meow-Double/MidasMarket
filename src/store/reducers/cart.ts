import { CartAction, CartState } from "types/cart";
import { CartActionTypes, IItems, IItemsTypes} from "../../types/cart";

const initialState = {
  items: {} as IItemsTypes,
  error: false,
  loading: false,
  totalPrice: 0,
  length: 0,
};

const getTotalPrice = (payload: IItems[]) => {
  const price: number = payload.reduce(
    (sum, item: IItems) => item.price + sum,
    0
  );

  return price;
};

const cart = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.FETCH__CART:
      return { ...state, loading: true };
    case CartActionTypes.FETCH__CART__SUCCESS: {
      const price = getTotalPrice(action.payload);
      const newObj: any = {};
      for (let i = 0; i < action.payload.length; i++) {
        newObj[action.payload[i].id] = {
          item: action.payload[i],
          count: 1,
        };
      }
      return {
        ...state,
        loading: false,
        items: newObj,
        totalPrice: price,
        length: action.payload.length,
        error: false,
      };
    }
    case CartActionTypes.FETCH__CART__ERROR:
      return { ...state, loading: false, error: true };

    case CartActionTypes.ADD__CART__ITEM: {
      const newObj = {
        ...state.items,
        [action.payload.id]: {
          item: action.payload,
          count: 1,
        },
      };
      const newLength = Object.keys(newObj).length;
      const newTotalPrice = state.totalPrice + action.payload.price;
      return {
        ...state,
        items: newObj,
        length: newLength,
        totalPrice: newTotalPrice,
      };
    }
    case CartActionTypes.ADD__CART__ITEM__ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CartActionTypes.REMOVE__ITEM__CART: {
      const arrayObjects = Object.keys(state.items).map(
        (key: string) => state.items[key].item
      );
      const ArrayFilterObjects = arrayObjects.filter(
        (item: IItems) => item.id !== action.payload
      );
      const newItems: any = {};
      for (let i = 0; i < ArrayFilterObjects.length; i++) {
        newItems[ArrayFilterObjects[i].id] = {
          item: ArrayFilterObjects[i],
          count: state.items[ArrayFilterObjects[i].id].count,
        };
      }
      const newTotalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].item.price * newItems[key].count + sum,
        0
      );
      return {
        ...state,
        items: newItems,
        length: ArrayFilterObjects.length,
        totalPrice: newTotalPrice,
      };
    }
    case CartActionTypes.CHANGE__COUNT: {
      const newItems: any = JSON.parse(JSON.stringify(state.items));
      newItems[action.payload.id].count = action.payload.count;
      const newTotalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].item.price * newItems[key].count + sum,
        0
      );

      return {
        ...state,
        items: newItems,
        totalPrice: newTotalPrice,
      };
    }

    default:
      return state;
  }
};

export default cart;

// Переписать объекты на иммер ?
// Сделать Доп страницы с сортировкой + 404
// Сделать слайдер на главной
// Провести рефакторинг + вынести типы объектов продукта в общии и поменять их в компонентах
