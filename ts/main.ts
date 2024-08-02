// interface Entry {
//   title: string;
//   event: string;
// }

const $table = document.querySelector('tbody');
const $addNewEventButton = document.querySelector('#add-new-event');
const $modalInput = document.querySelector('.modal-container') as HTMLDialogElement;
const $cancelBtn = document.querySelector('#cancel-button');
const $confirmBtn = document.querySelector('#confirm-button');

// If not found, throw error
if (!$addNewEventButton) throw new Error('$addNewEventButton did not query exist!');

// Modal section
// show
$addNewEventButton.addEventListener('click', () => {
  $modalInput?.showModal();
});

// if user cancels, close modal
$cancelBtn.addEventListener('click', () => {
  $modalInput?.close();
});


document.addEventListener('DOMContentLoaded', () => {
  if (!$table) throw new Error('$tbody did not query!');

  // create ten blank rows
  for (let i = 0; i < 10; i++) {
    const $defaultTable = renderBlankTable();
    $table.appendChild($defaultTable);
  }
});

function renderBlankTable(): HTMLTableRowElement {
  const $tableRow = document.createElement('tr');

  for (let i = 0; i < 3; i++) {
    const $tableData = document.createElement('td');
    $tableRow.appendChild($tableData);
  }

  return $tableRow;
}
