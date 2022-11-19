require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { DataSource } = require('typeorm')

const app = express();
const myDataSource = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/ping', (req, res) => {
  res.json({ messgae: 'pong' });
})

/*
[TEST]
각 브랜치에 맞는 API를 34번 라인부터 작성해주세요.
feature/signin 브랜치의 경우 app.post('/users/signin', ...)
feature/signup 브랜치의 경우 app.post('/users/signup', ...)
*/


app.listen(PORT, () => {
  myDataSource.initialize()
    .then(() => {
      console.log("DB Connection has been initialized")
    })
    .catch(() => {
      console.log("DB Connection has been failed")
    })

  console.log(`Listening to request on localhost:${PORT}`);
})