const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const users = [{
    id:1,
    email: 'ciao@gmail.com',
    password: 'ciao',
},{
    id:2,
    email: 'test@gmail.com',
    password: 'test',
},
{
    id:3,
    email: 'prova@gmail.com',
    password: 'prova',
}]

app.post('/login',(req,res)=>{
    const email = req.headers['email'];
    const password = req.headers['password'];

    users.forEach((user) =>{
        if(user.email == email && user.password == password){
             res.sendStatus(200);
        }
    })
});
    //  try {
        //PARAMS
    //    res.send(req.params.id);

        //HEADERS
       // req.send(req.headers['token'])

        //BODY--> si deve usare post
       // res.send(req.body.id)

  //     const api = await fetch('https://api.spoonacular.com/recipes/random?number=10&apiKey=d5cede24663f403c9fffd0ae0f88fbf5')
    //    const data = await api.json();
      //  res.send(data);

  //  } catch (e) {
        //res.sendStatusCode(400);
   // }
//} )


app.listen(4000, (err)=>{
    console.log('server listening on 4000')
});