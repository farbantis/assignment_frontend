const notesContainer = document.querySelector('#content');
const form = document.getElementById('form');
const submit = document.getElementById('submit');

// listening for changes in "completed" checkbox
document.addEventListener('change', function (e) {
    if (e.target.className === "check_box") {
        let obj = e.target.closest('.todo')
        const objToChange = {
            id: obj.dataset.id,
            title: obj.querySelector('.title').innerText,
            body: obj.querySelector('.body').innerText,
            completed: e.target.checked
        }
        const amendedToDo = changeElement(objToChange)
        // changing background color if to_do was modified
        if (amendedToDo && objToChange.completed) {obj.style.cssText =`background-color: green;`}
        else {obj.style.cssText =`background-color: white;`}
    }
})

// listening for changes on "detele" buttons
document.addEventListener('click', function (e) {
    if (e.target.className === "delete") {
        let blockToDel = e.target.parentElement
        let elementToDelId = e.target.parentElement.dataset.id
        if (delElement(elementToDelId)) {
            blockToDel.remove()
        }
    }
})

// listening for form submit
form.addEventListener('submit', function (e) {
    e.preventDefault()
    let formObject = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        completed: form.elements.completed.checked
    }
    // для проверки в форме проще всего написать required
    addNote(formObject)
})

// test functon
async function modifyElement(urlEnd, bodyContent, methodType) {
    const response = await fetch(`http://localhost:8080/todo/${urlEnd}`, {
        method: methodType,
        headers: {'Content-type': 'application/json'},
        body: bodyContent ? JSON.stringify(bodyContent) : ''
    })
    const data = await response.json()
    if (!response.ok) {
        errorHandling(response.status, data.message)
    }
    else {return data}
}
// end of test function

async function changeElement(objToChange) {
    const response = await fetch(`http://localhost:8080/todo/${objToChange.id}`, {
        method: 'PATCH',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(objToChange)
    })
    const data = await response.json()
    if (!response.ok) {
        errorHandling(response.status, data.message)
    }
    else {return data}

}

async function delElement(elementToDel) {
    const response = await fetch(`http://localhost:8080/todo/${elementToDel}`, {
        method: 'DELETE',
        body: '',
        headers: {
            'Content-type': 'application/json'
        },
    })
    let data = await response.json()
    if (!response.ok) {
        errorHandling(response.status, data.message)
    }
    else {
        return data
    }
}

async function addNote(formObject) {
    const response = await fetch(`http://localhost:8080/todo/`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(formObject)
    })
    let newNote = await response.json()
    if (!response.ok) {
        errorHandling(response.status, newNote.message)
    }
    else {refreshNotes(newNote)}
}

function errorHandling(status, message) {
    alert(`${status} error has occurred! Server says: ${message}`)
}

function refreshNotes(newNote) {
    let id = newNote.id
    let title = newNote.title
    let body = newNote.body
    let completed = newNote.completed ? 'checked' : ''
    let messageBlock = `
<div class="todo" data-id=${id}>
    <h2 class="title">
        ${title}
    </h2>
    <div class="body">
         ${body}
    </div>
    <div class="completed">
        <label>Is completed
            <input class="check_box" type="checkbox" ${completed}>
        </label>
    </div>
    <button class="delete">X</button>
</div>
    `
    notesContainer.insertAdjacentHTML("afterbegin", messageBlock);
    notesContainer.firstElementChild.tabIndex=1
    notesContainer.firstElementChild.focus()
    if (completed) {
        notesContainer.firstElementChild.style.cssText=`
        background-color: green;`
    }
}
