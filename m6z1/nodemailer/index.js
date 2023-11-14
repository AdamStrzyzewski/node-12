const nodemailer = require("nodemailer");

require("dotenv").config();

console.log(process.env.SEND_GRID_USERNAME);

const config = {
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: process.env.SEND_GRID_USERNAME, // 'apikey'
    pass: process.env.SEND_GRID_PASSWORD,
  },
};

const transport = nodemailer.createTransport(config);

const emailOptions = {
  from: "adamstrzyzewski9001@gmail.com",
  to: "adamstrzyzewski9001@gmail.com",
  subject: "nodemailer test",
  text: "tekstowa wersja wiadomości",
};

transport
  .sendMail(emailOptions)
  .then((info) => console.log(info))
  .catch((e) => console.log(e));
