//script

const express = require('express');
const bodyparse = require('body-parser');
const api = express();

api.use(express.static(__dirname+'/public'));
api.use(bodyparse.json());


api.listen(3000,() => {
console.log('API up and  running!');
});


api.post('/add',(req,res)=>{
console.log('post made!');
console.log(req.body);
res.send('response received 1001');
});
