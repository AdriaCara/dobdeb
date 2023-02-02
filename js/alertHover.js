const alertImageBlue = "https://firebasestorage.googleapis.com/v0/b/dobdeb-411d9.appspot.com/o/alerts%2Falert.png?alt=media&token=b1f8afed-cb98-45b0-bc0d-92c46be98011";
const alertHoverBlue = "https://firebasestorage.googleapis.com/v0/b/dobdeb-411d9.appspot.com/o/alerts%2FalertHover.png?alt=media&token=b4840dfb-6ff5-4857-b5e5-494cfa660937";
const alertImageRed = "https://firebasestorage.googleapis.com/v0/b/dobdeb-411d9.appspot.com/o/alerts%2FalertRed.png?alt=media&token=80f637d0-0c3a-45fc-b93d-fad2f6cf8904";
const alertHoverRed = "https://firebasestorage.googleapis.com/v0/b/dobdeb-411d9.appspot.com/o/alerts%2FalertRedHover.png?alt=media&token=cd4926c5-f29a-4226-8baa-1e53f519a63b";
let alertColor = true;


function alertMouseover() {
    var alertImgActual = document.getElementById("imageAlert");
    if (alertColor) {
        alertImgActual.setAttribute("src", alertHoverBlue);
    } else {
        alertImgActual.setAttribute("src", alertHoverRed);
    }
}

function alertMouseout() {
    var alertImgActual = document.getElementById("imageAlert");
    if (alertColor) {
        alertImgActual.setAttribute("src", alertImageBlue);
    } else {
        alertImgActual.setAttribute("src", alertImageRed);
    }
}