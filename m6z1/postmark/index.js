const superagent = require("superagent");

require("dotenv").config();

const body = {
  From: "adam@sweetanalytics.com",
  To: "adam@sweetanalytics.com",
  Subject: "Postmark test!",
  TextBody: "Treść tekstowa",
  HtmlBody: "<h1>Treść htmlowa</h1>",
};

superagent
  .post("https://api.postmarkapp.com/email")
  .set("Accept", "application/json")
  .set("Content-Type", "application/json")
  .set("X-Postmark-Server-Token", process.env.POSTMARK_API)
  .send(body)
  .then((res) => {
    console.log(res.body);
  })
  .catch((err) => {
    console.log(err);
  });
