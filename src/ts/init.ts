import { PriceStoreState } from "./store/price";
import { YearSwitcher } from "./YearSwitcher";
import { Screens } from "../Screens";
import randomLetters from "./randomLetters";
import slides from "./slides";
import Store from "./store";
import { Switcher } from "./Swicther";
import switchYear from "./switchYear";
import platformSwitcher from "./platformSwitcher";

export default function init() {
    const screens = new Screens(Store.screenStore);
    const switcher = new Switcher(Store.screenStore);

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

    platformSwitcher();

    //подключаем .price-content к стору
    const priceContents = document.querySelectorAll<HTMLElement>(".price-content");
    Store.priceStore.subscribe(({ platform, product }: PriceStoreState) => {
        product = 0;
        priceContents.forEach(e => e.classList.remove("show"));
        const priceContent = document.querySelector<HTMLElement>(
            `.price-content[data-id="${product}"]`,
        );
        priceContent?.classList.add("show");
        const priceContentPlatforms = priceContent?.querySelectorAll<HTMLElement>(
            ".price-content__platform",
        );
        priceContentPlatforms?.forEach(e => e.classList.remove("show"));

        const priceContentPlatform = priceContent?.querySelector<HTMLElement>(
            `.price-content__platform[data-platform='${platform}']`,
        );
        priceContentPlatform?.classList.add("show");
    });
}
