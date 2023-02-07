const mongoose = require ('mongoose');

const chatSchema = new mongoose.Schema({
      user:{ 
        type:String,
        required: true,
    },
      message:{ 
        type:String,
        required: true,
      },
});


const chatModel = mongoose.model ('message', chatSchema);

module.exports = chatModel;