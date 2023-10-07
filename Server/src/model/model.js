const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,

    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  messages: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,

        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Invalid email");
          }
        },
      },
      messagetext: {
        type: String,
        required: true,
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  verifytoken:{
    type: String,
   
  },

  
  
  
});









// make the messageschema for the contact page it will make
// like token

userSchema.methods.makemessageschema = async function(name1, email1, messagetext1){
  try {
   console.log(name1,email1,messagetext1)
    this.messages = this.messages.concat({ 
        name: name1,
         email:email1,
         messagetext:messagetext1
    
    });
   
    await this.save()
    return this.messages
  } catch (e) {
    console.log(e);
  }
};

userSchema.methods.generateAuthToken = async function () {
  try {
    console.log(this._id);
    const token1 = jwt.sign(
      { _id: this._id },
      process.env.JWT_SECRET_KEY_SIGNUPLOGIN
    );
   
    this.tokens = this.tokens.concat({ token: token1 });
    console.log(this.tokens);
    return token1;
  } catch (e) {
    console.log(e);
  }
};
userSchema.pre("save", async function (next) {
  try {
    if (this.isNew || this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  } catch (e) {
    console.log(e);
  }
});

const User = new mongoose.model("User", userSchema);

// const create=async()=>{
//  try{
//     const user =new User({
//         name:"visu",
//         email:"sau@gmail.com",
//         password:"123",
//         cpassword:"123"

//     })
//     const user1 =new User({
//         name:"visu1",
//         email:"sa1u@gmail.com",
//         password:"11123",
//         cpassword:"11123"

//     })

//     const result =await User.insertMany([user,user1])
//     console.log(result)
//  }catch(e){
//     console.log(e)
//  }
// }
// create()
module.exports = User;
