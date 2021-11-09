const logForm = document.querySelector(".login-form");
const email = document.querySelector(["email"]);
const password = document.querySelector(["password"]);

logForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password } } = event.currentTarget;


    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены!");
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();


};
