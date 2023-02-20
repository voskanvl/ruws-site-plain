import { OptionSlide } from "../classSlides";

const certificatesName = document.querySelectorAll<HTMLElement>(
    ".price-details__platform-certificates > section.splide[id^='certificate']",
);

export const certificates: Record<string, OptionSlide> = [...certificatesName].reduce(
    (acc, e) => ({
        ...acc,
        [e.getAttribute("id")!]: {
            elementName: `#${e.getAttribute("id")!}`,
            elementElement: e,
            options: {
                perPage: 1,
                pagination: true,
                arrows: false,
            },
        },
    }),
    {},
);
