const express = require('express');
const app = express();
app.use(express.static('./dist-ng'));
app.listen(8965);
