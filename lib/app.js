const Color = require('./models/Color');

//routes

const express = require('express');
const app = express();
// const Tweet = require('./lib/models/Tweet');
app.use(express.json());

// Tweet.create([...Array(10000)].map(() => ({
//   handle: chance.twitter(),
//   text: chance.sentence(),
//   tags: [chance.animal(), chance.animal(), chance.name()]
// })))
//   .then(() => console.log('done'));



// async function allCrudMethods() {
//   // C - POST
//   const createdTweet = await Tweet.create({
//     handle: 'rover',
//     text: 'I like bones',
//     tags: ['breakfast']
//   });

//   // R - GET
//   const aSingleFoundTweet = await Tweet.findById(createdTweet._id);
//   const allFoundTweets = await Tweet.find();

//   // U - PUT
//   const updatedTweet = await Tweet.findByIdAndUpdate(aSingleFoundTweet._id,
//     { text: 'I like tennis balls' },
//     { new: true });

//   // D - DELETE
//   const deletedTweet = await Tweet.findByIdAndDelete(aSingleFoundTweet._id);
// }
const color = new Color({
  name: 'newColor',
  red: 100,
  green: 100,
  blue: 100
});

app.get('/', (req, res) => {
  res.send('hello');
});

// app.post('/hello', (req, res) => {
//   res.send(req.body);
// });

app.get('/api/colors', (req, res) => {
  res.send(color);
});

app.post('/api/post', async(req, res) => {
  const { name, red, green, blue } = req.body;
  const createdColor = await Color.create({
    name,
    red,
    green,
    blue
  });
  res.send(createdColor);
});
// get all
app.get('/api/colors/:id', async(req, res) => {
  const getOneColor = await Color.findById(req.params.id);
  res.send(getOneColor);
});
//get by id

//update by id

//delete by id


module.exports = app;
