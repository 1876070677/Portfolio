//express 모듈 불러오기
const express = require("express");
// http 서버 오픈
const http = require('http');
const app = express(); 
// // //cors 모듈 불러오기
const cors = require('cors');
const corsOpts = {
    origin : ['http://localhost:5556', 'https://blog.shbox.kr', 'http://localhost:3000'],
    credentials : true
};
app.use(cors(corsOpts));
app.use(express.json());

const routerMapping = require('./mapping/router');
app.use('/', routerMapping);

//http listen port 생성 서버 실행
const webServer=http.createServer(app).listen(5557, () => {
    console.log(__dirname);
    console.log("http web server started");
})