import { Screens } from "../Screens";
import randomLetters from "./randomLetters";
import slides from "./slides";
import store from "./store/store";
import { Switcher } from "./Swicther";

export default function init() {
    const screens = new Screens(store);
    const switcher = new Switcher(store);

    const bigmenuItems = document.querySelectorAll<HTMLElement>(".bigmenu-item");
    bigmenuItems.forEach((e, i) => setTimeout(() => randomLetters(e), 500 * i));

    slides();
}
