var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

//Routes
//Route to get all the burger names
router.get("/",(req,res)=>{
    burger.selectAll((data)=>{
        let list = {
            burgerList:data
        }
        //console.log("List of burgers",list.burgerList);
        console.log("Burger List",list);
        res.render("index", list);
    });
});

//Route to post a new burger name
router.post("/api/burgers",(req,res)=>{
    burger.insertOne(["name","devour"],[req.body.name, false],
    (result)=>{
        //Send back the id of the new burger!
        res.json({ id: result.insertedId });
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
    });
});

module.exports = router;