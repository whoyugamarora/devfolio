const togglebutton = document.getElementById("sun");
const toggleicon = document.getElementById("darkmode1");
const styleswap = document.getElementById("pagestyle");
const homepic = document.getElementById("homepic");

togglebutton.addEventListener('click', () => {

    if (toggleicon.classList.contains('fa-moon')) {

        toggleicon.classList.remove('fa-moon');
        toggleicon.classList.add('fa-sun');
        styleswap.setAttribute("href", './darkindex.css');
        homepic.setAttribute("src", './pictures/personatdesk.svg');
    
    } else {
        toggleicon.classList.remove('fa-sun');
        toggleicon.classList.add('fa-moon');
        styleswap.setAttribute("href", './index.css');
        homepic.setAttribute("src", './pictures/personatdeskdark.svg');   
    }

});
