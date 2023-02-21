function createAlertButton() {
    const alert = document.createElement('li');
    alert.setAttribute('id', 'alert');
    alert.setAttribute('class', 'nav-item mt-0');
    
    const dropdown = document.createElement('div');
    dropdown.setAttribute('class', 'dropdown ms-5');
    
    const button = document.createElement('button');
    button.setAttribute('class', 'btn');
    button.setAttribute('type', 'button');
    button.setAttribute('id', 'dropdownAlert');
    button.setAttribute('data-bs-toggle', 'dropdown');
    button.setAttribute('aria-expanded', 'false');
    
    const image = document.createElement('img');
    image.setAttribute('id', 'imageAlert');
    image.setAttribute('alt', 'Alert image');
    image.setAttribute('width', '50');
    image.setAttribute('height', '50');
    image.setAttribute('class', 'btn-img bg-secondary');
    image.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/dobdeb-411d9.appspot.com/o/alerts%2Falert.png?alt=media&token=b4c52418-2052-49f4-96dc-07e4b907fc4a');
    image.setAttribute('alt', 'Image');
    image.setAttribute('onmouseover', 'alertMouseover();');
    image.setAttribute('onmouseout', 'alertMouseout();');
    
    const alertContent = document.createElement('ul');
    alertContent.setAttribute('id', 'alertContent');
    alertContent.setAttribute('class', 'dropdown-menu');
    alertContent.setAttribute('aria-labelledby', 'dropdownAlert');
    
    const dropdownItem = document.createElement('li');
    dropdownItem.setAttribute('class', 'dropdown-item d-flex justify-content-center');
    
    const p = document.createElement('p');
    p.setAttribute('class', 'mt-3 text-muted');
    p.textContent = 'EMPTY';

    button.appendChild(image);
    dropdown.appendChild(button);
    dropdownItem.appendChild(p);
    alertContent.appendChild(dropdownItem);
    dropdown.appendChild(alertContent);
    alert.appendChild(dropdown);
    navbar.appendChild(alert);
}