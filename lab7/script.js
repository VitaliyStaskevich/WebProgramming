
window.onhashchange=switchToStateFromURLHash;

var SPAState= "";

var scndPageHtml = "<h3> Лекарства: </h3><br>";
scndPageHtml += "<a href=\"https://ru.wikipedia.org/wiki/Парацетамол\">Парацетомол</a><br>";
scndPageHtml += "<a href=\"https://ru.wikipedia.org/wiki/Ибупрофен\">Ибупрофен</a><br>";
scndPageHtml += "<a href=\"https://ru.wikipedia.org/wiki/Ацетилсалициловая_кислота\">Аспирин</a><br>";
scndPageHtml += "<a href=\"https://ru.wikipedia.org/wiki/Омепразол\">Омепразол </a><br>";
scndPageHtml += "<a href=\"https://ru.wikipedia.org/wiki/Левотироксин_натрия\">Левотироксин</a><br>";

function switchToStateFromURLHash() {
    var URLHash=window.location.hash;
    var stateStr=URLHash.substring(1);

    SPAState = stateStr;
    var pageHTML="";

    switch (SPAState) {
      case 'Main':
        pageHTML +="<h3>Это главная страница</h3>";
        pageHTML +="<p>Снизу кнопки для перехода между страницами</p>";         
        break;
      case 'About':
        pageHTML = scndPageHtml;
        break; 
    }
    console.log(scndPageHtml);
    document.getElementById('IPage').innerHTML=pageHTML;
  }


function SwitchToState(newState){
    location.hash = newState;
}

function SwitchToMain(){
    SwitchToState("Main");
}

function SwitchToSecond(){
    SwitchToState("About");
}

switchToStateFromURLHash();
