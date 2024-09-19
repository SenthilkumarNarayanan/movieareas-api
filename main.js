import express from "express";
import movieRutes from "./routes/movies.route.js"
import connectDB from "./lib/db.js";
const app=express();
const PORT=8000

// app.get('/',(req,res)=>{
//     res.json({movie_name :"rayan2"})
// })
//client-->middleware->server

//connect const
connectDB()
app.use('/movies',movieRutes)
app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`)
})