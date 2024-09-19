import express from 'express';
import { 
    MovieDelete, 
    MovieCreate, 
    MovieIndex, 
    MovieUpdation } 
    from '../controllers/movies.controller.js';

const router =express.Router()
//R-Read API for get all movies detail 
router.get('/',MovieIndex)

//C- Create API for create a new movie
router.post('/', MovieCreate)

//U- Update API for update existing movie details
router.put('/:id',MovieUpdation)

//D- Delete API for delete existing movie
router.delete('/:id',MovieDelete)

export default router;