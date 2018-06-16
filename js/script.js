const notesForm = document.querySelector('.note-form');
const notesArea = document.querySelector('.notes');
const notes = JSON.parse(localStorage.getItem('notes')) || [];

function addNote(e){
    e.preventDefault();
    const note = (this.querySelector('[name=new-note]')).value;
    notes.push(note);
    populateList(notes, notesArea);
    window.localStorage.setItem('notes', JSON.stringify(notes));
    this.reset();
}

function addNoteToList(text, i){
    return `<li key="${i}">${text}</li>`;
}

function populateList(notes = [], notesList){
    notesList.innerHTML = notes.map((note, i) => addNoteToList(note,i)).join('');
}

notesForm.addEventListener('submit', addNote);
populateList(notes, notesArea);
