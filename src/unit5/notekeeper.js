const saveButton = document.querySelector("#saveBtn");
const clearButton = document.querySelector("#clearBtn");
const noteInput = document.querySelector("#noteInput");

window.addEventListener("load", () => {
    let savedNote = localStorage.getItem('note');

    if (savedNote) {
        noteInput.value = savedNote;
    }
})

saveButton.addEventListener("click", () => {
    let note = noteInput.value;
    localStorage.setItem('note', note);
    alert("Note Saved");
})

clearButton.addEventListener("click", () => {
    noteInput.value = "";
    localStorage.removeItem('note');
    alert("Note Cleared");
})