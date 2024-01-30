function showPopup() {
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");

    var container = document.getElementById("container");
    container.classList.toggle("opacity");

    var createAccountButton = document.querySelector(".create-account");
    createAccountButton.disabled = popup.classList.contains("show");


}
function closePopup() {
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");

    var container = document.getElementById("container");
    container.classList.toggle("opacity");

    var createAccountButton = document.querySelector(".create-account");
    createAccountButton.disabled = false;
}
function birth_showPopup() {
    var birthday = document.querySelector(".dob-explaination");
    birthday.classList.toggle("show");
}
function gender_showPopup() {
    var gender = document.querySelector(".gender-explaination");
    gender.classList.toggle("show");
}