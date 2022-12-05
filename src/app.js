const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors())

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
            name: "ninja zx 6r krt edition",
            model_type: "updated 2023",
            category: "street/track",
            family: "ninja",
            type: "motorcycle",
            price_info: "MSRP NON-ABS: $8,199 / MSRP ABS: $8,599",
            image: 'https://i.postimg.cc/L5jtm3Zv/card-ninja650.png'
        }, {
            name: "ninja 400",
            model_type: "updated 2023",
            category: "street/track",
            family: "ninja",
            type: "motorcycle",
            price_info: "MSRP NON-ABS: $4,199 / MSRP ABS: $4,599",
            image: 'https://i.postimg.cc/JnXBVzQh/card-ninja400.png'
        },{
            name: "ninja zx 10r krt edition",
            model_type: "updated 2023",
            category: "street/track",
            family: "ninja",
            type: "motorcycle",
            price_info: "MSRP NON-ABS: $4,199 / MSRP ABS: $4,599",
            image: 'https://i.postimg.cc/bNpSW8Sz/card-zx10r.png'
        },{
            name: "z400",
            model_type: "updated 2023",
            category: "street/track",
            family: "street",
            type: "motorcycle",
            price_info: "MSRP NON-ABS: $4,199 / MSRP ABS: $4,599",
            image: 'https://i.postimg.cc/NFw2gvNk/card-z400.png'
        },{
            name: "kx 450sr",
            model_type: "2023",
            category: "MOTOCROSS/CROSS-COUNTRY",
            family: "kx",
            type: "motorcycle",
            price_info: "MSRP $12,699",
            image: 'https://i.postimg.cc/YShWR3GY/card-kx450sr.png'
        },{
            name: "kx 250",
            model_type: "updated 2023",
            category: "MOTOCROSS/CROSS-COUNTRY",
            family: "kx",
            type: "motorcycle",
            price_info: "MSRP $4,499",
            image: 'https://i.postimg.cc/0NFJBwD3/card-kx250.png'
        }]
    )
})

module.exports = app;