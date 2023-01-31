const randomChars = (str: string): string => {
    return str.replace(/([a-zA-Zа-яёА-ЯЁ])/g, _ => Math.random().toString(36).substring(2)[0]);
};

const splitStr = (str: string, indexDelimiter: number): [string, string] => {
    const strArray = [...str];
    return [strArray.slice(0, indexDelimiter).join(""), strArray.slice(indexDelimiter).join("")];
};

export default function randomLetters(element: HTMLElement) {
    const str = element.innerText;
    let count = 0;
    const stopIteration = () => count === str.length + 1;

    const interval = setInterval(() => {
        const [left, right] = splitStr(str, count);
        const randomized = randomChars(right);
        const unioned = left + randomized;
        element.innerText = unioned;
        count++;
        if (stopIteration()) clearInterval(interval);
    }, 200);
}
