export default function relativeRecordOpen() {
    const aboutRelative = document.querySelector<HTMLElement>(".about__relative");
    if (!aboutRelative) throw Error("there is no .about__relative");
    aboutRelative.addEventListener("click", ({ target }: Event) => {
        const targetEl = target as HTMLElement;
        console.log("🚀 ~ targetEl", targetEl);
        if (!targetEl.classList.contains("relative-record__chevron")) return;
        const relativeRecord = targetEl.closest<HTMLElement>(".relative-record");
        relativeRecord!.classList.toggle("show");
    });
}
