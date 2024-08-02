// interface Entry {
//   title: string;
//   event: string;
// }
var $table = document.querySelector('tbody');
var $addNewEventButton = document.querySelector('#add-new-event');
var $modalInput = document.querySelector('.modal-container');
var $cancelBtn = document.querySelector('#cancel-button');
var $confirmBtn = document.querySelector('#confirm-button');
// If not found, throw error
if (!$addNewEventButton)
    throw new Error('$addNewEventButton did not query exist!');
// Modal section
// show
$addNewEventButton.addEventListener('click', function () {
    $modalInput === null || $modalInput === void 0 ? void 0 : $modalInput.showModal();
});
// if user cancels, close modal
$cancelBtn.addEventListener('click', function () {
    $modalInput === null || $modalInput === void 0 ? void 0 : $modalInput.close();
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
