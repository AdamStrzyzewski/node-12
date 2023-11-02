const express = require("express");

const fs = require("fs");

const http = require("http");
const https = require("https");

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello - ${req.protocol}`);
});

const options = {
  key: fs.readFileSync("./localhost.key"),
  cert: fs.readFileSync("./localhost.crt"),
};

// http://localhost:80
http.createServer({}, app).listen(80);
// https://localhost:443
https.createServer(options, app).listen(443);

// sudo certbot certonly --webroot -w ./cert -d www.example.com -d example.com

// openssl req -x509 -out localhost.crt -keyout localhost.key \
//   -newkey rsa:2048 -nodes -sha256 \
//   -subj '/CN=localhost' -extensions EXT -config <( \
//    printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")

// https://dev.to/omergulen/step-by-step-node-express-ssl-certificate-run-https-server-from-scratch-in-5-steps-5b87
// https://www.entrust.com/resources/certificate-solutions/learn/how-does-ssl-work
// https://medium.com/globant/fake-ssl-certificates-how-can-they-be-a-problem-901cfe0b34f7
