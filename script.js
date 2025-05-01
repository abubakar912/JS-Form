//getting h3

let firsth3 = document.getElementById("firsth3");
let lasth3 = document.getElementById("lasth3");
let emailh3 = document.getElementById("emailh3");
let passwordh3 = document.getElementById("passwordh3");
let radioh3 = document.getElementById("radioh3");
let addressh3 = document.getElementById("addressh3");
let button = document.querySelector("button");
let outBtn = document.querySelector('.output-btn')

document.addEventListener("DOMContentLoaded", function () {
  button.addEventListener("click", function () {
    //getting Values
    let firstName = document.querySelector(".firstName").value;
    let lastName = document.querySelector(".lastName").value;
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
    let radio = document.querySelector('input[name="gender"]:checked')?.value;
    let address = document.querySelector(".address").value;

    // document.querySelector(".firstName").style.fontWeight = "700";
    // document.querySelector(".lastName").style.fontWeight = "700";
    // document.querySelector(".email").style.fontWeight = "700";
    // document.querySelector(".password").style.fontWeight = "700";
    // document.querySelector('input[name="gender"]:checked')?.style.fontWeight = "700";
    // document.querySelector(".address").style.fontWeight = "700";

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      address === ""
    ) {
      alert("Fill The Form");
      return;
    }

    firsth3.innerHTML = `✔️ The First Name of Student is : <strong>${firstName}</strong>`;
    lasth3.innerHTML = `✔️ The Last Name of Student is : <strong>${lastName}</strong>`;
    emailh3.innerHTML = `✔️ The E-mail Address of Student is : <strong>${email}</strong>`;
    passwordh3.innerHTML = `✔️ The Account Password of Student is : <strong>${password}</strong>`;
    radioh3.innerHTML = `✔️ The Gender of Student is : <strong>${radio === 'Male' ? 'Male' : 'Female'}</strong>`;
    addressh3.innerHTML = `✔️ The Address of Student is : <strong>${address}</strong>`;

    document.querySelector(".output").style.display = "block";
  });

  outBtn.addEventListener('click', function(){
    document.querySelector(".output").style.display = "none";
  })
});
