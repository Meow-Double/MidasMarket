export interface CartState {
  items: IItemsTypes;
  loading: boolean;
  error: string | null | boolean;
  totalPrice: number;
  length: number;
}

export interface IItemsTypes extends IObjectKeys{
  item: IItems;
  count:number;
}

export interface IObjectKeys {
  [key: string]: string | number | IItems | any ;
}

export interface IItems {
  title: string;
  image: string;
  grams: number;
  price: number;
  id: number;
}

export interface ChangeCountTypes {
  id: number;
  count: number;
}

export enum CartActionTypes {
  FETCH__CART = "FETCH__CART",
  FETCH__CART__SUCCESS = "FETCH__CART__SUCCESS",
  FETCH__CART__ERROR = "FETCH__CART__ERROR",
  ADD__CART__ITEM = "ADD__CART__ITEM",
  REMOVE__ITEM__CART = "REMOVE__ITEM__CART",
  CHANGE__COUNT = "CHANGE__COUNT",
  ADD__CART__ITEM__ERROR = "ADD__CART__ITEM__ERROR",
}

interface FetchCartAction {
  type: CartActionTypes.FETCH__CART;
}
interface FetchCartActionSuccess {
  type: CartActionTypes.FETCH__CART__SUCCESS;
  payload: any[];
}
interface FetchCartActionError {
  type: CartActionTypes.FETCH__CART__ERROR;
  payload: string;
}
interface FetchAddCartAction {
  type: CartActionTypes.ADD__CART__ITEM;
  payload: IItems;
}
interface FetchAddCartActionError {
  type: CartActionTypes.ADD__CART__ITEM__ERROR;
  payload: boolean;
}
interface RemoveItemCart {
  type: CartActionTypes.REMOVE__ITEM__CART;
  payload: number;
}
interface ChangeCount {
  type: CartActionTypes.CHANGE__COUNT;
  payload: ChangeCountTypes;
}

export type CartAction =
  | FetchCartAction
  | FetchCartActionSuccess
  | FetchCartActionError
  | FetchAddCartAction
  | RemoveItemCart
  | ChangeCount
  | FetchAddCartActionError;
