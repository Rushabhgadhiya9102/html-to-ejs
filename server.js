const express = require("express")
const port = 8083
const app = express()

app.set("view engine", "ejs")
app.use(express.static('public'))

app.get('/', (req,res)=>{
   return res.render("index")
})

app.get('/tables', (req,res)=>{
   return res.render("pages/tables")
})

app.get('/form-wizard', (req,res)=>{
    res.render("pages/form-wizard")
})

app.get('/form-basic', (req,res)=>{
    res.render("pages/form-basic")
})

app.listen(port, (error) => {
    if(error){
        console.log(error);
        
    }else{
        console.log("server is running on port ",port);
        console.log(`http://localhost:${port}`);
        
        
    }
})