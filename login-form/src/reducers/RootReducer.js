import { combineReducers } from "redux";
import { UserReducer } from "./Userreducer"

export const RootReducer = combineReducers({
    user: UserReducer,
})