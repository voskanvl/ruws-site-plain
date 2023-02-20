import Splide, { Options } from "@splidejs/splide";
import { MSplides } from "./initSlides";

export interface OptionSlide {
    elementName: `#${string}`;
    elementElement: HTMLElement;
    options: Options;
    controls?: {
        left: HTMLElement;
        right: HTMLElement;
    };
    mediaMatch?: { [key: `${number}px`]: number };
}

export class SlideClass {
    splidesInstance: MSplides | null = null; //TODO: maybe static
    splides: Record<string, Splide> = {};
    matchMedias: Record<string, { res: string; query: MediaQueryList }[]> = {};

    constructor(public data: Record<string, OptionSlide>) {
        if (!this.splidesInstance) this.splidesInstance = new MSplides();
        this.splides = Object.entries(data)
            .filter(([_, val]) => !!val.elementElement)
            .reduce((acc, [key, val]) => {
                const splide = this.splidesInstance!.add(val.elementName, val.options);

                if (val.controls) {
                    !!val.controls.left &&
                        val.controls.left.addEventListener("click", () => {
                            splide.go("<");
                        });
                    !!val.controls.right &&
                        val.controls.right.addEventListener("click", () => {
                            splide.go(">");
                        });
                }
                if (val.mediaMatch) {
                    Object.entries(val.mediaMatch).forEach(([res, amount]) => {
                        const mm = matchMedia(`(max-width: ${res})`);
                        mm.addEventListener("change", ({ matches }: MediaQueryListEvent) => {
                            if (!matches) return;
                            console.log(key, res, amount);
                            splide.options.perPage = amount;
                            splide.refresh();
                        });
                        if (this.matchMedias[key] && this.matchMedias[key].length) {
                            this.matchMedias[key].push({ res, query: mm });
                        } else {
                            this.matchMedias[key] = [];
                            this.matchMedias[key].push({ res, query: mm });
                        }
                    });
                }
                return { ...acc, [key]: splide };
            }, {});
    }
}
