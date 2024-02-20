import { applyMiddleware, createStore} from "redux";
import { rootReducer } from "./reducers";
import { thunk } from "redux-thunk";

const reducers: any = rootReducer;

const store = createStore(reducers, applyMiddleware(thunk)) ;

export default store;


