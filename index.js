const express = require('express');
const app = express();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ token:[] })
  .write()

app.get('/',(req,res)=>{
    res.send('data')
})

app.get('/add',(req,res)=>{
    db.get('token')
    .push({
        token:req.query.token
    })
    .write();
    res.send(req.query.token);
})

app.listen(3000)