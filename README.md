--+-- Simple todo list API to prove Express methods.


The user should enter 4 digits for the time, and a string for the todo at that time, then click the blue submit button to send the data to the server and save it.  

--<>-- New Version 1.1.3 Moved setTimeout function from the client-side script.js code to the server-side code and wrapped the GET route in it (set to 200ms). This appears to have fixed the todoList full-rendering problem that was occuring. Removed name from nav-bar logo.

--<>-- Version 1.1.2 Added simple ability to click on the todo rows marking-off that todo as done, changing the color to green.

--<>-- Version 1.1.1! Fixed Bugs: Added setTimeout function to GET request that appears to have fixed the full-todo's rendering problem & eliminating the need to submit an empty form to display the latest/all todo's
<br> 
-- Still in progress for newer versions: creating "completed" function to strke-through completed ToDo's
-- Considering email notification system to alert user at specified time of ToDo.

<><>HISTORY:

--+-- Version 1.0.0 is a redesigned full-stack implementation of a same-day time/todo web application.  <br>

--+-- Version 1.0.0 is functioning, but has a number of shortcomings that are in the process of being refined/fixed as of this writing.

--+-- Major known bugs/shortcomings for V1.0.0:  
<br> -->  In order to enter a new todo the time and ToDo fields must be cleared out manually.
<br> -->  In order to display the last-created ToDo, the time and ToDo fields must be cleared empty and then the blue submit button must be clicked (with empty fields) to call a new GET request to load them onto the page.
<br> --> Currently there is no way to 'check-off' or mark a ToDo as completed.
