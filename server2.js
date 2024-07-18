// const express = require('express');
// const app = express();
// const port = 3500;

// // Example middleware function
// const middlewareExample = (req, res, next) => {
//     // Code to run before executing the route handler
//     console.log('Middleware executing before route handler');
    
//     // Modify request or perform checks
//     if (req.method === 'POST') {
//         console.log('POST request intercepted');
//     } else {
//         console.log('Non-POST request intercepted');
//     }
    
//     // Continue to the next middleware or route handler
//     next();
// };

// // Applying middleware globally to all routes
// app.use(middlewareExample);

// // Route with a route handler
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });







// const express = require('express');
// const app = express();
// const port = 3000;

// // Route with a route handler
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// // Example middleware function
// const middlewareExample = (req, res, next) => {
//     console.log('Middleware executing after route handler');
//     next();
// };

// // Applying middleware after defining the route handler
// app.use(middlewareExample);

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });





// const express = require('express');
// const app = express();
// const port = 3000;

// // Example middleware for authentication
// const authenticate = (req, res, next) => {
//     // Simulating authentication logic (you would typically check session, token, etc.)
//     const isAuthenticated = false; // Assume authenticated for demonstration
    
//     if (isAuthenticated) {
//         // If authenticated, proceed to the next middleware or route handler
//         next();
//     } else {
//         // If not authenticated, send a 401 Unauthorized status
//         res.status(401).send('Unauthorized');
//     }
// };

// // Middleware for unprotected route (no authentication required)
// const middlewareUnprotected = (req, res, next) => {
//     console.log('Middleware for unprotected route');
//     next();
// };

// // Middleware for protected route (authentication required)
// const middlewareProtected = [authenticate, (req, res, next) => {
//     console.log('Middleware for protected route');
//     next();
// }];

// // Unprotected route
// app.get('/public', middlewareUnprotected, (req, res) => {
//     res.send('This is a public route');
// });

// // Protected route
// app.get('/private', middlewareProtected, (req, res) => {
//     res.send('This is a private route');
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


//status 
//100-199 Information
//200-299 Successful
//300-399 Redirection Message
//400-499 Client Error
//500-599 Server error

//204 No content
//404 not found
//302 redirection temp
// 301 redirection permanent



const express = require('express');
const app = express();

// Middleware to parse JSON payloads
app.use(express.json());

// Sample in-memory data store for to-do tasks
let tasks = [];

// Route to get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Route to add a new task
app.post('/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).json(task);
});

// Route to delete a task by id
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    tasks = tasks.filter(task => task.id !== taskId);
    res.status(204).send();
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

