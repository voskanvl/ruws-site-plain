import { OptionSlide } from "../classSlides";

export const about: OptionSlide = {
    elementName: "#about",
    elementElement: document.querySelector("#about")!,
    options: {
        type: "loop",
        arrows: false,
        perPage: 5,
        focus: "center",
        pagination: false,
    },
    controls: {
        left: document.querySelector<HTMLElement>(".about__control--left")!,
        right: document.querySelector<HTMLElement>(".about__control--right")!,
    },
};
