import { StoreApi } from "./store";
import { AboutYearState } from "./store/aboutYear";
export class YearSwitcher {
    constructor(public store: StoreApi<AboutYearState>) {
        const targetEl = document.querySelector<HTMLElement>(".about .splide");
        targetEl?.addEventListener("click", ({ target }: Event) => {
            if (!(target as HTMLElement).closest(".about__year")) return;
            const yearVal = (target as HTMLElement).innerText;
            store.setState(state => ({ ...state, currentYear: yearVal }));
        });
    }
}
