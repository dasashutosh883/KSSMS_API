const express = require('express');
const parser = require('body-parser');
const app = express();
app.use(express.json());
app.use(parser.json());

const PORT = process.env.PORT || 7000;

app.get('/status', (request, response) => {
   const status = {
      'Status': 'Running'
   };
   
   response.send(status);
});

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});