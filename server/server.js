const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello from the backend side!'));

app.listen(3000, () => console.log('🎉 Running on port 3000...'))