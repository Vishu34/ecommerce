

const mongoose=require('mongoose')

const PaymentSchmea= new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
    },
    phone:{
        type:Number
    },
   
   cart:[

    {
       image:{
                type:String
            },
        name:{
            type:String
        },
      
       
        amount:{
         type:Number
        }
    },
    ],

    totalprice:{
        type:Number
    }

})


const Paymentmodel= new mongoose.model("Paymentmodel" , PaymentSchmea)

// const createpayment=async()=>{
//     try{
   
//         const list=new Paymentmodel({
//             name:"vishu",
//             email:"vianfsj@gmail.com",
//             phone:"23412431242",
//             image:"https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png",
//             name1:"imagelogokaca",
//             price:"1232421",
//             totalprice:"1234325"

//         })


//         const result=await Paymentmodel.insertMany([list])
//        console.log(result)

//     }catch(e){
//         console.log(e)
//     }
// }

// createpayment()




module.exports=Paymentmodel;