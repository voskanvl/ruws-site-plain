import { SlideClass } from "../classSlides";
import { about } from "./about";
import { certificates } from "./certificates";
import { panels } from "./panels";
import { partners } from "./partners";
import { product } from "./product";
import { review } from "./review";
import { services } from "./services";

export default function slides() {
    return new SlideClass({
        review,
        about,
        product,
        ...certificates,
        services,
        partners,
        ...panels,
    });
}
