const form = document.getElementById("userform");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const age = ageInput.value;

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);

    alert("Information saved!");
});

localStorage.setItem("name", name);
localStorage.setItem("age", age);