require('dotenv').config()
const express = require('express')
const loader = require('./app/loaders')

async function startServer() {
    const app = express()

    await loader(app)

    // set port, listen for request
    app.listen(process.env.PORT, err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Server is running at PORT: ', process.env.PORT);
    });
}

startServer()
