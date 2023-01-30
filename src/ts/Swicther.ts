import { StoreApi } from "zustand";
import { StoreState } from "./store/store";

export class Switcher {
    switcherElement: HTMLElement | null;
    constructor(public store: StoreApi<StoreState>) {
        this.switcherElement = document.querySelector<HTMLElement>(".switcher");
        !!this.switcherElement &&
            this.switcherElement.addEventListener("click", ({ target }: Event) => {
                if (!(target as HTMLElement).classList.contains("navbar__item")) return;
                const { id } = (target as HTMLElement).dataset;
                !!id && this.store.setState(state => ({ ...state, activeScreenNumber: +id }));

                const prevSwitch =
                    this.switcherElement!.querySelector<HTMLElement>("[data-active]");
                !!prevSwitch && prevSwitch.removeAttribute("data-active");
                (target as HTMLElement).dataset.active = "true";
            });
    }
}
