document.getElementById("descargarManual").addEventListener("click", function() {
    // Cambia la URL a la ubicación de tu archivo PDF
    var pdfUrl = "./prueba.pdf";

    // Crea un enlace temporal para descargar el PDF
    var a = document.createElement("a");
    a.style.display = "none";
    a.href = pdfUrl;
    a.download = "manual.pdf"; // Nombre del archivo que se descargará
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

document.getElementById("descargarAPK").addEventListener("click", function() {
    // Cambia la URL a la ubicación de tu archivo PDF
    var pdfUrl = "./tuproyecto.apk";

    // Crea un enlace temporal para descargar el PDF
    var a = document.createElement("a");
    a.style.display = "none";
    a.href = pdfUrl;
    a.download = "gamerspeak.apk"; // Nombre del archivo que se descargará
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});