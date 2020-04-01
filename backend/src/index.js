const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
//When Production:
//app.use(cors({origin: 'http://meuapp.com'}));

app.use(express.json());
app.use(routes);

app.post('/',);

app.listen(3333);