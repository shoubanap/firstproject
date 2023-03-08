const express = require('express')
const app = express();
const path= require('path')
const port = 1000;

app.use(express.static('public'))


/*app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})



//product
app.get('/product',(req,res)=>{
    res.sendFile(path.join(__dirname, 'product.html'))
})


//about
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname, 'about.html'))
})
//condact
app.get('/condact',(req,res)=>{
    res.sendFile(path.join(__dirname, 'condact.html'))
})
*/app.listen(port,()=>{
    console.log('server started');
})
