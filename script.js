const authenticateUser = (username, password) => {
    return new Promise((resolve, reject) => {
        const validUsername = "nabila";
        const validPassword = "nabila123";

        if (username === validUsername && password === validPassword) {
            resolve("successful!");
        } else {
            reject("Incorrect username or password");
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const { value: username } = document.getElementById("username");
        const { value: password } = document.getElementById("password");
        authenticateUser(username, password)
            .then((message) => {
                document.getElementById("errorMessage").textContent = ""; 
                console.log(message);
                window.location.href = "./home.html"; 
            })
            .catch((error) => {
                document.getElementById("errorMessage").innerText = error;
                console.error(error);
            });
    });
});
