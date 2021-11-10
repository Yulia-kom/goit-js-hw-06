const logForm = document.querySelector(".login-form");
const email = document.querySelector(["email"]);
const password = document.querySelector(["password"]);

logForm.addEventListener("submit", event => {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;


    if (email.value === "" || password.value === "") {
        alert("Все поля должны быть заполнены!");
        return;
    }

    const result = {
        email: email.value,
        password: password.value
    };

    console.log(result);
    event.currentTarget.reset();
});
