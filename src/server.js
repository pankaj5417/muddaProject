const app = require("./index");
//const connect = require("./configs/db");
const port=process.env.PORT || 8000

app.listen(port,async function () {
  //await connect(); 
  console.log("listening on port 8000");
});
