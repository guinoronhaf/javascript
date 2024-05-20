const body = document.body;

const estiloTopo = 
    "display: flex;"+
    "justify-content: space-between;"+
    "align-items: center;"+
    "background-color: #eee;";

const topo = document.createElement('div');
topo.setAttribute('id', 'topo');
topo.setAttribute('style', estiloTopo);

body.prepend(topo); // append anexa no final; prepend anexa no começo.

const esitloLogo =
    "width: 50px;"
const logo = 
    "<div id='logo' class='logo'>"+
        "<img src='vasco.png' title='VascoDaGama' style='"+esitloLogo+"'/>"+
    "</div>";
topo.innerHTML += logo;

const login = 
    "<div id='login' class='login'>"+
        "<p id='matricula'>Matrícula:<span></span></p>"+
        "<p id='nome'>Nome:<span></span></p>"+
    "</div>";
topo.innerHTML += login;
