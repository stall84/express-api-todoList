
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const PORT = process.env.PORT || 3000;

// Our main (global) array (of objects) that we will be pushing new todo requests into
var todoList = [];

// Listen/Setup Route
app.listen(PORT, () => {
    console.log(`todos-api is listening on port: ${PORT}`);
});

// 'expose' the public folder
app.use(express.static(__dirname + '/public'));

// GET /api/todos
app.get('/api/todos', (req,res) => {
    setTimeout(( () => {res.send(todoList)}),200);
});

// GET /api/todos/:id
// this route is intended to check if id exists and then return it in response to client
app.get('/api/todos/:time', (req,res) => {
    let time = parseInt(req.params.time);
    let foundTime = todoList.find((item) => {
        return item.time === time;
    })
    if (!foundTime) {
        res.status(404).send('The todo with the specified TIME was not found (404) Make sure to use exact, 4-digit 24-hr time ex: 1005 for 10:05AM');
    };
    res.send(foundTime);
});

// POST /api/todos
// This route intended to post new todo body to the global array at top (todoList) 
app.post('/api/todos', (req,res,next) => {
    console.log(`Got a POST request on PORT: ${PORT}`);
    // implement logic to check if the time the user is entering already exists in global todos. if it conflicts, 404 returned
   let currTime = req.body.time;
   let presTime = todoList.find((ele) => {
       return ele.time === currTime;
   })
   if (presTime) {
       res.status(404).send('The specified time already has a to-do associated with it, please make the to-do earlier or later than what was specified');
       return;
   };
   // otherwise new todo is created and then pushed into array
   let newToDo = {
    time: req.body.time,
    todo: req.body.todo
   } 
    todoList.push(newToDo);
    res.send(newToDo);
});

// PUT /api/todos/:id
app.put('/api/todos/:time', (req,res) => {
    console.log(`Got a PUT request on PORT: ${PORT}`);
    // logic to find specified todo by it's parameter id
    // same logic as above GET route
    let time = parseInt(req.params.time);
    let foundTime = todoList.find((item) => {
        return item.time === time;
    })
    if (!foundTime) {
        res.status(404).send('The todo with the specified TIME was not found (404) Make sure to use exact, 4-digit 24-hr time ex: 1005 for 10:05AM');
    };
    foundTime.todo = req.body.todo;
    res.send(foundTime);
});

app.delete('/api/todos/:time', (req,res) => {
    // same thing as above, we need to find if the specified ID exists, if not, send 404. copy/paste code
    console.log(`Got a DELETE request on PORT: ${PORT}`);
    let time = parseInt(req.params.time);
    let foundTime = todoList.find((item) => {
        return item.time === time;
    })
    if (!foundTime) {
        res.status(404).send('The todo with the specified TIME was not found (404) Make sure to use exact, 4-digit 24-hr time ex: 1005 for 10:05AM');
    };
    // using indexOf method on todoList array to find/store the array index # of occurence of the found ID
    let index = todoList.indexOf(foundTime);
    // using splice method on array to remove the index (to delete the post)
    todoList.splice(index, 1);
    // return the deleted course to client
    res.send(`Successfully Deleted ToDo: ${JSON.stringify(foundTime)}`);
});



