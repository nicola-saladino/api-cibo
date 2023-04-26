const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/',(req,res)=>{

    const id = req.body.id;
    res.send(id)
} )

app.listen(4000, (err)=>{
    console.log('server listening on 4000')
});