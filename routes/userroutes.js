const express=require("express");
const router=express.Router();

let users=[
    
    {id:1,name:"harry"},
    {id:2, name:"bob"}


]

router.get("/",(req,res)=>{
    res.status(200);
    res.json(users);
})
router.post("/",(req,res)=>{
const newUser=req.body;
newUser.id=users.length+1;
users.push(newUser);
res.status(201).json(newUser);
})

router.put("/:id",(req,res)=>{
    const uid=parseInt(req.params.id);
    const newUser=req.body;
    let userIndex=users.findIndex((user)=>user.id===uid);
    //{...[userIndex],...newUser}
    if(userIndex!==-1){
        users[userIndex]={...users[userIndex], ...newUser}
        res.json(users[userIndex]);
    }
    else{
        res.status(404).json({error:"user not found"})
    }
})

router.delete("/:id",(req,res)=>{
    const uid=parseInt(req.params.id)
    let userIndex=users.findIndex((user)=>user.id===uid);

    if(userIndex!==-1){
        const deleteUser=users.splice(userIndex,1)
        res.json(deleteUser)
    }else{
        res.status(404).json({error:"user not found"})
    }
})
module.exports=router;
