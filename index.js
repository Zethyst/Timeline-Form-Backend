var express = require('express');
var cors = require("cors");
var app = express();
var port = process.env.PORT || 5000;
// npm install -g typescript
//npm install -g ts-node
app.use(cors());
app.use(express.json());
app.use('/api/auth', require("./dist/Routes/Auth"));
app.listen(port, function () {
    console.log("[+] Listening on port ".concat(port, "..."));
});
