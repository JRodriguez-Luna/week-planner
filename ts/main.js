// interface Entry {
//   title: string;
//   event: string;
// }
var $table = document.querySelector('tbody');
console.log($table);
document.addEventListener('DOMContentLoaded', function () {
  if (!$table) throw new Error('$tbody did not query!');
  // create ten blank rows
  for (var i = 0; i < 10; i++) {
    var $defaultTable = renderBlankTable();
    $table.appendChild($defaultTable);
  }
});
function renderBlankTable() {
  var $tableRow = document.createElement('tr');
  for (var i = 0; i < 3; i++) {
    var $tableData = document.createElement('td');
    $tableRow.appendChild($tableData);
  }
  return $tableRow;
}
