--+-- Simple todo list API to prove Express methods.

--+-- Version 1.0.0 is a redesigned full-stack implementation of a same-day time/todo web application.  <br>
The user should enter 4 digits for the time, and a string for the todo at that time, then click the blue submit button to send the data to the server and save it.  

--+-- Version 1.0.0 is functioning, but has a number of shortcomings that are in the process of being refined/fixed as of this writing.

--+-- Major known bugs/shortcomings for V1.0.0:  
<br> -->  In order to enter a new todo the time and ToDo fields must be cleared out manually.
<br> -->  In order to display the last-created ToDo, the time and ToDo fields must be cleared empty and then the blue submit button must be clicked (with empty fields) to call a new GET request to load them onto the page.
<br> --> Currently there is no way to 'check-off' or mark a ToDo as completed.
