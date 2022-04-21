const express = require("express");
const translate = require('@vitalets/google-translate-api');
const ejs = require("ejs");

const bodyParser = require("body-parser");
const translateController=require("./controllers/translate.controller")


const app = express();
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"))
app.set("view engine", "ejs")



app.use("",translateController)

module.exports=app