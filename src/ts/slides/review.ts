import { OptionSlide } from "../classSlides";

export const review: OptionSlide = {
    elementName: "#review",
    elementElement: document.querySelector("#review")!,
    options: {
        type: "loop",
        arrows: false,
        perPage: 3,
        focus: "center",
        pagination: false,
    },
    controls: {
        left: document.querySelector<HTMLElement>(".reviews__control--left")!,
        right: document.querySelector<HTMLElement>(".reviews__control--right")!,
    },
};
