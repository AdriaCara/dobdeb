function saveNewAlert() {
    const message = document.getElementById("newAlertMessage").value;
    const rol = document.getElementById("newAlertRol").value;
    
    createAlert(message, rol);
    deleteElementsModal();
}