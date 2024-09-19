import { Schema, model } from "mongoose";


//write movie schema
const schema=new Schema({
    title:{
        type: String,
        required:true,
        unique:true
    },
    desc: {
        type: String,
        required: true
    }
});
//Create movie Model
const Movie=model("Movie", schema);

export default Movie