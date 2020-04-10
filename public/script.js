// JS for index.html

document.getElementById('submit').addEventListener("click", submit());

function submit () {
    axios.post('/api/todos')
       .then(function(response) {
    console.log('where to go from here');
})
};