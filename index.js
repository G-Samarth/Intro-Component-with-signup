
const claimButton = document.querySelector(".claim");
const inputs = document.querySelectorAll("input");
const message = document.querySelectorAll("input + i + p");
const icon = document.querySelectorAll("input + i");
const email = document.querySelector("input[type='email']");
const emailInput = document.querySelector(".mail input");
const emailIcon = document.querySelector(".mail i");
const emailPara = document.querySelector(".mail p");

//Checking for blanks in form inputs
claimButton.addEventListener("click", function(){
  for(var i=0;i<inputs.length;i++){
    if(inputs[i].value.trim() === ""){
      inputs[i].classList.remove("success");
      inputs[i].classList.add("blank");
      message[i].style.visibility = "visible";
      icon[i].style.visibility = "visible";
    }
    else{
      inputs[i].classList.add("success");
      inputs[i].classList.remove("blank");
      message[i].style.visibility = "hidden";
      icon[i].style.visibility = "hidden";
    }
  }
});

//Valid email function
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Checking for valid email input
claimButton.addEventListener("click", function(){
  if(validateEmail(email.value.trim())){
    emailInput.classList.add("success");
    emailInput.classList.remove("blank");
  }
  else{
    if(email.value === ""){
      emailPara.textContent = "Email cannot be empty";
    }
    else{
      emailPara.textContent = email.value + " is not valid";
      emailInput.classList.add("blank");
      emailInput.classList.remove("success");
      emailIcon.style.visibility = "visible";
      emailPara.style.visibility = "visible";
    }
  }
});
