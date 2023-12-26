const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserModel = require('./models/User');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({
    credentials:true,
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
}));
app.use(cookieParser());
app.use(session({name:"my-session-cookie", secret:"Key",cookie:{maxAge:1000 * 60 * 60 * 24},resave: false,
saveUninitialized: false,}));

mongoose.connect(process.env.MONGO_URL);

app.post('/register', async(req,res)=>{
    const user = req.body;
    user.password = await bcrypt.hash(user.password,10);
    const newUser = new UserModel(user);
    newUser.save().then((response)=>{
        req.session.user = response;
        res.json(req.session.user);
    }).catch(e=>res.json(e));

});
app.get('/profile',async (req,res) => {
    const user = req.session.user;
    res.json(user)
});

app.post('/login', async(req,res)=>{
    let {email,password} = req.body;
    try {
        const user = await UserModel.findOne({email});
        if(user){

           const ispass = await bcrypt.compare(password,user.password);
           if(ispass){
            req.session.user = user;
            res.json(user);
           }else{
            res.json(false);
           }
        }else{
            res.json(false);
        }
        
    } catch (error) {
        res.json(error);
    }

});

app.get('/logout',(req,res) => {
    req.session.destroy((err)=>{
        if(err){
          res.json(false)
        }else{
          res.clearCookie('my-session-cookie')
          res.json(true)
        }
      })
})



app.listen(PORT, ()=>{
    console.log('Server is running');
});


