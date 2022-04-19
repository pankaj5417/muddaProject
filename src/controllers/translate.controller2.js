const express = require("express");
const cache = require("../../cache");
const translate = require("@vitalets/google-translate-api");
const router = express.Router();

router.get("/speechtranslator",  (req, res) => {
  return res.render("speechtranslator", {
    title: "Text Translator ",
    translated: "",
  });
});

router.post("/speechtranslator", (req, res) => {
  console.log(req.body.speech);

  translate(req.body.speech, { to: req.body.language })
    .then((response) => {
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
