 export const MovieIndex=(req,res)=>{
    res.send("movies lists")

};
export const MovieCreate=(req,res)=>{
console.log(req.body)
return res.json(req.body)
};
export const MovieUpdation= (req,res)=>{
    res.send("movies updated")

};
export const MovieDelete=(req,res)=>{
    res.send("movies deleted")

}