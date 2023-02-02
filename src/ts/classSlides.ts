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
}

export class SlideClass {
    splidesInstance: MSplides | null = null; //TODO: maybe static
    splides: Splide[] = [];
    constructor(public data: OptionSlide[]) {
        if (!this.splidesInstance) this.splidesInstance = new MSplides();
        this.splides = data
            .filter(e => !!e.elementElement)
            .map(e => {
                const splide = this.splidesInstance!.add(e.elementName, e.options);
                if (!e.controls) return splide;
                e.controls.left.addEventListener("click", () => splide.go("<"));
                e.controls.right.addEventListener("click", () => splide.go(">"));
                return splide;
            });
    }
}
