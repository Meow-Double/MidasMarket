export interface ItemsTypes{
  title: string;
  image: string;
  info: string;
  desc: string | null ;
  grams: number;
  path: string | null;
  price: number | null;
  oldPrice: number | null;
  id: number | null;
  orderWith: number[];
  types: IItemsTypes[];
 }

 interface IItemsTypes{
    title:string;
    price:number;
 }


export interface ItemsState {
    items: any[];
    loading: boolean;
    error: null | string;
  }
  
 export enum ItemsActionType {
    FETCH__ITEMS = "FETCH__ITEMS",
    FETCH__ITEMS__SUCCESS = "FETCH__ITEMS__SUCCESS",
    FETCH__ITEMS__ERROR = "FETCH__ITEMS__ERROR",
  }
  
  interface FetchItemsAction {
    type: ItemsActionType.FETCH__ITEMS;
  }
  interface FetchItemsSuccessAction {
    type: ItemsActionType.FETCH__ITEMS__SUCCESS;
    payload: any[];
  }
  interface FetchItemsErrorAction {
    type: ItemsActionType.FETCH__ITEMS__ERROR;
    payload: string;
  }
  
 export type ItemsAction = FetchItemsAction | FetchItemsSuccessAction | FetchItemsErrorAction;



