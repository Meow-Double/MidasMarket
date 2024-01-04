import {combineReducers} from "redux"
import Items from "./items"
import Cart from "./cart"

export const rootReducer = combineReducers({
    Items,
    Cart,
});



export type RootState = ReturnType<typeof rootReducer>