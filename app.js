const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Gio1"}
    const explorer2 = {id: 2, name: "Gio2"}
    const explorer3 = {id: 3, name: "Gio3"}
    const explorer4 = {id: 4, name: "Gio4"}
    const explorers = [explorer1,explorer2,explorer3,explorer4]

    res.status(200).json(explorers)
})