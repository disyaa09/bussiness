function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {
        localStorage.setItem("isLogin", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Username atau password salah!";
    }
}

function checkLogin() {
    if (localStorage.getItem("isLogin") !== "true") {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("isLogin");
    window.location.href = "login.html";
}
