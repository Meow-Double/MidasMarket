import {ItemsActionType, ItemsAction} from "../../types/Items";
import { Dispatch } from 'redux';
import { FetchItemsGet } from 'api/api';

export const fetchItems = (species="", sortBy="sortBy=id"): any => {
    return async (dispatch: Dispatch<ItemsAction>) => {
        try {
            dispatch({type: ItemsActionType.FETCH__ITEMS})
            const data = await FetchItemsGet(species, sortBy)
            dispatch({
                type:ItemsActionType.FETCH__ITEMS__SUCCESS,
                payload:data
            })
        } catch (err) {
            dispatch({
                type: ItemsActionType.FETCH__ITEMS__ERROR, 
                payload:"error"
            })
        }
    }
}
