import Store from "./store";
export default function platformSwitcher() {
    const { priceStore } = Store;
    const platformDetails = document.querySelectorAll<HTMLElement>(".platform-details");
    platformDetails.forEach(e =>
        e.addEventListener("click", ({ currentTarget }: Event) => {
            const targetEl = currentTarget as HTMLElement;
            targetEl !== undefined &&
                !!targetEl.dataset.id &&
                priceStore.getState().setPlatform(+targetEl.dataset.id);
            console.log("🚀 ~ priceStore.getState()", targetEl, priceStore.getState());
        }),
    );
}
