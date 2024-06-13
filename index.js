const express = require("express")
const app = express();
const {APP_PORT, DB_URL} = require("./config")
const routes = require("./routes");
const { mongoose } = require("mongoose");
const bodyParser = require("body-parser");



mongoose.connect(DB_URL).then(()=> console.log('connected'));
app.use(express.static(__dirname+ "/public"));
app.use("/uplods",express.static("uplods"));
app.use


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',routes);
    
app.listen(APP_PORT,()=>{
    console.log('app run on port $ {APP_PORT}');
});