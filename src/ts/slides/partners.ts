import { OptionSlide } from "../classSlides";

export const partners: OptionSlide = {
    elementName: "#partners",
    elementElement: document.querySelector("#partners")!,
    options: {
        type: "loop",
        arrows: false,
        perPage: 7,
        perMove: 1,
        focus: "center",
        pagination: false,
    },
    mediaMatch: {
        "1920px": 7,
        "1200px": 6,
        "850px": 5,
        "768px": 4,
        "550px": 3,
        "400px": 2,
    },
};
