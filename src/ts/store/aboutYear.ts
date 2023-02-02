import create from "zustand/vanilla";

export interface AboutYearState {
    currentYear: string;
    inc: () => void;
    dec: () => void;
}

const aboutYear = create<AboutYearState>((set, get) => ({
    currentYear: "2020",
    setYear: (year: string) => set(state => ({ ...state, currentYear: year })),
    inc: () => {
        console.log(get().currentYear);
    },
    dec: () => {
        console.log(get().currentYear);
    },
}));

export default aboutYear;
