const app = require('../src/app');
require("dotenv").config();
const port = process.env.PORT || '8000';

app.listen(port, function () {
    console.log(`app listening on http://localhost:${port}`);
});