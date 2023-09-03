const upperInp = document.querySelector(".upper-input");
const lowerInp = document.querySelector(".lower-input");
const upperSelect = document.querySelector(".upper-select");
const lowerSelect = document.querySelector(".lower-select");

let temperature;
let userInp,
  userInpType = "c";
let output,
  outputType = "f";

function handleUserInput(val) {
  userInp = Number(val);
  handleChange();
}

function handleChange() {
  let temp;

  if (!userInp && userInp != 0) {
    return;
  }

  if (userInpType === "c" && outputType === "f") {
    temp = userInp * (9 / 5) + 32;
  } else if (userInpType === "c" && outputType === "k") {
    temp = userInp + 273.15;
  } else if (userInpType === "f" && outputType === "c") {
    temp = (userInp - 32) * (5 / 9);
  } else if (userInpType === "f" && outputType === "k") {
    temp = (userInp - 32) * (5 / 9) + 273.15;
  } else if (userInpType === "k" && outputType === "c") {
    temp = userInp - 273.15;
  } else if (userInpType === "k" && outputType === "f") {
    temp = (userInp - 273.15) * (9 / 5) + 32;
  } else if (userInpType === outputType) {
    temp = userInp;
  }
  lowerInp.value = temp.toFixed(2);
}

upperInp.addEventListener("change", (e) => handleUserInput(e.target.value));
upperSelect.addEventListener("change", (e) => {
  userInpType = e.target.value;
  handleUserInput(upperInp.value);
  handleChange();
});

lowerSelect.addEventListener("change", (e) => {
  outputType = e.target.value;
  handleChange();
});
