var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

//Routes
//Route to get all the burger names
router.get("/",(req,res)=>{
    burger.selectAll((data)=>{
        let orders = {
            burger:data
        }
        console.log("List of burgers",orders);
        res.render("index",orders);
    });
});

//Route to post a new burger name
router.post("/api/burgers",(req,res)=>{
    burger.insertOne(["name","devour"],[req.body.name,req.body.devour],
    (err,res)=>{
        res.json({ id: res.insertedId });
    });
});

//Indicate if a burger has been devoured
router.put("/api/burgers/:id",(req,res)=>{
    let condition = req.params.id + " = id";
    burger.updateOne({devour: req.body.devour},condition,(data)=>{
        if (res.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})