const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send({
        name: "sergio hg homez",
        age: 23,
        message: "hello world, my name is sergio and I'm a web developer"
    })

})

app.get("/vehicles",(req, res) => {
    res.send(
        [{
            name: "ninja 650 krt edition",
            model_type: "updated 2023",
            category: "sport",
            family: "ninja",
            type: "motorcycle",
            price_info: "MSRP NON-ABS: $8,199 / MSRP ABS: $8,599",
            image: 'https://i.postimg.cc/L5jtm3Zv/card-kawasaki-zx6r.png'
        }, {
            name: "ninja 400",
            model_type: "updated 2023",
            category: "sport",
            family: "ninja",
            type: "motorcycle",
            price_info: "MSRP NON-ABS: $4,199 / MSRP ABS: $4,599",
            image: 'https://i.postimg.cc/L5jtm3Zv/card-kawasaki-zx6r.png'
        }]
    )
})

module.exports = app;