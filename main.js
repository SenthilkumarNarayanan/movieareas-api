const express=require('express')
const app=express();

app.get('/',(req,res)=>{
  res.json({msg:"Hello"});
});
const PORT=8000
app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`)
})