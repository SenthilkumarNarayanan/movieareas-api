import express from 'express';

const router =express.Router()
//R-Read API for get all movies detail 
router.get('/',(req,res)=>{
    res.send("movies lists")

})

//C- Create API for create a new movie
router.post('/',(req,res)=>{
    res.status(200).send("movies create")

})

//U- Update API for update existing movie details
router.put('/:id', (req,res)=>{
    res.status(200).send("movies updated")

})

//D- Delete API for delete existing movie
router.delete('/:id',(req,res)=>{
    res.status(200).send("movies deleted")

})

export default router;