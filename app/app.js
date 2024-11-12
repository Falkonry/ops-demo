const express = require('express');
const app = express();
const port = 3000;

// Define a route for "Hello World" view
app.get('/hello', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World</title>
        </head>
        <body>
            <h1>Hello, World!</h1>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port} fdsjhbfbsdbfasnhdkjasd`);
});

