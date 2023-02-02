import { YearSwitcher } from "./YearSwitcher";
import { Screens } from "../Screens";
import randomLetters from "./randomLetters";
import slides from "./slides";
import Store from "./store";
import { Switcher } from "./Swicther";
import switchYear from "./switchYear";

export default function init() {
    const screens = new Screens(Store.store);
    const switcher = new Switcher(Store.store);

    const bigmenuItems = document.querySelectorAll<HTMLElement>(".bigmenu-item");
    bigmenuItems.forEach((e, i) => setTimeout(() => randomLetters(e), 500 * i));

    const slidesInstances = slides();
    slidesInstances.splides["about"].on("active", ({ slide }) => {
        if (slide.classList.contains("splide__slide--clone")) return;
        const aboutYear = slide.querySelector<HTMLElement>(".about__year");
        if (!aboutYear) throw Error("в слайде нет .about__year");
        Store.aboutYear.setState(state => ({ ...state, currentYear: aboutYear.innerText }));
    });

    new YearSwitcher(Store.aboutYear);
    switchYear(Store.aboutYear);

    //переключение splide на about по нажатию на год
    const splideList = document.querySelector<HTMLElement>(".splide__list");
    !!splideList &&
        splideList.addEventListener("click", ({ target }) => {
            const targetEl = (target as HTMLElement).closest(".splide__slide");
            if (
                !targetEl ||
                (!targetEl.classList.contains("is-next") && !targetEl.classList.contains("is-prev"))
            )
                return;
            slidesInstances.splides["about"].go(
                targetEl.classList.contains("is-next")
                    ? ">"
                    : targetEl.classList.contains("is-prev")
                    ? "<"
                    : "",
            );
        });
}
