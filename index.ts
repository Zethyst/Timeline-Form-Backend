const express = require('express')
var cors = require("cors");
declare module 'fast-two-sms';
const app = express()
const port = process.env.PORT || 5000
// npm install -g typescript
//npm install -g ts-node

app.use(cors())
app.use(express.json())

app.use('/api/auth', require("./routes/Auth"));

app.listen(port, () => {
    console.log(`[+] Listening on port ${port}...`)
})