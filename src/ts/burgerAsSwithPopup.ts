export default function burgerAsSwithPopup(burger: HTMLElement | null) {
    if (!burger) return;
    burger.addEventListener("click", () => {
        const popup = document.querySelector<HTMLElement>(".popup-menu");
        !!popup && popup?.classList.toggle("show");
    });
}
