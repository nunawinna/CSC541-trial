//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}



//BMI CALCULATOR
const calculate = document.getElementById("calculate");

function bmi() {
  const name = document.getElementById("name").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");

  if (name !== "" && height !== "" && weight !== "") {
    const ValorBMI = (weight / (height * height)).toFixed(1);

    let classification = "";

    if (ValorBMI < 18.5) {
      classification = "oh no, underweight.";
    } else if (ValorBMI < 25) {
      classification = "normal weight, congratulations!!!";
    } else if (ValorBMI < 30) {
      classification = "overweight, ok but not that ok.";
    } else if (ValorBMI < 35) {
      classification = "with obesity grade I.";
    } else if (ValorBMI < 40) {
      classification = "with obesity grade II (severe).";
    } else {
      classification = "with obesity III (morbid), be careful!!!";
    }

    result.textContent = `${name} your BMI is ${ValorBMI} and you are ${classification}`;
  } else {
    alert("Please fill all fields!!!");
  }
}

calculate.addEventListener("click", bmi);

//UX in the field of height
document.getElementById("height").addEventListener("input", function (event) {
  let height = event.target.value;

  height = height.replace(/[^\d]/g, "");
  if (!height.includes(".") && height.length > 1) {
    height = height.slice(0, 1) + "." + height.slice(1);
  }
  event.target.value = height;
});

//UX in the field of weight
document.getElementById("weight").addEventListener("input", function (event) {
  let weight = event.target.value;

  weight = weight.replace(",", ".");

  weight = weight.replace(/[^\d.]/g, "");

  if (weight.indexOf(".") !== -1) {
    const parts = weight.split(".");
    weight = parts[0].slice(0, 3) + "." + parts.slice(1).join("").slice(0, 2);
  } else {
    weight = weight.slice(0, 3);
  }

  event.target.value = weight;
});