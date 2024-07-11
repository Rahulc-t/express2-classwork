const express=require("express");
const router=express();
const port=3000

router.listen(port,(error)=>{
    if(!error){
        console.log("port activated")
    }
    else{
        console.log("port not activated");
    }
})

router.get("/",(req,res)=>{
    res.status(200)
    res.send("hello world")
})
router.use(express.json())
router.post("/",(req,res)=>{
const {new1}=req.body
res.status(200)
res.send(`welcome ${new1}`)

})