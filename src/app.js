const express = require('express');
const app = express();
const hbs = require('hbs');
const partials = require('partials');


const port = process.env.PORT || 7000;

const path = require('path');
let ppub = path.join(__dirname , '../public')
let partial_path = path.join(__dirname , "../partials");

app.use(express.static(ppub));
// console.log(path.join(__dirname , '../public'));

hbs.registerPartials(partial_path);

app.set('view engine', 'hbs');
app.set('views' , (path.join(__dirname , "../views")));


app.get('/' , (req , res)=>{
    res.render("index");
})
app.get('/index' , (req , res)=>{
    res.render("index");
})
app.get('/about' , (req , res)=>{
    res.render("about");
})
app.get('/weather' , (req , res)=>{
    res.render("weather");
})
app.get('*' , (req , res)=>{
    res.send("error 404");
})






app.listen(port , ()=>{
    console.log(`listening to ${port}`);
})