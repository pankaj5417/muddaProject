const express = require("express");
const translate = require("@vitalets/google-translate-api");
const NodeCache = require('node-cache')
const myCache = new NodeCache()
    
const router = express.Router();

let obj={key:"",value:""}
router.get("/speechtranslator" ,(req, res) => {
  console.log("get",obj.key);

  if(myCache.has(obj.key)){
    console.log('Retrieved value from cache !!')
      
    // Serve response from cache using
    // myCache.get(key)
    let val=  myCache.get(obj.key)
    console.log("val",val)

    return res.render("speechtranslator", {
        title: "Text Translator ",
        translated: val,
      });
    res.send("Result: " + myCache.get(req.body.speech))

}else{

    // Perform operation, since cache 
    // doesn't have key
    let result = obj.value
    console.log("result",result)
      
    // Set value for same key, in order to 
    // serve future requests efficiently
    myCache.set(obj.key, result)
      
    console.log('Value not present in cache,'
          + ' performing computation')
   // res.send("Result: " + result)
}

  return res.render("speechtranslator", {
    title: "Text Translator ",
    translated: "",
  });
});

router.post("/speechtranslator", (req, res) => {
  console.log(req.body.speech);
  obj.key=req.body.speech

  translate(req.body.speech, { to: req.body.language })
    .then((response) => {
      console.log(response.text)
      obj.value=response.text
      return res.render("speechtranslator", {
        title: "Text Translator",
        translated: response.text,
        
      });
    })
    .catch((err) => {
      console.error(err);
    });
});





//for testing

router.get("/test1", async (req, res, next) => {
  let output = {};
  try {
    const response = await googleTranslate("How u doing?", { to: "ja" });

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

router.get("/test2", async (req, res, next) => {
  let queryParameter = req.query;

  let output = {};
  try {
    const response = await googleTranslate(queryParameter.sourceText, {
      to: queryParameter.targetLanguage,
    });

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

module.exports = router;
