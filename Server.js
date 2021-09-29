
const express = require('express');
const bodyParser = require ('body-parser');
const app = express();

const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require ('knex');
const { response } = require('express');
const { CommandCompleteMessage } = require('pg-protocol/dist/messages');


const register = require('./controllers/register');
const signin = require ('./controllers/signin');
const profile = require ('./controllers/profile');
const image = require('./controllers/image');

const database = knex ({
    client :'pg',
    connection :{
        host:'127.0.0.1',
        user:'postgres',
        password:'naman02',
        database :'project',
    }
});


app.use(bodyParser.json());
app.use(cors());

app.post('/',(req,res)=>{res.send("You Have Entered a Root Server")});

app.post ('/signin',(req,res) =>{signin.handleSignin(req,res,database,bcrypt)});

app.post('/register',(req,res)=>{ register.handleRegister(req,res,database,bcrypt)});

app.get('/profile/:id',(req,res)=>{profile.handleProfileGet(req,res,database)});

app.put('/image/:id',(req,res)=>{image.handleImage(req,res,database)});


app.listen (process.env.PORT || 3000, ()=>{
    console.log('app is running on the port ');
});
