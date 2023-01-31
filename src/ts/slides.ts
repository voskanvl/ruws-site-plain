import { MSplides } from "./initSlides";
export default function slides() {
    // const ranges = [0, 425, 768, 1024, 1440, Infinity];
    // const rangesTabs = [0, 468, 1323, Infinity];
    // // const rangesProduct = [0, 468, 1323, Infinity];

    // function matchRange(x: number, arr: number[]) {
    //     let res;
    //     arr = arr.sort((a, b) => a - b);
    //     for (let index = 0; index < arr.length - 1; index++) {
    //         const up = x >= arr[index];
    //         const down = x < arr[index + 1];
    //         if (up && down) res = index;
    //     }
    //     return res;
    // }

    const splidesInstance = new MSplides();
    const review = document.querySelector("#review");
    // const interviews = document.querySelector("#interviews");
    // const interviews1 = document.querySelector("#interviews1");
    // const approach = document.querySelector("#approach ");
    // const interviews2 = document.querySelector("#interviews2");

    !!review &&
        splidesInstance.add("#review", {
            type: "loop",
            arrows: false,
            perPage: 3,
            padding: "1em",
            focus: "center",
            pagination: false,
        });
    const reviewSplide = splidesInstance.instances["#review"];

    const reviewControls: { left: HTMLElement | null; right: HTMLElement | null } = {
        left: null,
        right: null,
    };

    reviewControls.left = document.querySelector<HTMLElement>(".reviews__control--left");
    reviewControls.right = document.querySelector<HTMLElement>(".reviews__control--right");

    Object.entries(reviewControls).forEach(([key, val]) => {
        val?.addEventListener("click", () => {
            if (key === "left") reviewSplide.go("<");
            if (key === "right") reviewSplide.go(">");
        });
    });

    // interviews &&
    //     splidesInstance.add("#interviews", {
    //         type: "loop",
    //         arrows: true,
    //         pagination: true,
    //     });
    // interviews1 &&
    //     splidesInstance.add("#interviews1", {
    //         type: "loop",
    //         arrows: true,
    //         pagination: true,
    //     });
    // approach &&
    //     splidesInstance.add("#approach ", {
    //         type: "loop",
    //         arrows: true,
    //         pagination: true,
    //     });
    // interviews2 &&
    //     splidesInstance.add("#interviews2", {
    //         type: "loop",
    //         arrows: true,
    //         pagination: true,
    //     });
    // /* RESIZE */
    // function debounce(f: Function, ms: number) {
    //     let isCooldown = false;
    //     return function () {
    //         if (isCooldown) return;
    //         f(arguments);
    //         isCooldown = true;
    //         setTimeout(() => (isCooldown = false), ms);
    //     };
    // }

    // window.addEventListener(
    //     "resize",
    //     debounce(() => {
    //         const perPage = matchRange(innerWidth, ranges);

    //         splidesInstance.instances["#service-package"] &&
    //             (splidesInstance.instances["#service-package"].options.perPage = perPage);
    //         splidesInstance.instances["#service-package"] &&
    //             splidesInstance.instances["#service-package"].refresh();
    //     }, 200),
    // );

    // window.addEventListener(
    //     "resize",
    //     debounce(() => {
    //         const perPage = 2 + (matchRange(innerWidth, rangesTabs) || 0);
    //         console.log("🚀 ~ perPage", perPage);

    //         splidesInstance.instances["#tabs"] &&
    //             (splidesInstance.instances["#tabs"].options.perPage = perPage);
    //         splidesInstance.instances["#tabs"] && splidesInstance.instances["#tabs"].refresh();
    //     }, 200),
    // );

    // let perPage = matchRange(innerWidth, ranges);
    // splidesInstance.instances["#service-package"] &&
    //     (splidesInstance.instances["#service-package"].options.perPage = perPage || 0 + 1);
    // splidesInstance.instances["#service-package"] &&
    //     splidesInstance.instances["#service-package"].refresh();

    // perPage = 2 + (matchRange(innerWidth, rangesTabs) || 0);
    // console.log("🚀 ~ perPage", matchRange(innerWidth, rangesTabs), perPage);
    // splidesInstance.instances["#tabs"] &&
    //     (splidesInstance.instances["#tabs"].options.perPage = perPage);
    // splidesInstance.instances["#tabs"] && splidesInstance.instances["#tabs"].refresh();
}
