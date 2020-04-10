// JS for index.html

document.getElementById('todoForm').addEventListener("submit", submit);

function submit (event) {
    event.preventDefault();
    console.log(event);
    let time = event.target.elements.inputTime.value
    let todo = event.target.elements.inputTodo.value
    const todoObject = {time,todo}

    fetch('/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todoObject)
    }).then(response => response.json()).then((data) =>{
        console.log(data)
        const todoDisplay = document.getElementById('todo-content');
        todoDisplay.innerHTML = `
        <tr>
            <th scope="row">${data.time}</th>
            <td>${data.todo}</td>
        </tr>
        `
       
        // Create a render function to add the todo to the DOM

    }).catch(e => console.log(`Error is ${e}`))
    
}

// function to render the individual single todo that's entered and returns
function renderToDo () {

}