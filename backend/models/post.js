const mongoose = require("mongoose")
const {objectId} =mongoose.Schema.Types.ObjectId
const User = require("./user")

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:"no photo"
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,  
        ref:"User"
    }
})
 module.exports =Post= mongoose.model("Post",postSchema)
// module.exports = User = mongoose.model("User",userSchema);

// const User = mongoose.model("User",userSchema)

// module.exports = User