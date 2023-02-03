import Store from "./store";
export default function productSwitcher() {
    const { priceStore } = Store;
    const productDetails = document.querySelectorAll<HTMLElement>(".price__switcher");
    productDetails.forEach(e =>
        e.addEventListener("click", ({ currentTarget }: Event) => {
            const targetEl = currentTarget as HTMLElement;
            targetEl !== undefined &&
                !!targetEl.dataset.id &&
                priceStore.getState().setProduct(+targetEl.dataset.id);
        }),
    );
}
