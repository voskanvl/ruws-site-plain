import { Screens } from "../Screens";
import store from "./store/store";
import { Switcher } from "./Swicther";

export default function init() {
    const screens = new Screens(store);
    console.log("🚀 ~ screens", screens);
    const switcher = new Switcher(store);
}
