# Express-LAB-Assignment-1

## Goals
- Create a server using the Express module  
- Create an API that serves data based on the URL request  
- Practice sending JSON responses  

---

## Food Truck Locator API 

You are now an intern for the **NYC Food Truck Association**! Tourists and office workers constantly ask where food trucks are located and what kind of food they serve. The association wants a simple API that responds with food truck data based on the URL.

For this assignment, you will work with the following data:

```js
const foodTrucks = {
  downtown: [
    {
      name: "Big Apple Burgers",
      cuisine: ["burgers", "fries"],
      open: true
    },
    {
      name: "Taco Loco",
      cuisine: ["mexican", "tacos"],
      open: false
    },
    {
      name: "Curry in a Hurry",
      cuisine: ["indian"],
      open: true
    },
    {
      name: "Bao Down",
      cuisine: ["chinese", "dumplings"],
      open: true
    },
    {
      name: "Green Garden",
      cuisine: ["vegetarian", "vegan"],
      open: false
    }
  ],

  midtown: [
    {
      name: "Slice City",
      cuisine: ["pizza"],
      open: true
    },
    {
      name: "Wok This Way",
      cuisine: ["chinese", "noodles"],
      open: true
    },
    {
      name: "Falafel King",
      cuisine: ["middle eastern", "vegetarian"],
      open: false
    },
    {
      name: "El Toro Rojo",
      cuisine: ["mexican", "tacos"],
      open: true
    },
    {
      name: "Pasta Express",
      cuisine: ["italian", "pasta"],
      open: false
    }
  ],

  uptown: [
    {
      name: "Northern BBQ",
      cuisine: ["bbq", "burgers"],
      open: true
    },
    {
      name: "Rolling Sushi",
      cuisine: ["japanese", "sushi"],
      open: true
    },
    {
      name: "Veggie Wheels",
      cuisine: ["vegetarian", "vegan"],
      open: true
    }
  ]
};

```

## API Requirements
- DONE-- If the URL ends in /, send back the entire foodTrucks object
- DONE-- If the URL ends in /downtown, send back only the downtown food trucks
- DONE-- If the URL ends in /midtown, send back only the midtown food trucks
- DONE-- If the URL ends in /uptown, send back only the uptown food trucks
- DONE-- If the URL ends in /open, return only food trucks where open is true
- DONE-- If the URL ends in /closed, return only food trucks where open is false
- DONE-- If the URL ends in /pizza, return only trucks that serve "pizza"
- DONE-- If the URL ends in /vegetarian, return only trucks that serve "vegetarian"
- DONE-- If the URL ends in /tacos, return only trucks that serve "tacos"
- DONE-- If the URL ends in /italianOpen, return only trucks that serve "italian" and are open
- DONE-- If the URL ends in anything else, respond with a failure message.