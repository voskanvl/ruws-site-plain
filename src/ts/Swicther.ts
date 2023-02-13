import { StoreState, StoreApi } from "./store";

export class Switcher {
    switcherElements: (HTMLElement | null)[];
    constructor(public store: StoreApi<StoreState>) {
        this.switcherElements = [...document.querySelectorAll<HTMLElement>(".switcher")];
        !!this.switcherElements &&
            !!this.switcherElements.length &&
            this.switcherElements.forEach(e =>
                e.addEventListener("click", ({ target, currentTarget }: Event) => {
                    const targetEl = target as HTMLElement;
                    if (!targetEl.classList.contains("navbar__item")) return;
                    const { id } = targetEl.dataset;
                    !!id && this.store.setState(state => ({ ...state, activeScreenNumber: +id }));

                    const prevSwitch = e.querySelector<HTMLElement>("[data-active]");
                    !!prevSwitch && prevSwitch.removeAttribute("data-active");
                    targetEl.dataset.active = "true";

                    if ((currentTarget as HTMLElement).classList.contains("popup-menu"))
                        setTimeout(
                            () => (currentTarget as HTMLElement).classList.remove("show"),
                            800,
                        );
                }),
            );
    }
}
