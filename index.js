const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: ["http://localhost:3000", "https://webnotes.onrender.com"]
}));

app.use(express.json());
// Avaliable Routes 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port,()=>{
    console.log(`Listening at ${port}`)
})