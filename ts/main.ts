interface EntryForm extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  dayOfWeek: HTMLSelectElement;
  eventInfo: HTMLTextAreaElement;
}

interface Entry {
  title: string;
  dayOfWeek: string;
  eventInfo: string;
}

const $tbody = document.querySelector('tbody');
const $entryForm = document.querySelector('.form-container') as HTMLFormElement;
const $addNewEventButton = document.querySelector('#add-new-event');
const $modalInput = document.querySelector('.modal-container') as HTMLDialogElement;
const $cancelBtn = document.querySelector('#cancel-button');
const $confirmBtn = document.querySelector('#confirm-button');

// If not found, throw error
if (!$entryForm) throw new Error('$entryForm did not query exist!');
if (!$addNewEventButton) throw new Error('$addNewEventButton did not query exist!');
if (!$cancelBtn) throw new Error('$cancelBtn did not query exist!');
if (!$confirmBtn) throw new Error('$confirmBtn did not query exist!');


$entryForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $entryElements = $entryForm.elements as EntryForm;

  // store the form's input values in a new object
  const entryData: Entry = {
    title: $entryElements.title.value,
    dayOfWeek: $entryElements.dayOfWeek.value,
    eventInfo: $entryElements.eventInfo.value,
    // Identify different entries
    
  }
});


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
  if (!$tbody) throw new Error('$tbody did not query!');

  // create ten blank rows
  for (let i = 0; i < 10; i++) {
    const $defaultTable = renderBlankTable();
    $tbody.appendChild($defaultTable);
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
