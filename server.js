const express = require('express')
const app = express();

const employees = ['moe', 'larry', 'curly', 'lucy', 'ethyl']

app.get('/', (req, res, next) => {
    res.send(`
        <html>
            <head>
            <style>
                body {
                    font-family: Verdana;
                    color: cornsilk;
                    background-color: dodgerblue;
                }
                li {
                    color: tomato;
                }
            </style>
                <title>Express Demo</title>
            </head>
            <body>
                <h1>Hello World</h1>
                <ul>
                    ${employees.map((emp, idx) => { // CREATES A LI for each employee in arr with a link to /details/ page...
                        return `
                        <li>
                            <a href='/details/${idx}'>${emp} 
                        </li>`
                    }).join('')}
                </ul>
            </body>
        </html>
    `)
});

app.get('/details/:foo', (req, res) => {
    const employee = employees[req.params.foo] // uses req.params.foo as employee index!
    res.send(`
    <html>
        <head>
            <title>Details</title>
        </head>
        <body>
            <a href='/'>All Employees</a>
            <h1>Details for ${employee}</h1>
        </body>
    </html>
    `)
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`))