
const mongoose=require('mongoose')

mongoose.connect(process.env.SERVER_LOCALHOST_PATH)
.then(()=>{
    console.log(`connected this data `)
    
}).catch((e)=>{
    console.log("database is not connected")
})