const togglebutton = document.getElementById("sun");
const toggleicon = document.getElementById("darkmode1");
const styleswap = document.getElementById("pagestyle");
const homepic = document.getElementById("homepic");

togglebutton.addEventListener('click', () => {

    if (toggleicon.classList.contains('fa-sun')) {

        toggleicon.classList.remove('fa-sun');
        toggleicon.classList.add('fa-moon');
        styleswap.setAttribute("href", './darkindex.css');
        homepic.setAttribute("src", './pictures/personatdeskdark.svg');

    } else {

        toggleicon.classList.remove('fa-moon');
        toggleicon.classList.add('fa-sun');

        styleswap.setAttribute("href", './index.css');
        homepic.setAttribute("src", './pictures/personatdesk.svg');
    }

});


const hamburger = document.getElementById('hamburger');
const socialicons = document.getElementById('social-icons');
const hammenu = document.getElementById("hammenu");

const menu = () => {
    if (socialicons.style.display === 'none' && hammenu.classList.contains('fa-bars')) {
        socialicons.style.display = 'flex';
        hammenu.classList.remove('fa-bars');
        hammenu.classList.add('fa-xmark');
        socialicons.style.transform = 'translateX(0)';
        
    } else {
        socialicons.style.display = 'none';
        hammenu.classList.remove('fa-xmark');
        hammenu.classList.add('fa-bars');
        socialicons.style.transition = "all 2s";
        hammenu.style.transition = "all 2s";
    }
};