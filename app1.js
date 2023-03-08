const express=require('express')
const app =express()
const path=require('path')
const port=3004;


//product
app.get('/product',(req,res)=>{
    res.send('All products')
})
app.get('/product/:category',(req,res)=>{
    res.send(req.params.category);
})



app.listen(port,()=>{
    console.log('its working');
})