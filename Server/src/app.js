
require('dotenv').config()
const Razorpay = require('razorpay');
const express=require("express")
require('./db/conn')
const jwt=require('jsonwebtoken')
// yha pr secret key aur client me public key dalna hai

const bcrypt=require('bcryptjs')
const nodemailer=require('nodemailer')
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

const bodyParser = require('body-parser');

const cors=require('cors')
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));




const http = require('http'); 
const server = http.createServer(app);
app.use(bodyParser.json());



app.use(express.json())


app.use(express.urlencoded({extended:false}))


// define the reacpactha

const Recaptcha = require("express-recaptcha").RecaptchaV2;
const recaptcha = new Recaptcha(
  "6Ldoc54oAAAAALpYD5xiKoRhTPz0rNy9X_AE9D3x",
  "6Ldoc54oAAAAAHo64Ye-M7FOQzCfepBgX3s0UrpD"
);

const auth=require("./Middleware/auth")
const User=require("./model/model")
// cors esliye use kiya qki 
// front aur backend dono ka localhost
// port no . different HTMLDetailsElement;

const port=7000



// payment gateway





const razorpay = new Razorpay({
  key_id: process.env.PAYMENTGEWAY_KEY_ID,
  key_secret: process.env.PAYMENTGEWAY_SECRET_KEY,
});



