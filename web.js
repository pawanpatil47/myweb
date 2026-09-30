const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
    } else {
        password.type = "password";
        togglePassword.innerHTML = '<i class="bi bi-eye-fill"></i>';
    }

});

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("mouseover", () => {
    loginBtn.style.transform = "scale(1.03)";
});

loginBtn.addEventListener("mouseout", () => {
    loginBtn.style.transform = "scale(1)";
});
