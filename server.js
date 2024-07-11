const express= require("express")
const app= express()
app.use(express.json());
const router=require("./routes/userroutes")
app.use("/users",router)
const port=3001
app.listen(port,(error)=>{
    if(!error){
        console.log("Running port,"+port)
    }
    else{
        console.log("error occured, "+error);
    }
})
