import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap } from 'rxjs/operators';

const showDataButton = document.getElementById('showDataButton');
const deleteButton = document.getElementById('deleteButton');

fromEvent(showDataButton, 'click').pipe(
  switchMap(() => ajax.getJSON('pharmacy.json')),
  map(response => response.priceList) 
).subscribe(data => {
  var pageHTML = "<div id='about'><h3>Price List</h3><table id='Prices'></table></div>";
  document.getElementById('IPage').innerHTML = pageHTML;
  displayItems(data, 'Prices');
});


fromEvent(deleteButton, 'click').subscribe(() => {
  var pricesTable = document.getElementById('Prices');
  const lastRow = pricesTable.rows[pricesTable.rows.length - 1];
  if (lastRow) {
    pricesTable.deleteRow(lastRow.rowIndex);
  }
  }
);

function displayItems(items, tableId) {
  var table = $('#' + tableId);
  $.each(items, function (index, item) {
    var row = '<tr><td>' + item.name + '</td><td>' +  item.price + '</td></tr>';
    table.append(row);
  });
}
