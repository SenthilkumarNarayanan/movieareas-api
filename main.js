const express=require('express')
const app=express();

//R-Read API for get all movies detail 
app.get('/movies',(req,res)=>{

})

//C- Create API for create a new movie
app.post('/movies',(req,res)=>{

})

//U- Update API for update existing movie details
app.put('/movies/:id', (req,res)=>{

})

//D- Delete API for delete existing movie
app.delete('/movies/:id',(req,res)=>{

})
const PORT=8000
app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`)
})