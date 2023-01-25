const navbarrNav = document.querySelector('.navbarr-nav');

// Ketika hamburger menu di klik memunculkan menu
document.querySelector("#hamburger-menu").onclick = () => {
    navbarrNav.classList.toggle("active");
}

// Klik diluar side bar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarrNav.contains(e.target)) {
        navbarrNav.classList.remove('active');
    }
});