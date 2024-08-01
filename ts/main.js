var $table = document.querySelector('tbody');
var $modalInput = document.querySelector('.modal-container');
var $addNewEventButton = document.querySelector('#add-new-event');
// Modal section
$addNewEventButton.addEventListener('click', function () {
    $modalInput.showModal();
});
document.addEventListener('DOMContentLoaded', function () {
    if (!$table)
        throw new Error('$tbody did not query!');
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
