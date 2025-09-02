function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px"; // Menü kapatılıyor
        overlay.style.display = "none"; // Arka planı karartmayı kaldır
    } else {
        sidebar.style.left = "0px"; // Menü açılıyor
        overlay.style.display = "block"; // Arka planı karart
    }
}
