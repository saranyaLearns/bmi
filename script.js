let btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", () => {
  var height = document.getElementById("txtHeight").value;
  var weight = document.getElementById("txtWeight").value;
  var result = document.getElementById("result");
  var cm_to_m = parseFloat(height) / 100;
  var bmi = weight / (cm_to_m * cm_to_m);
  var bmi_result = parseFloat(bmi).toFixed(2);
  result.innerHTML = "Your BMI is: " + bmi_result;
  document.querySelector(".form-container").style.display = "none";
  document.querySelector(".form-result").style.display = "block";

  if (bmi_result < 18.5) {
    const uw = document.querySelector(".under-weight");
    uw.style.color = "red";
    uw.style.fontWeight = "bold";
    uw.style.fontSize = "small";
    const diet = document.createElement("p");
    const food = document.createTextNode(
      "We recommend, high-energy foods like cheese, nuts, milk-based creams and dried fruit."
    );
    diet.appendChild(food);
    const element1 = document.querySelector(".diet");
    element1.appendChild(diet);
    var x = document.createElement("IMG");
    x.setAttribute("src", "./img/under-weight.jpg");
    x.setAttribute("width", "200");
    x.setAttribute("height", "130");

    x.setAttribute("alt", "Under Weight");
    const img_gallery = document.querySelector(".gallery");
    img_gallery.appendChild(x);
    let needleHand = document.querySelector(".needle");
    let hands = document.querySelectorAll(".hand");
    function setTime() {
      const range = 390;
      needleHand.style.transform = `rotate(${range}deg)`;
    }
    setInterval(setTime, 1000);
  } else if (bmi_result >= 18.5 && bmi_result <= 24.9) {
    const nw = document.querySelector(".normal");
    nw.style.color = "green";
    nw.style.fontWeight = "bold";
    nw.style.fontSize = "medium";
    const diet = document.createElement("p");
    const food = document.createTextNode(
      "We recommend, portions, fruit, vegetables, base meals on fibre starchy foods."
    );
    diet.appendChild(food);
    const element1 = document.querySelector(".diet");
    element1.appendChild(diet);
    var x = document.createElement("IMG");
    x.setAttribute("src", "./img/normal-weight.jpg");
    x.setAttribute("width", "200");
    x.setAttribute("height", "130");
    x.setAttribute("alt", "Normal Weight");
    const img_gallery = document.querySelector(".gallery");
    img_gallery.appendChild(x);
    let needleHand = document.querySelector(".needle");
    let hands = document.querySelectorAll(".hand");
    function setTime() {
      const range = 430;
      needleHand.style.transform = `rotate(${range}deg)`;
    }
    setInterval(setTime, 1000);
  } else if (bmi_result >= 25 && bmi_result <= 29.9) {
    const ow = document.querySelector(".over-weight");
    ow.style.color = "yellow";
    ow.style.fontWeight = "bold";
    ow.style.fontSize = "small";
    const diet = document.createElement("p");
    const food = document.createTextNode(
      "We recommend, wheat, brown rice,fruits(avoid juice), cut oats."
    );
    diet.appendChild(food);
    const element1 = document.querySelector(".diet");
    element1.appendChild(diet);
    var x = document.createElement("IMG");
    x.setAttribute("src", "./img/over-weight.jpg");
    x.setAttribute("width", "200");
    x.setAttribute("height", "130");
    x.setAttribute("alt", "Over Weight");
    const img_gallery = document.querySelector(".gallery");
    img_gallery.appendChild(x);
    let needleHand = document.querySelector(".needle");
    let hands = document.querySelectorAll(".hand");
    function setTime() {
      const range = 480;
      needleHand.style.transform = `rotate(${range}deg)`;
    }
    setInterval(setTime, 1000);
  } else if (bmi_result > 30) {
    const ob = document.querySelector(".obese");
    ob.style.color = "red";
    ob.style.fontWeight = "bold";
    ob.style.fontSize = "medium";
    const diet = document.createElement("p");
    const food = document.createTextNode(
      "We recommend, low fat soup,fat-free milk products and keep regular exercise."
    );
    diet.appendChild(food);
    const element1 = document.querySelector(".diet");
    element1.appendChild(diet);
    var x = document.createElement("IMG");
    x.setAttribute("src", "./img/obesity.jpg");
    x.setAttribute("width", "200");
    x.setAttribute("height", "130");
    x.setAttribute("alt", "Obese");
    const img_gallery = document.querySelector(".gallery");
    img_gallery.appendChild(x);
    let needleHand = document.querySelector(".needle");
    let hands = document.querySelectorAll(".hand");
    function setTime() {
      const range = 520;
      needleHand.style.transform = `rotate(${range}deg)`;
    }
    setInterval(setTime, 1000);
  }
});
