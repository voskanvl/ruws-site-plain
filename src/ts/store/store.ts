import create from "zustand/vanilla";
import { Screens } from "../../Screens";
export interface StoreState {
    block: boolean;
    activeScreenNumber: number;
    previousScreenNumber: number;
    min: number;
    max: number;
    inc: () => void;
    dec: () => void;
    setScreen: (x: number) => void;
}

const inc = (state: StoreState) => {
    if (state.activeScreenNumber + 1 > state.max) return { ...state };
    return {
        ...state,
        activeScreenNumber: state.activeScreenNumber + 1,
        previousScreenNumber: state.activeScreenNumber,
    };
};
const dec = (state: StoreState) => {
    if (state.activeScreenNumber - 1 < state.min) return { ...state };
    return {
        ...state,
        activeScreenNumber: state.activeScreenNumber - 1,
        previousScreenNumber: state.activeScreenNumber,
    };
};
const setScreenHandler = (x: number) => (state: StoreState) => {
    if (x < state.min || x > state.max) return { ...state };
    return { ...state, activeScreenNumber: x, previousScreenNumber: state.activeScreenNumber };
};

const store = create<StoreState>(set => ({
    block: false,
    activeScreenNumber: 0,
    previousScreenNumber: 0,
    min: 0,
    max: document.querySelectorAll("section.screen").length - 1,
    inc: () => set(inc),
    dec: () => set(dec),
    setScreen: x => set(setScreenHandler(x)),
}));

export default store;
