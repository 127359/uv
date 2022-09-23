const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
(function () { 
    const rgx = new RegExp(/(WestWestCoast-Chill.up.railway.app

)|(:portNumUsedInLocalDev)|/g); 
    const host = window.location.host; 
    const isMatch = !host.match(rgx); 
 
    function showWarning() { 
        let warning = document.createElement('h1'); 
        warning.innerText = 'DON\'T STEAL'; 
        warning.style.fontSize = '5em'; 
        warning.style.fontWeight = 700; 
        warning.style.position = 'fixed'; 
        warning.style.left = `${(window.innerWidth/2)}px`; 
        warning.style.top =`${ window.innerHeight /2}px`; 
        warning.style.zIndex = 9999; 
        document.body.appendChild(warning); 
    } 
 
    function exactRvg () { 
        cornify_add(); 
 
            window.setTimeout(()=> { 
                exactRvg(); 
            }, 500); 
 
    } 
    if (isMatch ) { 
        showWarning(); 
        $.getScript('https://www.cornify.com/js/cornify.js',function(){ 
            exactRvg(); 
        }); 
    } 
 
})(); 
