var express = require('express')
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.use( function(req, res, next){
  const allowedOrigins = [
      'http://localhost:3000'
  ];

  const origin = req.headers.origin;


    if (allowedOrigins.includes(origin)) {
      res.header("Access-Control-Allow-Origin", origin); // restrict it to the required domain
    }

    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);

    res.header('Access-Control-Expose-Headers', 'Authorization')

  next();
})

app.get('/blog', function (req, res) {

  res.send([
      {
        id: 1,
        title: 'Daniel',
        description: 'Really cool',
        image: 'https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/20615730_889297681224540_3799234219074147602_o.jpg?oh=4bc4d4e1ab970d7c0f9d5276dd34dd91&oe=5B472C93',
        approved: false
      },
      {
        id: 2,
        title: 'CBP',
        description: 'oooo so amazing',
        image: 'https://s3.eu-central-1.amazonaws.com/globatiimages/production/ggblwvomcwznwxlyqfulmivepgcglqrxajdpxbstuzkqfurncs.jpg',
        approved: true
      }
  ]);
});

app.put('/blog', function (req, res) {
  // console.log(req.body);
  res.send(req.body);
});

app.post('/login', function(req, res) {
    app.post('/login', function(req, res) {
        console.log();
        if(req.body.username === 'hi' && req.body.password==='hi'){
            res.header('Authorization', 'HI!')
            res.send('success');
        }
        else{
            res.statusCode = 401;
            res.send('Unauthorized');
        }

    })
})



app.get('/receptionist', function (req, res) {
    res.send([
        {
            id: 1,
            title: 'Daniel',
            description: 'Really cool',
            image: 'https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/20615730_889297681224540_3799234219074147602_o.jpg?oh=4bc4d4e1ab970d7c0f9d5276dd34dd91&oe=5B472C93',
            approved: false
        },
        {
            id: 2,
            title: 'CBP',
            description: 'oooo so amazing',
            image: 'https://s3.eu-central-1.amazonaws.com/globatiimages/production/ggblwvomcwznwxlyqfulmivepgcglqrxajdpxbstuzkqfurncs.jpg',
            approved: true
        }
    ]);
})
 
app.listen(8081);
