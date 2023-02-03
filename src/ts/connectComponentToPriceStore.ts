import { SlideClass } from "./classSlides";
import Store from "./store";
import type { PriceStoreState } from "./store";
import { SlideComponent } from "@splidejs/splide";

export default function connectComponentToPriceStore(slidesInstances: SlideClass) {
    //подключаем .price-content к стору
    const priceContents = document.querySelectorAll<HTMLElement>(".price-content");
    Store.priceStore.subscribe(({ platform, product }: PriceStoreState) => {
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

    //подключаем сертификаты к стору
    const certs = document.querySelectorAll<HTMLElement>(".price-details__platform-certificates");
    Store.priceStore.subscribe(({ platform }: PriceStoreState) => {
        certs.forEach(e => e.classList.remove("show"));
        const currentCert = document.querySelector<HTMLElement>(
            `.price-details__platform-certificates[data-cert="${platform}"]`,
        );
        currentCert?.classList.add("show");
    });

    //подключаем slider product к стору
    slidesInstances.splidesInstance?.instances["#product"].on("active", (slide: SlideComponent) => {
        const currentElement = slide.slide.firstElementChild as HTMLElement;
        !!currentElement &&
            !!currentElement.dataset &&
            Store.priceStore.getState().setProduct(+currentElement.dataset.id!);
    });
}
