import { OptionSlide } from "../classSlides";

const panelsName = document.querySelectorAll<HTMLElement>(
    ".panel__slider > section.splide[id^='panel']",
);

export const panels: Record<string, OptionSlide> = [...panelsName].reduce((acc, e) => {
    return {
        ...acc,
        [e.getAttribute("id")!]: {
            elementName: `#${e.getAttribute("id")!}`,
            elementElement: e,
            options: {
                type: "loop",
                perPage: 3,
                perMove: 1,
                pagination: false,
                arrows: false,
                focus: "center",
            },
            controls: {
                left: e.parentElement!.querySelector<HTMLElement>(".panel__slider-control--left")!,
                right: e.parentElement!.querySelector<HTMLElement>(
                    ".panel__slider-control--right",
                )!,
            },
            mediaMatch: {
                "1920px": 3,
                "1200px": 2,
                "768px": 1,
            },
        },
    };
}, {});
