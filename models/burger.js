let orm = require("../config/orm.js");

let burger = {
    selectAll:function(cb){     
        orm.selectAll("burger",(res)=>{ //Send table name
            cb(res);
        })
    },
    insertOne:function(cols,vals,cb) {  
        //console.log("Column",cols,"Values",vals); 
        orm.insertOne("burger",cols,vals,cb,(res)=>{ //Send table name, column, values, callback function
            cb(res);
        }) 
    },
    updateOne: function(ColVals,condition,cb){
        orm.updateOne("burger",ColVals,condition,cb,(res)=>{
            cb(res);
        })
    }
};

module.exports = burger;

