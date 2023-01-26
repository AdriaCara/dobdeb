const newAlertForm = document.getElementById("newAlert-form");

newAlertForm.addEventListener("submit", e => {
    e.preventDefault();
    const message = document.getElementById("newAlertMessage").value;
    const rol = document.getElementById("newAlertRol").value;
    
    createAlert(message, rol);
});