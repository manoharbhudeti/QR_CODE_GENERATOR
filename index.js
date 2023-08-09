function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let amOrPm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }

    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds} ${amOrPm}`;
}

// Call the function to update the clock every second
updateClock();
setInterval(updateClock, 1000);


updateClock(); // Call initially to avoid delay

setInterval(updateClock, 1000); // Update every second


function generateQRCode() {
    var subText = document.getElementById("myInput");
    var url = subText.value;
    var qrPlacer = document.getElementById("qrimage");
    qrPlacer.innerHTML = "";
    var qrcode = new QRCode(qrPlacer, {
        text: url,
        width: 256,
        height: 256
    });
}

var btn = document.getElementById("myForm");
btn.addEventListener("submit", function (event) {
   event.preventDefault();
   generateQRCode();
});
