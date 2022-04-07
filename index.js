const express=require("express");
const db=require("./db")
const app=express();
const Product=require("./models/equipmentModel")
const equipmentsRoute=require("./routes/equipmentRoute")
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server Working ");
})

app.get("/getequipments",(req,res)=>{
    Product.find({},(err,docs)=>{
        if(err){
            console.log("Error")
        }else{
            res.send(docs)
        }
    })
})
// app.use('/api/equipments/',equipmentsRoute)
const port=process.env.PORT||8000;
app.listen(port,()=>`Server is working on port ${port}`)