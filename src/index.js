const express = require("express");
const translate = require('@vitalets/google-translate-api');
const ejs = require("ejs");

const bodyParser = require("body-parser");
const translateController=require("./controllers/translate.controller2")


const app = express();
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static("public"))
app.set("view engine", "ejs")


//const PORT = process.env.PORT || 5000;

/*
app.get('/speechtranslator',(req,res) => {
  res.render('speechtranslator',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
})

app.post('/speechtranslator',(req,res) => {

  console.log(req.body.speech)

  translate(req.body.speech, {to: req.body.language}).then(response => {
    res.render('speechtranslator',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
}).catch(err => {
    console.error(err);
});

})
*/

// app.listen(PORT, () => {
//   console.log(`App is listening on Port ${PORT}`);
// });

app.use("",translateController)

module.exports=app