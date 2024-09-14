const diceButton = document.getElementsByTagName("button")[0];
const adviceId = document.getElementsByTagName("h1")[0];
const adviceText = document.getElementsByTagName("p")[0];
const divider = document.getElementsByTagName("img")[0];
const url = "https://api.adviceslip.com/advice";

const fetchAdvice = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

diceButton.addEventListener("click", async () => {
    const data = await fetchAdvice();
    adviceId.innerText = `ADVICE #${data.slip.id}`;
    adviceText.innerText = `"${data.slip.advice}"`;
});

window.addEventListener("resize", () => {
    if (window.innerWidth <= 375) {
        divider.src = "./images/pattern-divider-mobile.svg";
    } else if (window.innerWidth > 375) {
        divider.src = "./images/pattern-divider-desktop.svg";
    }
});

function getCorrectDivider() {
    if (window.innerWidth <= 375) {
        divider.src = "./images/pattern-divider-mobile.svg";
    } else if (window.innerWidth > 375) {
        divider.src = "./images/pattern-divider-desktop.svg";
    }
}

window.addEventListener("load", getCorrectDivider);
