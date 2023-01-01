
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Todos = new Schema({
  
  id: {
        type: Number,
        required: true,
        unique: true
    },
   name: {
        type: String,

    },

    list: {
        type: Array,
    },
    
    delete: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model('Todos', Todos);



