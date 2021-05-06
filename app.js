const express = require('express');
const app = express();


app.use("/", (req, res, next) => {
    res.render("<h3>App started succesfully</h3>")
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("app started on port", process.env.PORT)
})