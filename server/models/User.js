const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name: {type: 'String', required: true, minlenght: 3, maxlenght: 30},

email: {
    type: 'String', 
    required: true, 
    minlenght:40,
    maxlenght: 1024,
},

password: {type: 'String', required: true, minlenght: 5, maxlenght: 20}
});


const User = mongoose.model('User', userSchema);
exports.User = User;

