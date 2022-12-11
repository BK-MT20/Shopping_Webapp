const mongoose = require('mongoose')

const Statistic = mongoose.model (
    'Statistic',
    new mongoose.Schema({
        name: {type: String,required: true},
        time:{type:Date,required: true},
        price:{type: Number,required: true},
        type: {type: String,required: true},
        amount:{type:Number,required: true}
    },{ timestamps: true })
    .method('toClient', function() {
        var obj = this.toObject();
        //Rename fields
        obj.id = obj._id;
        delete obj._id;

      
        return obj;
    })     
     
)


mongoose.Schema
module.exports = Statistic
