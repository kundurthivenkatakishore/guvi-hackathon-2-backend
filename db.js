const mongoose=require("mongoose");

var mongourl="mongodb+srv://Kundurthivenkatakishore:ZWD4gf24wMOnCaKt@cluster0.qa68y.mongodb.net/test?authSource=admin&replicaSet=atlas-13fxaz-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"

mongoose.connect(mongourl,{useUnifiedTopology:true,useNewUrlParser:true});

var db=mongoose.connection

db.on("connected",()=>{
    console.log("Database connected Successfully")
})

db.on("error",()=>{
    console.log("mongodb connection failed");
})

module.exports=mongoose;