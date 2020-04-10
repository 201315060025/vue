const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs-extra');
const path = require('path');
const config = require('../config/config-dev.json');
const Ut = require("../src/utils/common");
const port = config.port;


app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
app.use(bodyParser.json({ limit: '1mb' }));

app.use(bodyParser.raw({ type: "application/octet-stream" }));

app.use('/static', express.static(path.resolve('../dist/static')));

pageList = [];

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.resolve(`../dist/index.html`));
});

app.get('/merge-table|down-table|redirect|message', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.resolve(`../dist/index.html`));
});

app.get('/film/getList', (req, res) => {
    console.log("start exe..");
    res.send({data:"blx"});
    // (async () => {
    //     console.log("in function..");
    //     console.time("第一次延迟");
    //     await Ut.sleep(1000);
    //     console.timeEnd("第一次延迟");
    //     res.send({data:"blx"});
    // })()
    // res.send({data:"blx"});
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));