const Paymentmodel=require('./model/paymentdata')
app.post('/api/payment/create', async (req, res) => {
  try {
    const { amount, currency,name,email,phone,cart} = req.body;
console.log(amount)

// if you want to send the array data to schema then 
// shema name and array name should be the same then you can 
// send it jaise yaha cart ek array hai
  const resdata= await new Paymentmodel({
    name,email,phone,cart
  })

  console.log("apymentkadatada"+ resdata)
    const options = {
      amount: amount,
      currency: currency,
    };



    const order = await razorpay.orders.create(options);
    res.json({ order_id: order.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});
// Create a route to handle payment success
app.post('/api/payment/success', (req, res) => {
  const { razorpay_payment_id } = req.body;

  // Update payment status in the database
  // User.findOneAndUpdate(
  //   { razorpay_payment_id },
  //   { status: 'success' },
  //   { new: true },
  //   (err, payment) => {
  //     if (err) {
  //       console.log(err);
  //       res.status(500).json({ error: 'Payment update failed' });
  //     } else {
  //       res.json({ message: 'Payment success' });
  //     }
  //   }
  // );
});


app.get("/paymentpost",async(req,res)=>{
  
  try{
    const res1=await Paymentmodel.find()
  console.log("sdkflasfj"+res1)
    res.json({data:res1})
  }catch(e){
    console.log(e)
  }
})

// logindatafetch for the ceckout

app.get('/cart',auth,async(req,res)=>{

  try{
    console.log(req.rootuser)
    res.status(201).json({data:req.rootuser, message:"successfully send logindata"})
  }catch(e){
    console.log(e)
  }

})

//  ***************register **************

app.post("/signup",async(req,res)=>{
 
  const{name,email,phone,password,cpassword}=req.body
try{
 
 if(password===cpassword){
  const userdata=new User({
    name,
    email,
    phone,
    password,
    cpassword
  })

  const token= await userdata.generateAuthToken()

  



 
  
    const result=await userdata.save()

    res.json({token:token, data:result, message:"successfuull"})
  }else{
    res.json({message:"password not match"})
    console.log("not match password")
  }






}catch(e){
  console.log(e)
  res.status(400).json({message:"rekfjskl failed"})
}
})

// ***********loign*******************

app.post("/login",async(req,res)=>{
  try{
      const {email,password}=req.body

        const useremail=await User.findOne({email:email})
        console.log("login ka hai "+useremail.password)

        const token =await useremail.generateAuthToken()
        
          const ismatch=await bcrypt.compare(password,useremail.password) 
          
        if(ismatch){
          console.log("mathc ")
          res.json({ token:token, data:useremail, message:"success loign"})
        }else{
          console.log("doanmathch")
          res.send('klsjflksjfdontmathc')
        }
  }catch(e){
    console.error(e)
  }
})







app.get("/getemail",auth, (req,res)=>{
 
  console.log(req.rootuser)
    res.status(201).json({data:req.rootuser, message:"success"})
   

  })
// *************authenication and about page*********

app.get("/aboutauth",auth, (req,res)=>{
 
  console.log(req.token)
    res.json({data:req.token, message:"success"})
   

  })
 
  // **********authenication and home page*********

app.get('/',auth,(req,res)=>{
 res.json({data:req.rootuser})
})



// ******************authenication and conatact page*******


app.get('/contact',auth,async(req,res)=>{
 res.json({data:req.rootuser})
 console.log(req.rootuser)
})

app.post("/contactpost",async(req,res)=>{
  try{
   const {_id,name,email,messagetext}=req.body
    
   const userdata=await User.findOne({_id:_id})
     console.log( "user data is"+ userdata)
   const message=await userdata.makemessageschema(name,email,messagetext)
      console.log( "mesae"+message)
  }catch(e){

  }
})

// ********email configuration and kon se service m bhejna hai

const transporter=nodemailer.createTransport({
  service:"gmail",
  auth:{
    user:"vishusahu608@gmail.com",
    // strong password dalna yha pe
    pass:"cmxg yuyi rsar zklc"
  }
})


// ************forgot password***********

app.post("/forgetpassword",async(req,res)=>{

  const {email}=req.body

  
try{

  const userdata= await User.findOne({email:email})
 console.log("user data is"+userdata)
  if(!userdata){
    res.status(201).json({message:"email is not registered"})
  }

  const token =jwt.sign({_id:userdata._id}, process.env.JWT_SECRET_KEY_FORGOTPASSWORD)
 console.log(token)
  // store the token in userschema model create verifytoken object bnaya usershchema m
  
  const usertoken=await User.findByIdAndUpdate({_id:userdata._id},
    { verifytoken:token},{new:true})
    console.log("user token is" +usertoken)


  if(usertoken){

     const mailoptions={
      from:"vishusahu608@gmail.com",
      to:email,
      subject:"Sending Email for password reset",
      text:`This link is valid for 2 Minutes http://localhost:3000/resetpassword/${usertoken._id}/${usertoken.verifytoken}`
     }

     transporter.sendMail(mailoptions,(error,info)=>{
      if(error){
          console.log("error",error);
          res.status(401).json({status:401,message:"email not send"})
      }else{
          console.log("Email sent",info.response);
          res.status(201).json({status:201,message:"Email sent Succsfully"})
      }
  })}

  
}catch(e){
  console.error(e)
  res.status(401).json({status:401, message:"email is not valid"})
}
})

// ************reset password************

app.get('/resetpassword/:id/:token',async(req,res)=>{

const {id,token}=req.params
console.log(id)

})



app.post('/:id/:token', async(req,res)=>{

   const {password,cpassword}=req.body
   console.log(password)
  const {id,token}=req.params

  console.log("reste ka id hai"+ id)

  try{
    const hashpass= await bcrypt.hash(password,10)
        const hashcpass= await bcrypt.hash(cpassword,10)

      const userdata=await User.findByIdAndUpdate({_id:id},
        {password:hashpass,cpassword:hashcpass},{new:true})
        
        const verifytoken=jwt.verify(token,"mynamesivishusahugramkapsadadistdurgchhattisgadh")
console.log(verifytoken._id)

     
       const result= await userdata.save()
       console.log(result)
       res.status(201).json({data:result,message:"succefully reset and cpassword"})
     
   
  }catch(e){
    console.log(e)
  }
})






// app.listen(port,()=>{
//     console.log(`server is runnning on the ${port}`)
// })

server.listen(port);