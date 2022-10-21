const express = require("express");
const app = express();
const EventEmitter = require('events');

const ev = new EventEmitter();

ev.on('bye',()=>{
    console.log("Hello is called");
});
ev.emit('bye');

class User extends EventEmitter{

    constructor(name){
        super();
        this._name = name;
    }

    get printName(){
        return this._name;
    }

}

const codingNinjas = new User("coding Ninjas");

codingNinjas.on('load',()=>{
    console.log("Hello");
    console.log(codingNinjas._name);
})

codingNinjas.emit('load');


// app.set('views','view');
// app.set('view engine','ejs');

// app.get('/',(req,res)=>{
//     //console.log(req);
//     res.send("Hi This is a express class");
// })

// app.get('/:id/:name',(req,res)=>{
//     const {id,name} = req.params;
//     console.log(id, name);
//     res.render('user.ejs',{list:[7,9,1,0], loggedIn: false, username: "expressserver"});
// })


// app.listen(PORT,(err,data)=>{
//     if(err){
//         console.log("error occured while creating the server");
//         return;
//     }
//     console.log(`Server is listening on PORT : ${PORT}`);
// })