// Script Feather
feather.replace();
//----//


// Active scrolling
const li = document.querySelectorAll(".nav-link");
const sec = document.querySelectorAll("section");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + -280 < sec[len].offsetTop) { }
    li.forEach((ltx) => ltx.classList.remove("active", "fw-bold"));
    li[len].classList.add("active", "fw-bold");
}
activeMenu();
window.addEventListener("scroll", activeMenu);
//----//


// Navbar Scroll
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
//----///



// <!-- Script form contact -->
const scriptURL = "https://script.google.com/macros/s/AKfycbyGQagcZmeBuq1GoS0-kAPP1pg-zxZVgULkoGPi2fTGEOP2EFPcMbcmQLa4EQY6AtRM/exec";
const form = document.forms["contact-form-portfolio"];
const btnKirim = document.querySelector(".btn-kirim");
const btnNotif = document.querySelector(".btn-notif");
const btnLoading = document.querySelector(".btn-loading");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // ketika tombol submit di klik
    // Tampilkan loading
    btnLoading.classList.toggle("d-none");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            // Hilangkan loading
            btnLoading.classList.toggle("d-none");
            // Tampilkan alert
            btnNotif.classList.toggle("d-none");
            // reset form
            form.reset();

            console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
});
//----//





















// Tambahkan kelas aktif ke tombol saat ini (sorot)
    // let header = document.getElementById("navbar-nav"); // container element
    // let btns = document.getElementsByClassName("nav-link"); // semua class "nav-link" di dalam container

    // // ulangi tombol dan tambahkan kelas aktif ke tombol saat ini yang di klik
    // for (let i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", function () {
    //         let current = document.getElementsByClassName("active");
    //         let currentBold = document.getElementsByClassName("fw-bold");
    //         current[0].className = current[0].className.replace(" active", "");
    //         currentBold[0].className = currentBold[0].className.replace(" fw-bold", "");
    //         this.className += " active fw-bold"; // tambah class ke tombol yang di klik
    //     });
    // }
//----//


