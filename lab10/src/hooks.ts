import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as UserActionCreators from "./store/user/action"
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store";



export const useActions = () =>  bindActionCreators(UserActionCreators, useDispatch());
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;