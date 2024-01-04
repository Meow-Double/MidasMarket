import {ItemsState, ItemsActionType, ItemsAction} from "../../types/Items"

const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null,
};

const Items = (state = initialState, action: ItemsAction): ItemsState => {
  switch (action.type) {
    case ItemsActionType.FETCH__ITEMS:
      return {
        loading: true,
        error: null,
        items: [],
      };
    case ItemsActionType.FETCH__ITEMS__SUCCESS:
      return {
        loading: false,
        error: null,
        items: action.payload,
      };
    case ItemsActionType.FETCH__ITEMS__ERROR:
      return {
        loading: false,
        error: action.payload,
        items: [],
      };

    default:
      return state;
  }
};

export default Items;
