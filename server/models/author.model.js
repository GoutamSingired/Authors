const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: [true, "Name should be mentioned"],
            minlength: [4, "Name should be min 4 chars"]
        }
    },{ timestamps: true }
)

const Author = mongoose.model('Author', AuthorSchema)
module.exports = Author