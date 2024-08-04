var data = readData();
// write data to localStorage
function writeData() {
    var dataJSON = JSON.stringify(data);
    localStorage.setItem('data-storage', dataJSON);
}
// read data from localStorage
function readData() {
    var data = localStorage.getItem('data-storage');
    if (data)
        return JSON.parse(data);
    else {
        return {
            view: 'entry-form',
            entries: [],
            editing: null,
            nextEntryId: 1,
        };
    }
}
