
const User = require("../models/user")
exports.signup = async(req,res,next)=>{
    // const hashedPassword = bcrypt.hashSync(req.body.password,10);

    try{
    const {name,email,password} = req.body
    
    if(!name || !email || !password){
        res.json({error:"All fields are required"})
    }

    const finduser = await User.findOne({email})
    if(finduser){
        return res.status(400).json({error:"user alreday exist"})
    }
    // const hashedPassword=await bcrypt.hash(password,10)
    const salt = await bcrypt.genSaltSync(10);
    var hash = await bcrypt.hashSync(req.body.password, salt);
    const user = new User({
       name,
       email,
       password:hash
    })
    const signUser = await user.save()
    res.status(200).json(signUser)
    
}
catch(error){
    res.send(error)
}
    
}

exports.signin = async(req,res,next)=>{
    // const hashedPassword = bcrypt.hashSync(req.body.password,10);

    try{
    const {email,password} = req.body
    
    if(!email || !password){
        res.json({error:"All fields are required"})
    }

    const finduser = await User.findOne({email})
    if(!finduser){
        return res.status(400).json({error:"user doesn't exist pls signup"})
    }
  
    const log =  await bcrypt.compareSync(req.body.password, finduser.password); 
    if(!log){
        return res.json({error:"email & password not match"})
    }
    res.json({msg:"login success"})
    const token = await jwt.sign({_id:log._id }, process.env.secret);
    // const {_id,name,email} = finduser
    console.log({token})
    res.json({token})
    
}
catch(error){
    res.send(error)
}
    
}

exports.signout = (req,res)=>{
    res.clearCookie("t");
    return res.json({msg:"signout success"})
}


// exports.requireSignin = expressjwt({
//     secret:process.env.secret,
//     userProperty:"auth"
    
// })
