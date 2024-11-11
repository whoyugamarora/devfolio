const togglebutton = document.getElementById("sun");
const toggleicon = document.getElementById("darkmode1");
const styleswap = document.getElementById("pagestyle");
const homepic = document.getElementById("homepic");
const favicon = document.getElementById("favicon");
const logo = document.getElementById("imglogo");

togglebutton.addEventListener('click', () => {

    if (toggleicon.classList.contains('fa-moon')) {

        toggleicon.classList.remove('fa-moon');
        toggleicon.classList.add('fa-sun');
        styleswap.setAttribute("href", './darkindex.css');
        logo.setAttribute("src", "./pictures/darklogo.png?v=" + new Date().getTime());
        favicon.setAttribute("href", "./pictures/darklogo.png?v=" + new Date().getTime());

    
    } else {
        toggleicon.classList.remove('fa-sun');
        toggleicon.classList.add('fa-moon');
        styleswap.setAttribute("href", './index.css');
        logo.setAttribute("src", "./pictures/lightlogo.png?v=" + new Date().getTime());
        favicon.setAttribute("href", "./pictures/lightlogo.png?v=" + new Date().getTime());

    }

});

window.addEventListener("load", () => {
    // Scroll to the top after a small delay
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);

    // If there is a hash, reload the page without the hash
    if (window.location.hash) {
        const cleanURL = window.location.origin + window.location.pathname;
        window.history.replaceState(null, null, cleanURL); // Updates URL without reloading
    }
});


