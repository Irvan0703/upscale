const mongoose = require('mongoose');
const { model, Schema} = mongoose;

const taskSchema = Schema({
    
    title:{
        type: String,
        minlength:[3, 'Panjang title minimal 3 karakter'],
        required:[true,'title harus diisi']
    },
    description:{
        type: String,
        maxlength:[1000, 'Panjang deskripsi maksimal 1000 karakter']
    },
    completed:{
        type: Boolean,
        default: false
    },
}, { timestamps: true });

module.exports = model('Tasks', taskSchema);