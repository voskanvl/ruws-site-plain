import create from "zustand/vanilla";
import { Screens } from "../../Screens";
export interface StoreState {
    block: boolean;
    activeScreenNumber: number;
    min: number;
    max: number;
    inc: () => void;
    dec: () => void;
    setScreen: (x: number) => void;
}

const inc = (state: StoreState) => {
    const result =
        state.activeScreenNumber + 1 > state.max
            ? state.activeScreenNumber
            : state.activeScreenNumber + 1;
    return { ...state, activeScreenNumber: result };
};
const dec = (state: StoreState) => {
    const result =
        state.activeScreenNumber - 1 < state.min
            ? state.activeScreenNumber
            : state.activeScreenNumber - 1;
    return { ...state, activeScreenNumber: result };
};
const setScreenHandler = (x: number) => (state: StoreState) => {
    const result = x < state.min || x > state.max ? state.activeScreenNumber : x;
    return { ...state, activeScreenNumber: result };
};

const store = create<StoreState>(set => ({
    block: false,
    activeScreenNumber: 0,
    min: 0,
    max: document.querySelectorAll("section.screen").length - 1,
    inc: () => set(inc),
    dec: () => set(dec),
    setScreen: x => set(setScreenHandler(x)),
}));

export default store;
