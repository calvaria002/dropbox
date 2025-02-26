// EventListener on DarkMode
const darkWhite = document.querySelector("button");
const nav = document.querySelector("nav");
const aTag = document.querySelector(".nav-link");
const aTag2 = document.querySelector(".nav-link2");
const aTag3 = document.querySelector(".nav-link3");
const aTag4 = document.querySelector(".nav-link4");
const pText = document.querySelector(".pText");
const pText2 = document.querySelector(".pText2");
const findPlan = document.querySelector(".findplan");
const buttonP = document.querySelector(".buttonP");

const onClick = () => {
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.querySelector(".sign-up").style.color = "black";
    nav.style.backgroundColor = "white";
    nav.style.color = "black";
    nav.style.borderBottom = "solid";
    aTag.style.color = "black";
    aTag2.style.color = "black";
    aTag3.style.color = "black";
    aTag4.style.color = "black";
    pText.style.color = "black";
    pText2.style.color = "black";
    darkWhite.innerText = "Dark Mode";
    darkWhite.style.backgroundColor = "black";
    darkWhite.style.color = "white";
    darkWhite.className = "darkmode";
    findPlan.style.color = "black";
    buttonP.style.color = "black";
  }
};

darkWhite.addEventListener("click", onClick);

let output;
output = darkWhite.className = "darkmode";
console.log(output);
