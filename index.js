const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')
const app = express()
const {
  fallbackHandler,
  notFoundHandler,
  genericErrorHandler,
  poweredByHandler
} = require('./handlers.js')

// For deployment to Heroku, the port needs to be set using ENV, so
// we check for the port number in process.env
app.set('port', (process.env.PORT || 9001))

app.enable('verbose errors')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(poweredByHandler)

// --- SNAKE LOGIC GOES BELOW THIS LINE ---

// Handle POST request to '/start'
app.post('/start', (request, response) => {
  // NOTE: Do something here to start the game
	
	// add in image
	// https://upload.wikimedia.org/wikipedia/commons/f/f2/Citrus_reticulata.jpg

  // Response data
  const data = {
    color: '#F4A442',
    head_url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Citrus_reticulata.jpg', // optional, but encouraged!
    taunt: "Gonna eat you ssssssuckers!", // optional, but encouraged!
  }


  return response.json(data)
})

// Handle POST request to '/move'
app.post('/move', (request, response) => {
	
	
	
	
  // NOTE: Do something here to generate your move
function rand(){test=Math.floor(Math.random() * 6);
		
	
		if(test===3||test===4){
	test=Math.floor(Math.random() * 6);
	if(test===0){
		return "left";
		
	}
	if(test===1){
		return "left";
		
	}
	if(test===2){
		return "right";
		
	}
	if(test===3){
		return "right";
		
	}
	if(test===4){
		return "down";
		
	}
	if(test===5){
		return "down";
		
	}
		}
		else{
			return "up";
		}
	}
/*
var data = bottle.request.json;
function choice(data) {
boardWidth = data.get('width');
boardHeight = data.get('height');
var i = 0;
var x = 1;
var k = 0;
var dontMove;
var usX;
var usY;
while(data[i].body!=null){
	dontMove[i]=data[1].body.data[i]x;
	dontMove[x]=data[2].body.data[x]y;
	x=x+2;
	i=i+2;
}
while(data[k].body!=null){
	if(data[k].name=='Hek the Snek'){
	usY = data[k].body.data[0]y;
	usX = data[k].body.data[0]x;
	}
}
for(let i = 0; i < dontMove.length();i+2){
let k = 1;
	if(usX + 1 != dontMove[i]&&usX != boardWidth){
		return "right";
	}
	if(usY + 1 != dontMove[k]&&usY != boardHeight){
		return "down";
	}
	if(usX - 1 != dontMove[i]&&usX != 0){
		return "left";
	}
	if(usY - 1 != dontMove[i]&&usY != 0){
		return "up";
	}
	k = k + 2;
}
}
*/
  // Response data
  const data = {
    move: rand(), // one of: ['up','down','left','right']
    taunt: 'Get forked!', // optional, but encouraged!
  }

  return response.json(data)
})

// --- SNAKE LOGIC GOES ABOVE THIS LINE ---

app.use('*', fallbackHandler)
app.use(notFoundHandler)
app.use(genericErrorHandler)

app.listen(app.get('port'), () => {
  console.log('Server listening on port %s', app.get('port'))
})
