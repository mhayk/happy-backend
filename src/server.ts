import express from 'express';

import './database/connection'

const app = express();

app.use(express.json())

app.post('/', (req, res) => {
    return res.send(req.body)
})

app.listen(3333);