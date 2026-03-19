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

    // prints on the server side when the client accesses the route
    console.log("Reached All foodTrucks Route!")

    // send the entire foodTruck object to the user
    res.json ({
        message: "success",
        payload: foodTrucks
    })
})

// URL ending in "/downtown"
app.get("/downtown", (req, res) => {

    // prints on the server side when the client accesses the route
    console.log("Reached downtown foodTrucks Route!")

    // send only the downtown part of the foodTruck object to the user
    res.json ({
        message: "success",
        payload: foodTrucks.downtown
    })
})

// URL ending in "/midtown"
app.get("/midtown", (req, res) => {

    // prints on the server side when the client accesses the route
    console.log("Reached midtown foodTrucks Route!")

    // send only the midtown part of the foodTruck object to the user
    res.json ({
        message: "success",
        payload: foodTrucks.midtown
    })
})

// URL ending in "/uptown"
app.get("/uptown", (req, res) => {

    // prints on the server side when the client accesses the route
    console.log("Reached uptown foodTrucks Route!")

    // send only the uptown part of the foodTruck object to the user
    res.json ({
        message: "success",
        payload: foodTrucks.uptown
    })
})

// URL ending in "/open"
app.get("/open", (req, res) => {

    // prints on the server side when the client accesses the route
    console.log("Reached open foodTrucks Route!")

    // create a results array and populate it with only the foodTrucks that have an open property "true"
    const results = allFoodTrucks.filter((foodTruck) => {
        return foodTruck.open === true
    })

    // send only the filtered results array to the user
    res.json ({
        message: "success",
        payload: results
    })
})

// URL ending in "/closed"
app.get("/closed", (req, res) => {

    // prints on the server side when the client accesses the route
    console.log("Reached closed foodTrucks Route!")

    // create a results array and populate it with only the foodTrucks that have an open property "false"
    const results = allFoodTrucks.filter((foodTruck) => {
        return foodTruck.open === false
    })

    // send only the filtered results array to the user
    res.json ({
        message: "success",
        payload: results
    })
})

// URL ending in "/pizza"
app.get("/pizza", (req, res) => {

    // prints on the server side when the client accesses the route
    console.log("Reached pizza foodTrucks Route!")

    // create a results array and populate it with only the foodTrucks that have pizza in the cuisine property
    const results = allFoodTrucks.filter((foodTruck) => {
        return foodTruck.cuisine.includes("pizza")
    })

    // send only the filtered results array to the user
    res.json ({
        message: "success",
        payload: results
    })
})

// URL ending in "/vegetarian"
app.get("/vegetarian", (req, res) => {

    // prints on the server side when the client acesses the route
    console.log("Reached vegetarian foodTrucks Route!")

    // create a results array and populate it with only the foodTrucks that have vegetarian in the cuisine property
    const results = allFoodTrucks.filter((foodTruck) => {
        return foodTruck.cuisine.includes("vegetarian")
    })

    // send only the filtered results array to the user
    res.json ({
        message: "success",
        payload: results
    })
})

//URL ending in "/tacos"
app.get("/tacos", (req, res) => {

    // prints on the server side when the client acesses the route
    console.log("Reached taco foodTrucks Route!")

    // create a results array and populate it with only the foodTrucks that have tacos in the cuisine property
    const results = allFoodTrucks.filter((foodTruck) => {
        return foodTruck.cuisine.includes("tacos")
    })

    // send only the filtered results array to the user
    res.json ({
        message: "success",
        payload: results
    })
})

// URL ending in "/italianOpen"
app.get("/italianOpen", (req, res) => {
    
    // prints on the server side when the client accesses the route
    console.log("Reached Italian Open foodTrucks Route!")

    // create a results array and populate it with only the foodTrucks that have italian in the cuisine property and have an open property of "true"
    const results = allFoodTrucks.filter((foodTruck) => {
        return (foodTruck.cuisine.includes("italian") && foodTruck.open === true)
    })

    // send only the filtered results array to the user
    res.json ({
        message: "success",
        payload: results
    })
})

// Any other Route

// set the port
const PORT = 3000

// set the app to begin listening using our port
app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`)
})