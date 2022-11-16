const togglebutton = document.getElementById("toggleimg");
const toggleicon = document.getElementById("darkmode1");
const styleswap = document.getElementById("pagestyle");
const homepic = document.getElementById("homepic");

togglebutton.addEventListener('click', () => {

    if(toggleicon.classList.contains('fa-toggle-off')) {
        
        toggleicon.classList.remove('fa-toggle-off');
        toggleicon.classList.add('fa-toggle-on');
        styleswap.setAttribute("href",'./darkindex.css');
        homepic.setAttribute("src", './pictures/personatdeskdark.svg');

    } else {
        
        toggleicon.classList.remove('fa-toggle-on');
        toggleicon.classList.remove('--fa-inverse');
        toggleicon.classList.add('fa-toggle-off');

        styleswap.setAttribute("href",'./index.css');
        homepic.setAttribute("src", './pictures/personatdesk.svg');
    }

});