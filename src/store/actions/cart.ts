import { Dispatch } from "redux";
import { CartAction, CartActionTypes, IItems, ChangeCountTypes } from "types/cart";
import { FetchCartGet, FetchCartPost, FetchCartGetDelete} from "api/api";

export const fetchCart = () => {
  return async (dispatch: Dispatch<CartAction>) => {
    try {
      dispatch({ type: CartActionTypes.FETCH__CART });
      const data = await FetchCartGet();
      dispatch({
        type: CartActionTypes.FETCH__CART__SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: CartActionTypes.FETCH__CART__ERROR,
        payload: "error",
      });
    }
  };
};

export const FetchAddCart = (obj: IItems) => {
  return async (dispatch: Dispatch<CartAction>) => {
    try {
      FetchCartPost(obj);
      dispatch({
        type: CartActionTypes.ADD__CART__ITEM,
        payload: obj,
      });
    } catch (err: any) {
      dispatch({
        type: CartActionTypes.ADD__CART__ITEM__ERROR,
        payload: true,
      })
    }
  };
};

export const RemoveItem = (id: number) => {
  return async (dispatch: Dispatch<CartAction>) => {
    FetchCartGetDelete(id);
    try {
      dispatch({
        type: CartActionTypes.REMOVE__ITEM__CART,
        payload: id,
      });
    } catch (err) {}
  };
};

export const ChangeCount = (obj: ChangeCountTypes) => {
  return {
    type: CartActionTypes.CHANGE__COUNT,
    payload: obj,
  };
};
