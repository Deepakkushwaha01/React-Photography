import { configureStore } from "@reduxjs/toolkit";
import Reducer from './Slice';

export const Store=configureStore({
    reducer:Reducer
})