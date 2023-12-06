const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 4000;
const version = '0.1'


app.use(cors());
app.use(bodyParser.json());
app.use(`/${version}/api`, userRoutes);
app.use(`/${version}/api`, categoryRoutes);
app.get(`/${version}`,(req,res)=>{
    res.send('Hello')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
module.exports = app;
