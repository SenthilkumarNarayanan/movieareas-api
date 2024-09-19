const express=require('express')
const app=express();
import movieRoutes from "./routes/movies.route"
app.get('/',(req,res)=>{
    res.json({movie_name :"rayan"})
})
app.use('/movies', movieRoutes)
const PORT=8000
app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`)
})