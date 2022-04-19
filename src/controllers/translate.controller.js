const express=require("express")
const cache=require("../../cache")
const translate = require('@vitalets/google-translate-api');
const client = require("../configs/redis");
const router=express.Router()

router.get('/speechtranslator',client,(req,res) => {
   // const sourceText=req.body.speech
    const textData={
        sourceText,
        translated:""

    }
     
    client.get("source_text",async function(err,textData){
       // console.log("cachedData",textData)
        if(err){
            console.log(err)
        }
    })
    if(textData)return res.render('speechtranslator',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:textData.translated})

    client.set("sourceText",JSON.stringify(textData={sourceText:req.body.speech,translated:""}))
    return res.render('speechtranslator',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
  })
  
  router.post('/speechtranslator',(req,res) => {
  
    console.log(req.body.speech)
    //console.log(req.originalUrl)
  
    translate(req.body.speech, {to: req.body.language}).then(response => {
      return res.render('speechtranslator',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
  }).catch(err => {
      console.error(err);
  });
  
  })



  //for testing

  router.get('/test1', async (req,res,next) => {
    let output = {};
    try {
        const response = await googleTranslate('How u doing?', { to: 'ja'});

        output.translatedText = response.text;
        output.fromLanguage = response.from.language.iso;
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({
        success: true,
        data: output,
    });
});

router.get('/test2', async (req, res, next) => {
    let queryParameter = req.query;

    let output = {};
    try {
        const response = await googleTranslate(queryParameter.sourceText, { to: queryParameter.targetLanguage });

        output.translatedText = response.text;
        output.fromLanguage = response.from.language.iso;
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({
        success: true,
        data: output,
    });
});

  module.exports=router
  