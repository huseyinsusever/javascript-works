const form = document.getElementById("userForm");
form.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log("Form data:");
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
    alert("Form send success");
});
