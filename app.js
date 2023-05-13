const express = require('express');
const debug = require('debug')('app');
const morgan = require ('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));  //กำหนด Path หน้าเว็บไซต์

app.get("/",(req,res) =>{

    res.send('Hello borntodev1 by Bas');

})

app.listen(port, ()=>{
    debug("Listening on port %d",port);
})