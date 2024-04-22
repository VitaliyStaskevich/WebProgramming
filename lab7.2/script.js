"use strict";
window.onhashchange=switchToStateFromURLHash;

var SPAState= "";

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
       $.ajax({
        url: 'pharmacy.json',
        dataType: 'json',
        success: function (data) {
            pageHTML += "<div id='about'><h3>Price List</h3><table id='Prices'></table></div>";
            document.getElementById('IPage').innerHTML = pageHTML;
            displayItems(data.priceList, 'Prices');
        }
       });
        break; 
    }
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

function displayItems(items, tableId) {
    var table = $('#' + tableId);
    $.each(items, function (index, item) {
        var row = '<tr><td>' + item.name + '</td><td>' +  item.price + '</td></tr>';
        table.append(row);
    });
}
