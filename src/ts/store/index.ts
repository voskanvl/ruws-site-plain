export type { StoreApi } from "zustand";
import store from "./store";
import aboutYear from "./aboutYear";
export type { StoreState } from "./store";
export type { AboutYearState } from "./aboutYear";

export default {
    store,
    aboutYear,
};
