// interface Entry {
//   title: string;
//   event: string;
// }

const $table = document.querySelector('tbody');
const $modalInput = document.querySelector('.modal-container') as HTMLDialogElement;
const $addNewEventButton = document.querySelector('#add-new-event');

// Modal section
$addNewEventButton.addEventListener('click', () => {
  $modalInput.showModal();
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
