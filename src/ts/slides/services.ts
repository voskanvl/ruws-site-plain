import { OptionSlide } from "../classSlides";

export const services: OptionSlide = {
    elementName: "#services",
    elementElement: document.querySelector("#services")!,
    options: {
        type: "loop",
        arrows: false,
        perPage: 3,
        perMove: 1,
        focus: "center",
        pagination: false,
    },
    controls: {
        left: document.querySelector<HTMLElement>(".services__control--left")!,
        right: document.querySelector<HTMLElement>(".services__control--right")!,
    },
    mediaMatch: {
        "1920px": 3,
        "768px": 2,
        "580px": 1,
    },
};
