
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const PORT = process.env.PORT || 4000;

// Our main (global) array (of objects) that we will be pushing new todo requests into
var todoList = [{
    id: 1,
    todo: "Implement a REST API"
}];

// Listen/Setup Route
app.listen(PORT, () => {
    console.log(`todos-api is listening on port: ${PORT}`);
});

// 'expose' the public folder
app.use(express.static('/public'));

// GET /api/todos
app.get('/api/todos', (req,res) => {
    res.send(todoList);
});

// GET /api/todos/:id
// this route is intended to check if id exists and then return it in response to client
app.get('/api/todos/:id', (req,res) => {
    let id = parseInt(req.params.id)
    let foundID = todoList.find((item) => {
        return item.id === id;
    });
    if (!foundID) {
        res.status(404).send('The todo with the specified ID was not found (404)');
    };
    res.send(foundID);
});

// POST /api/todos
// This route intended to post new todo body to the global array at top (todoList) 
app.post('/api/todos', (req,res,next) => {
    console.log('Got a POST request... ')
    // Using reduce method on todoList array to assign a new ID to added objects
    let nextID = todoList.reduce((acc, ele) => {
        if (ele.id > acc) {
            return ele.id;
        } 
        return acc++
    }, 0) + 1
    // this is the new object we're recieiving from the POST request. pushing it onto the todoList array
    let newToDo = {
        id: nextID,
        todo: req.body.todo
    };
    todoList.push(newToDo);
    res.send(newToDo);
})



