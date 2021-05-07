const express = require('express');
const app = express();


app.get("/", (req, res, next) => {
    res.send(
        `<h3>App started succesfully</h3>
        <p>Hello World!</p>
        <button onclick="alert(new Date())">show Date</button>
        `)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app started on port ${port}`)
})

app.on('error', console.log)