const express=require('express')
const app=express()
const PORT=process.env.PORT || 5000

const routes=require('./route')
app.use('/api/v1',routes);

app.use(express.static('client/build'))
    const path=require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
        
    })
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})