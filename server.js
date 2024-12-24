console.log("Testing")
// 1. Create a server
// 2. Create a route
// 3. Listen to the server
const express = require("express");
const app = express();

//  1. Create a route to greet the user
app.get("/greetings/:username", (req,res) =>{
    res.send(`Hello there, ${req.params.username}!`);
    console.log(req.params);
});

// 2. Create a route to roll a die
app.get("/roll/:number", (req,res) =>{
    if(req.params.number >= 0 && req.params.number <= 20){
        res.send(`You rolled a ${req.params.number}!`);
    }else{
        res.send(`You must specify a number between 0 and 20.`);
    }
});

// 3. Path Parameters

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get("/collectibles/:index", (req,res) =>{
    console.log(req.params)
    if(req.params.index){
        let foundCollectible = collectibles.find((oneCollectible) => {
            return oneCollectible[req.params.index] == req.params.index
        })
        res.send(`${collectibles[req.params.index].name} costs ${collectibles[req.params.index].price}`);
    }else{
        res.send(`This item is not yet in stock. Check back soon!`);
    }
});

// 4. Query Parameters
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get("/shoes", (req,res) =>{
   if(req.query.minPrice){
    let foundShoes = shoes.filter((oneShoe) => {
        return oneShoe.price >= req.query.minPrice
    })
    res.send(foundShoes);
   }else if(req.query.maxPrice){
    let foundShoes = shoes.filter((oneShoe) => {
        return oneShoe.price <= req.query.maxPrice
    })
    res.send(foundShoes);
   }else if(req.query.type){
    res.send(shoes)
    console.log(shoes)
   }else {
    res.send("out of stock");
   }
});

// Listen to the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});