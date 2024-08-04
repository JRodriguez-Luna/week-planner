var $tbody = document.querySelector('tbody');
var $entryForm = document.querySelector('.form-container');
var $addNewEventButton = document.querySelector('#add-new-event');
var $modalInput = document.querySelector('.modal-container');
var $cancelBtn = document.querySelector('#cancel-button');
var $confirmBtn = document.querySelector('#confirm-button');
// If not found, throw error
if (!$entryForm)
    throw new Error('$entryForm did not query exist!');
if (!$addNewEventButton)
    throw new Error('$addNewEventButton did not query exist!');
if (!$cancelBtn)
    throw new Error('$cancelBtn did not query exist!');
if (!$confirmBtn)
    throw new Error('$confirmBtn did not query exist!');
$entryForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var $entryElements = $entryForm.elements;
    // store the form's input values in a new object
    var entryData = {
        title: $entryElements.title.value,
        dayOfWeek: $entryElements.dayOfWeek.value,
        eventInfo: $entryElements.eventInfo.value,
        // Identify different entries
    };
});
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
    if (!$tbody)
        throw new Error('$tbody did not query!');
    // create ten blank rows
    for (var i = 0; i < 10; i++) {
        var $defaultTable = renderBlankTable();
        $tbody.appendChild($defaultTable);
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
