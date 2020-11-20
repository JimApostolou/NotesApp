class Notes {

    constructor(titleNote,textNote) {
        this.titleNote = titleNote.value;
        this.textNote = textNote.value;
    }

    createDiv() {
        //Creates the div
        const divNote = document.createElement('div');
        divNote.classList.add('note-taken');
        //Adds a h3 tag 
        const titleTag = document.createElement('h3');
        titleTag.innerText = this.titleNote.toUpperCase();
        titleTag.classList.add('title-of-note');
        divNote.appendChild(titleTag);
        //Adds a p tag
        const contentArea = document.createElement('p');
        contentArea.innerText = this.textNote;
        contentArea.classList.add('p-of-note');
        divNote.appendChild(contentArea);
        //Adds the detail button
        const detailButton = document.createElement('button');
        detailButton.innerText = "View Details";
        detailButton.onclick = function() {
            alert(`${titleTag.innerText}\n\n${contentArea.innerText}`)
        };
        detailButton.classList.add('detail-btn');
        divNote.appendChild(detailButton);
        //Puts everything on the "parent" Div
        notesTaken.appendChild(divNote);
    }

}

const inputTitle = document.getElementById('title-input');
const inputNote = document.getElementById('content-textarea');
const addButton = document.getElementById('submit-btn');
const notesTaken = document.getElementById('notes-added');

addButton.addEventListener('click', () => {
    const notes = new Notes(inputTitle,inputNote);
    notes.createDiv();
});