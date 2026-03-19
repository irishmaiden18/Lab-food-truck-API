// set up project
// npm init -y
// npm i express

// import the express module
const express = require("express")

// create an express application
const app = express()

// import food truck data
const foodTrucks = require("./data/foodTrucks")

// set up an array with all the foodtrucks regardless of region
let allFoodTrucks = [...foodTrucks.downtown, ...foodTrucks.midtown, ...foodTrucks.uptown]

// set up GET routes for our express server

// URL ending in "/"
app.get("/", (req, res) => {
    console.log("Reached All foodTrucks Route!")

    res.json ({
        message: "success",
        payload: foodTrucks
    })
})

// URL ending in "/downtown"
app.get("/downtown", (req, res) => {
    console.log("Reached downtown foodTrucks Route!")

    res.json ({
        message: "success",
        payload: foodTrucks.downtown
    })
})

// URL ending in "/midtown"
app.get("/midtown", (req, res) => {
    console.log("Reached midtown foodTrucks Route!")

    res.json ({
        message: "success",
        payload: foodTrucks.midtown
    })
})

// URL ending in "/uptown"
app.get("/uptown", (req, res) => {
    console.log("Reached uptown foodTrucks Route!")

    res.json ({
        message: "success",
        payload: foodTrucks.uptown
    })
})

// URL ending in "/open"
app.get("/open", (req, res) => {
    console.log("Reached open foodTrucks Route!")

    const results = allFoodTrucks.filter((foodTruck) => {
        return foodTruck.open === true
    })

    res.json ({
        message: "success",
        payload: results
    })
})

// URL ending in "/closed"
app.get("/closed", (req, res) => {
    console.log("Reached closed foodTrucks Route!")

    const results = allFoodTrucks.filter((foodTruck) => {
        return foodTruck.open === false
    })

    res.json ({
        message: "success",
        payload: results
    })
})

// URL ending in "/pizza"

// URL ending in "/vegetarian"

//URL ending in "/tacos"

// URL ending in "/italianOpen"

// Any other Route

// set the port
const PORT = 3000

// set the app to begin listening using our port
app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`)
})