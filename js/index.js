
// add favicons to all pages
const faviconLink = document.createElement("link");
faviconLink.rel = "icon";
faviconLink.href = "/images/logo.png";
faviconLink.type = "image/x-icon";
document.head.appendChild(faviconLink);

// document.body.appendChild(`<div class="preloader is-active">
//     <div class="preloader__wrap">

//       <div class="spinner text-info"></div>
//     </div>
// </div>`);

// TAWK LIVE CHAT
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/67c88fd9569f29190c604b4f/1iljn3qm1";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();

window.addEventListener("load", () => {
  // Initialise AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: false,
    mirror: true,
  });
// Append header to body to to all pages when visited to avoid code duplication
fetch("/layout/header.html")
  .then((response) => response.text())
  .then((data) => {
    // Insert the header HTML into the body
    document.body.insertAdjacentHTML("afterbegin", data);

    // Add event listener to menu toggle button to show/hide menu on mobile
    const hamburger = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-nav");
    if (hamburger && menu) {
      hamburger.addEventListener("click", function () {
        menu.classList.toggle("show");
      });
    }

    // Highlight the current page in the navigation menu
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll(".nav-links a");
    menuItem.forEach((item) => {
      if (item.href === currentLocation) {
        item.classList.add("active");
      }
    });

    // Add event listener to search icon to show/hide search bar
    const searchIcon = document.getElementById("search-toggle");
    const searchBar = document.getElementById("search-bar");
    if (searchIcon && searchBar) {
      searchIcon.addEventListener("click", function () {
        searchBar.classList.toggle("show");
      });
    }
  });

// Append footer to body to to all pages when visited to avoid code duplication
fetch("/layout/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.body.insertAdjacentHTML("beforeend", data);
    // Update the current year in the footer
    document.getElementById("current-year").innerText =
      new Date().getFullYear();
  });

  document.querySelector('.preloader').classList.remove('is-active')
});
