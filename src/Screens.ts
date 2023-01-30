import { StoreApi } from "zustand/vanilla";
import { StoreState } from "./ts/store/store";

type StatusScreen = "left" | "current" | "right";

export class Screen {
    number: string | undefined;
    index: number | null;
    _status: StatusScreen = "right";
    constructor(public screenEl: HTMLElement, private initilalStatus: StatusScreen) {
        this.number = screenEl.dataset.number;
        this.index = screenEl.dataset.number ? +screenEl.dataset.number : null;
        this.status = initilalStatus;
    }

    public get status(): StatusScreen {
        return this._status;
    }

    public set status(v: StatusScreen) {
        this._status = v;
        this.screenEl.classList.remove("current");
        this.screenEl.classList.remove("right");
        this.screenEl.classList.remove("left");
        this.screenEl.classList.add(v);
    }
}

export class Screens {
    screens: Screen[];
    constructor(public store: StoreApi<StoreState>) {
        const screens = [...document.querySelectorAll<HTMLElement>("section.screen")];
        this.screens = screens.map(e => {
            const status: StatusScreen = e.classList.contains("current") ? "current" : "right";
            return new Screen(e, status);
        });
        this.recomposing = this.recomposing.bind(this);
        store.subscribe(({ activeScreenNumber }) => this.recomposing(activeScreenNumber));
    }

    recomposing(next: number) {
        this.screens.forEach(e => {
            if (e.index === null) return;
            e.index < next
                ? (e.status = "left")
                : e.index === next
                ? (e.status = "current")
                : (e.status = "right");
        });
    }
}
