// import { Screen } from './../../Screens'
export type { StoreApi } from "zustand";
import screenStore from "./store";
import aboutYear from "./aboutYear";
import priceStore from "./price";
export type { StoreState } from "./store";
export type { AboutYearState } from "./aboutYear";
export type { PriceStoreState } from "./price";

export default {
    screenStore,
    aboutYear,
    priceStore,
};
