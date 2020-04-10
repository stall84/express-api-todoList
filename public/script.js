// JS for index.html

document.getElementById('submitButton').addEventListener("click", submit());

function submit () {

let inputTime = document.getElementById('inputTime');
let inputTodo = document.getElementById('inputTodo');
console.log(`Initial constructed data is inputTime: ${inputTime}, inputTodo: ${inputTodo}`);

    axios.post('/api/todos', {
        time: inputTime,
        todo: inputTodo
    })
       .then((response) => {
    console.log(`Success! ${response.data}`);
    },       (error) => {
    console.log(`There was an error in response ${error}`);
});
}