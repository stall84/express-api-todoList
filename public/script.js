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
    
    setTimeout(axios.get('/api/todos') 
        .then(response => {
            console.log(response.data);
            // create/define the array that will store the response array of objects from the servers' global todo variable
            var todosArray = response.data;
            const fullTodoDisplay = document.getElementById('full-todo-content');
            // finally assign the inner html of the 'grabbed' full-todo form to the render function taking the todos array as argument/input
            fullTodoDisplay.innerHTML = renderTodos(todosArray);
        
        }).catch(e => console.log(`Error occurred: ${e}`))
        , 1000);
};

    // this render function will take the input argument of the response array from the axios get call directly above
    // the response array/object returned in the get call above is the full todos array being returned from the server
    // after being updated with the new todo made in the POST request further above
function renderTodos (todos) {
    // Create an 'output array' to hold each individually rendered todo coming in from the global todo array on the server
    var outputArray = [];
    // Using a for-loop for simplicity, could have used an array method. Will iterate through each individual array object contained in the todo array from server
    // and will render it in html, then it will push that html template-literal into the output array
    for (let i = 0; i < todos.length; i++) {
        let currTodo = todos[i];
        let todosHTML = `
            <tr class="todoRow">
                <th scope="row">${currTodo.time}</th>
                <td>${currTodo.todo}</td>
            </tr>
        `
        outputArray.push(todosHTML);
    }
    // must return the joined output array to yield the value of the function. joining removes the commas otherwise present in objects
    return outputArray.join('');

};

var doneTodos = document.querySelectorAll('todoRow');

function completeTodo () {
    console.log(`These are the listed todos: ${doneTodos}`);
}

completeTodo();