const notesContainer = document.querySelector('#content');
const form = document.getElementById('form');
const submit = document.getElementById('submit');

document.addEventListener('change', function (e) {
    if (e.target.className === "check_box") {
        let obj = e.target.closest('.todo')
        const objToChange = {
            id: obj.dataset.id,
            title: obj.querySelector('.title').innerText,
            body: obj.querySelector('.body').innerText,
            completed: e.target.checked
        }
        const promise = modifyElement(objToChange, 'PATCH', objToChange.id)
        promise.then((data) => {
            obj.dataset.id = data.id
            obj.querySelector('.title').innerText = data.title
            obj.querySelector('.body').innerText = data.body
            e.target.checked = data.completed
            if (e.target.checked) obj.style.cssText =`background-color: green;`
            else obj.style.cssText =`background-color: white;`
        });
    }
})

document.addEventListener('click', function (e) {
    if (e.target.className === "delete") {
        let blockToDel = e.target.parentElement
        let elementToDelId = e.target.parentElement.dataset.id
        const promise = modifyElement('', 'DELETE', elementToDelId)
        promise.then((data) => blockToDel.remove());
    }
})

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let bodyContent = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        completed: form.elements.completed.checked
    }
    const promise = modifyElement(bodyContent, 'POST', '')
    promise.then((data) => refreshNotes(data));
})

// adds, deletes, and modifies the to_do
async function modifyElement(bodyContent, methodType, urlEnd) {
    const response = await fetch(`http://localhost:8080/todo/${urlEnd}`, {
        method: methodType,
        headers: {'Content-type': 'application/json'},
        body: bodyContent ? JSON.stringify(bodyContent) : ''
    })
    let data = await response.json()   // data это объект, если у нас есть .json() !!!!!
    if (!response.ok) errorHandling(response.status, data.message)
    else return data
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




