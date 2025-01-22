const express = require("express");
const mongoose = require("mongoose");
const app = express() ; // now we craete the web servr to make intialistions 

app.get( "/hello", (req , res )=>{

    res.send("hello");
})

// Make sure to replace <YourPassword> with the actual password
const uri = "mongodb+srv://FirstViteApp:abbas123@cluster0.ihz6n.mongodb.net/?retryWrites=true&w=majority";


// Using async/await or the correct `.then()` and `.catch()` syntax
mongoose.connect(uri)
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch((err) => {
        console.log("Error connecting to the database: ", err);
    });



app.get( "/test", (req , res )=>{

    res.send("Welcome home");
})

app.delete("/delete",(req,res)=>{
    res.send("deleting")
})

app.get("/findSum/:num1/:num2", (req,res)=> {
    const num1 = req.params.num1 ;
    const num2 = req.params.num2 ; 

    const total = Number(num1) + Number(num2) ;
    res.send(`the total is ${total}`);


})

app.use(express.json());

app.get("/sayHello",(req,res)=>{
    res.json({
        "name" : req.body.name ,
        "age"  : req.query.age ,
        "lang" : "arabic"
    })
})

 
const Player = require('./models/players')
app.post( "/players",async (req , res )=>{

        const newPlayer = new Player();
        newPlayer.name = req.body.name ;
        newPlayer.age = req.body.age;
        newPlayer.phone = req.body.phone;
        await newPlayer.save();

        res.send("players has saved")
})


app.get("/players", async (req, res) => {
    const players = await Player.find();
    res.json(players);
});

 

app.get("/players/:playerId", async (req, res) => {
    
    const id  = req.params.playerId ;
    const player = await Player.findById(id);
    res.json(player);
    
    
});



app.listen(7000, ()=>{
    console.log(" I am listenning in port 7000");
})