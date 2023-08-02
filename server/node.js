const express = require('express');
const server = express();


const port = process.env.PORT || 5000;

server.get('/',( req, res ) => {
    res.send("보내줌")
})

server.listen(port, () =>{
    console.log('5000번 실행되었습니다.')
})

