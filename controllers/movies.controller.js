import Movie from "../models/movie.model.js";

//API control for get all movies
 export const MovieIndex= async(req,res)=>{
try {
   const movies= await Movie.find()
   res.json(movies)
    
} catch (error) {
    res.status(500).send(error.message)
}
};

//API controller for get sigle movie
export const SingleMovie= async(req,res)=>{
    try {
       const movie= await Movie.findById(req.params.id) 
       if(movie==null){
        return res.status(404).json({message:"requested movie not found"})
       }else{
        return res.json(movie)
       }
    } 
    catch (error) {
        return res.status(500).json({error:error.message})
    }
}

//control function for create new movie
export const MovieCreate= async(req,res)=>{
const newMovie=new Movie({
    title: req.body.title,
    desc:req.body.desc
});

try {
    const movie = await newMovie.save();
    return res.status(201).json(movie)
} catch (error) {
    return res.status(400).json({message:error.message})
}};

//API control for Update existing movie details
export const MovieUpdation= async(req,res)=>{
    //validation the user input
    try {
        const UpdatedMovie=await Movie.findOneAndUpdate({_id:req.params.id},{
            title:req.body.title,
            desc:req.body.desc
        },{
            new: true
    
            });
                res.status(200).json(UpdatedMovie)
        
    } catch (error) {
        res.status(400).json({message:error.message});

    }}
export const MovieDelete=(req,res)=>{
    res.send("movies deleted")

}