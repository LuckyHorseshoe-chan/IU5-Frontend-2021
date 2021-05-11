import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import { userReducer } from "./user/reducer"


const rootReducer = combineReducers({
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))