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

  // Response data
  const data = {
    color: '#f27f04',
    head_url: 'data:image/svg+xml;base64,PHN2ZyBpZD0icm9vdCIgdmlld0JveD0iMCAwIDcyIDcyIiB4bWxucz0iaHR0cDovL3d3dy53My5v%0D%0AcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSAiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+%0D%0ACiAgPHBhdGggZD0ibSAzOS45LDAgMCw4LjEgOCwwIDAsOCA4LDAgMCw4IDguMSwwIDAsOCA4LDAg%0D%0AMCw4IC04LDAuMSAwLDcuNiAtNy45LDAgLTAuMSwwLjIgMCw3LjggLTcuOSwwIC0wLjEsMC4yIDAs%0D%0ANy44IC04LDAgTCA0MCw3MiAwLDcyIDAsMCAzOS45LDAgWiBNIDMuOCw1OC4xIFoiIC8+Cjwvc3Zn%0D%0APgo=', // optional, but encouraged!
    taunt: "Sssssseee you ssssoon sssssuckerssss!", // optional, but encouraged!
  }

  return response.json(data)
})

// Handle POST request to '/move'
app.post('/move', (request, response) => {
  // NOTE: Do something here to generate your move

  // Response data

  const data = {
    move: 'left'
  
    taunt: 'Move ssssnakesssss, get out the way!', // optional, but encouraged!
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
