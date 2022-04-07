const express = require('express')
const req = require('express/lib/request')
const PORT = process.env.PORT || 3001

const app = express()
//  Your Code Here

//GET Route
app.get('/hello', (req, res) => {
    console.log('Your in the /Hello route handlers')
    res.send('Howdy')
})

app.get('/dogs', (req, res) => {
    console.log('looked up route /dogs')
    res.send('Golden retrievers are the best.')
})

app.get('/cats/:catName', (req, res) => {
    console.log('eww  cats')
    res.send({ msg: `My favorite cat breed is ${req.query.catName}`})
})

//Post Route
app.post('/hello', (req, res) => {
    console.log('youve sent a post request to the /hello endpoint.')
    res.send({ msg: 'Great post!' })
})

app.post('/towns', (req, res) => {
    console.log('you have snet a post request to the /towns')
    res.send({ msg: 'Boulder, Colorado'})
})

//Query Params ex

app.get('/find', (request, response) => {
    console.log(
      `Finding someone with a name of ${request.query.myName} and an age of ${request.query.myAge}`
    )
    response.send({
      msg: `${request.query.myName} is ${request.query.myAge} years old.`
    })
  })

// Put Route

app.put('/profile/update/:username', (req, res) => {
    res.send(`User profile with the username of ${req.params.username} was updated`)
})

// Delete

app.delete('/tacos', (req, res) => {
    res.send(`I deleted the ${res.query.type} with an id of ${res.query.tacoId}`)
})



// End Your Code Here
app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`))
