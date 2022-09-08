const express=require('express')
const products = require('./data')
const router=express.Router()

router.get('/allproducts',(req,res)=>{
    res.json({products,total:products.length,response:true})
})

router.get('/searchProduct',(req,res)=>{
    const {query}=req.query
    if (query) {
        const filteredData=products.filter((pr) =>
            String(pr.title).toLowerCase().includes(String(query).toLowerCase()) || String(pr.brand).toLowerCase().includes(String(query).toLowerCase()) || String(pr.category).toLowerCase().includes(String(query).toLowerCase())
          )
        res.json({products:filteredData,total:filteredData.length,response:true})
    }
    else{
        res.json({message:"query parameter is required",response:false})
    }

})

module.exports=router