import { Splide } from "@splidejs/splide";
export default function scrollAboutSliderByClick(slider: Splide) {
    const targetEl = document.querySelector<HTMLElement>(".about .splide");
    if (!targetEl) throw Error("no .about .splide");
    targetEl.addEventListener("click", ({ target }: Event) => {
        const closestEl = (target as HTMLElement).closest(".about__year");
        if (!closestEl) return;
        const closestSlide = closestEl.closest(".splide__slide");
        if (!closestSlide) throw Error("no closest .splide__slide");
        const directScroll = closestSlide.classList.contains("is-prev")
            ? "<"
            : closestSlide.classList.contains("is-next")
            ? ">"
            : 0;
        slider.go(directScroll);
    });
}
