const mongoose = require ('mongoose');

const productsSchema = new mongoose.Schema({
      title:{ 
        type:String,
        required: true,
    },
      description:{ 
        type:String,
        required: true,
    },
      code:{ 
        type:String,
        required:true,
      },
      price:{
        type:Number,
        required: true,
    },
      status: String,
      stock:{
         type: Number,
         default: 0},
      category: String,
      thumbnail: String,
})


const productsModel = mongoose.model ('products', productsSchema);

module.exports = productsModel;