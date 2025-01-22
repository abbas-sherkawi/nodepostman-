const mongoose =  require("mongoose");

const Schema = mongoose.Schema

const playerSchema = new Schema({

    name : String ,
    age : String ,
    phone : Number

})

// hla2 mn3mel l model li hwe table 

const Player = mongoose.model("PLayer",playerSchema);

module.exports = Player ;