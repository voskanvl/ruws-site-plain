import store from "./store";

export default function moveProjectsByMouse() {
    // const projects = [...document.getElementsByClassName("projects")][0];
    const INIT_SHIFT = 10;
    const COEFF_MOVE = 5;
    const projects = document.querySelector<HTMLElement>(".projects");
    document.addEventListener("mouseover", (event: MouseEvent) => {
        if (store.screenStore.getState().activeScreenNumber !== 1) return;
        const { clientX } = event;
        const { innerWidth } = window;
        const halfInnerWidth = innerWidth / 2;
        const shift = (clientX - halfInnerWidth) / halfInnerWidth;
        console.log("🚀 ~ shift:", shift);
        !!projects && projects.style.setProperty("--x", INIT_SHIFT + shift * COEFF_MOVE + "%");
    });
}
