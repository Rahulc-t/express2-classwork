const express=require("express");
const router=express.express();
const port=3000

router.listen(port,(error)=>{
    if(!error){
        console.log("port activated")
    }
    else{
        console.log("port not activated");
    }
})

router.get