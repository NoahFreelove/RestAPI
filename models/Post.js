const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userName:{
      type: String
    },
    userId: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Posts', PostSchema);
