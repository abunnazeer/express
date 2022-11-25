const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(con => {
    // console.log(con.connections);
    console.log('DB Connection Successful!');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is runing on ${port}`);
});
