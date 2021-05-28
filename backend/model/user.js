const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    email: {
        type: String,
        require: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] 
    },
    pass: {
        type: String,
        require: true,
        minLength: [8, 'Password must be at least 8 charachters'],
    }
})

module.exports = mongoose.model('user', userSchema)