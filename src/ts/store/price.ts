import create, { StoreApi } from "zustand/vanilla";
import { devtools } from "zustand/middleware";
import type { WithDevtools } from "zustand/middleware/devtools";
//!! добавил export  в искодные данные immer и devtools, что бы получить типы

export interface PriceStoreState {
    product: number;
    platform: number;
    setProduct: (x: number) => void;
    setPlatform: (x: number) => void;
    nextProduct: () => void;
    prevProduct: () => void;
}

const priceStore: WithDevtools<StoreApi<PriceStoreState>> = create(
    devtools(
        set => ({
            product: 0,
            platform: 0,
            setProduct: (x: number) => set(state => ({ ...state, product: x })),
            setPlatform: (x: number) => set(state => ({ ...state, platform: x })),
            nextProduct: () => set({}),
            prevProduct: () => {},
        }),
        { name: "priceStore" },
    ),
);

export default priceStore;
