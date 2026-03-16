function showRegister(){

document.getElementById("homePage").style.display = "none";
document.getElementById("loginPage").style.display = "none";
document.getElementById("registerPage").style.display = "flex";

}

function showLogin(){

document.getElementById("homePage").style.display = "none";
document.getElementById("registerPage").style.display = "none";
document.getElementById("loginPage").style.display = "flex";

}

function backHome(){

document.getElementById("popupRegister").style.display = "none";
document.getElementById("registerPage").style.display = "none";
document.getElementById("loginPage").style.display = "none";
document.getElementById("afterLoginPage").style.display = "none";
document.getElementById("homePage").style.display = "flex";

}

/* ===== REGISTER ===== */

function registerUser(){

// tampilkan popup
document.getElementById("popupRegister").style.display = "flex";

}

/* tangkap submit dari form register */

document.getElementById("registerForm").addEventListener("submit", function(e){

e.preventDefault(); // supaya halaman tidak reload
registerUser();

})

function goToLogin(){

document.getElementById("popupRegister").style.display = "none";

document.getElementById("registerPage").style.display = "none";
document.getElementById("loginPage").style.display = "flex";

}

function loginUser(){

let username = document.getElementById("loginUsername").value;
let password = document.getElementById("loginPassword").value;

if(username=="" || password==""){
alert("Username dan Password harus diisi");
return;
}

// sembunyikan semua halaman
document.getElementById("homePage").style.display = "none";
document.getElementById("loginPage").style.display = "none";
document.getElementById("registerPage").style.display = "none";

// tampilkan halaman setelah login
document.getElementById("afterLoginPage").style.display = "flex";

}