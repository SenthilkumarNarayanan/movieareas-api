import express from 'express';

const router =express.Router()
//R-Read API for get all movies detail 
router.get('/',(req,res)=>{
    res.status(200).send("movies list")

})

//C- Create API for create a new movie
router.post('/movies',(req,res)=>{
})

//U- Update API for update existing movie details
router.put('/movies/:id', (req,res)=>{

})

//D- Delete API for delete existing movie
router.delete('/movies/:id',(req,res)=>{

})

export default router;