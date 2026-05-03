const form = document.querySelector("form"); 
const card_number = document.querySelector(".card-number"); 
const card_holder = document.querySelector(".card-holder"); 
const exp_month = document.querySelector("#display-month"); 
const exp_year = document.querySelector("#display-year"); 
const cv_number = document.querySelector("#cv-num"); 
const userName = document.querySelector("#name"); 
const user_card_num = document.querySelector("#number"); 
const month = document.querySelector("#month"); 
const year = document.querySelector("#year"); 
const cvc = document.querySelector("#cvc"); 
const fullNameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/; 
const numbersWithSpaces = /^[\d\s]+$/; 
const numbersOnlyRegex = /^\d+$/; 
const completeState = document.querySelector("#completed-state");
const continue_btn = document.querySelector("#continue");

function forChecking(value, regex, dom) {
  if (value.trim() === "") {
    dom.classList.add("error");
    return false;
  }
  if (!regex.test(value)) {
    dom.classList.add("error");
    return false;
  } else {
    dom.classList.remove("error");
    return true;
  }
}

function forInput(text, value) {
  text.textContent = value;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const v1 = forChecking(cvc.value, numbersOnlyRegex, cvc);
  const v2 = forChecking(userName.value, fullNameRegex, userName);
  const v3 = forChecking(user_card_num.value, numbersWithSpaces, user_card_num);
  const v4 = forChecking(month.value, numbersOnlyRegex, month);
  const v5 = forChecking(year.value, numbersOnlyRegex, year);
  if (v1 && v2 && v3 && v4 && v5) {
    form.style.display = "none";
    completeState.style.display = "flex";
  }
});

userName.addEventListener("input", () => {
  (userName.value, fullNameRegex, userName);
  forInput(card_holder, userName.value);
});

user_card_num.addEventListener("input", () => {
  (user_card_num.value, numbersWithSpaces, user_card_num);
  forInput(card_number, user_card_num.value);
});

month.addEventListener("input", () => {
  (month.value, numbersOnlyRegex, month);
  forInput(exp_month, month.value);
});

year.addEventListener("input", () => {
  (year.value, numbersOnlyRegex, year);
  forInput(exp_year, year.value);
});

cvc.addEventListener("input", () => {
  forChecking(cvc.value, numbersOnlyRegex, cvc);
  forInput(cv_number, cvc.value);
});

continue_btn.addEventListener("click" , ()=>{
    form.style.display = "flex";
    completeState.style.display = "none";
    location.reload()
})