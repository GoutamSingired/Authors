const express = require('express');
const app = express();
const cors  = require('cors')

require('../server/config/mongoose.config')

app.use(express.json(), express.urlencoded({extended: true}));

app.use(cors());

const allRoutes = require('../server/routes/author.routes')
allRoutes(app);

app.listen(8000, () => {
    console.log("server is started at 8000")
})