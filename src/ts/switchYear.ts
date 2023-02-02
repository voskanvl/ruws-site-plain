import { StoreApi } from "zustand";
import { AboutYearState } from "./store";
export default function switchYear(store: StoreApi<AboutYearState>) {
    const relativeAboutYear = [...document.querySelectorAll<HTMLElement>(".relative-about__year")];
    const relativeAboutYearObject: {
        active?: HTMLElement;
        items?: Record<string, HTMLElement>;
    } = {};
    relativeAboutYearObject.items = relativeAboutYear.reduce(
        (acc, e) => ({
            ...acc,
            [e.dataset.year as string]: e,
        }),
        {},
    );
    relativeAboutYearObject.active = relativeAboutYear.find(e => e.getAttribute("active"));

    store.subscribe(v => {
        relativeAboutYearObject.active?.removeAttribute("active");
        if (!relativeAboutYearObject.items) return;
        relativeAboutYearObject.items[v.currentYear].setAttribute("active", "active");
        relativeAboutYearObject.active = relativeAboutYearObject.items[v.currentYear];
    });
}
