// JS for index.html

document.getElementById('todoForm').addEventListener("submit", submit);

function submit (event) {
    event.preventDefault();
    console.log(event);
    let time = event.target.elements.inputTime.value
    let todo = event.target.elements.inputTodo.value
    const todoObject = {time,todo}


    axios.post('/api/todos', todoObject)
        .then(response => {
            console.log(response.data)
            const currTodoDisplay = document.getElementById('curr-todo-content');
            currTodoDisplay.innerHTML = `
            <tr>
                <th scope="row">${response.data.time}</th>
                <td>${response.data.todo}</td>
            </tr>
            `
        
            // Create a render function to add the todo to the DOM

        }).catch(e => console.log(`Error occured: ${e}`));
    
    axios.get('/api/todos') 
        .then(response => {
            console.log(response.data);
            //var todosArray = response.data;
            //const fullTodoDisplay = document.getElementById('full-todo-content');
        
        }).catch(e => console.log(`Error occurred: ${e}`));
};

