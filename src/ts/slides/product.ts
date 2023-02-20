import { OptionSlide } from "../classSlides";

export const product: OptionSlide = {
    elementName: "#product",
    elementElement: document.querySelector("#product")!,
    options: {
        type: "loop",
        arrows: false,
        perPage: 3,
        perMove: 1,
        focus: "center",
        pagination: false,
    },
    controls: {
        left: document.querySelector<HTMLElement>(".price__products-control--left")!,
        right: document.querySelector<HTMLElement>(".price__products-control--right")!,
    },
};
