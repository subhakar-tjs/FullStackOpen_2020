const { response } = require('express')
const http = require('http')
const morgan = require('morgan')
const express = require('express')
const app = express()

app.use(express.json())

morgan.token('post', (request) => {
  if (request.method === 'POST')
    return JSON.stringify(request.body)
  else
    return ''
})
morgan.format('postFormat', ':method :url :status :res[content-length] - :response-time ms :post')
app.use(morgan('postFormat'))

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "645-568-2014"
      },
      {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
      },
      {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
      },
      {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
      }
  ]

  app.get('/', (request, response) => {
    response.send('<h1>Phonebook Backend</h1>')
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })
  
  app.get('/info',(request,response) => {
    response.send(`<p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date}</p>`)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    
    if (person) {
      response.json(persons)
    } else {
      response.status(404).end()
    }
  })

  const generateId = () => {
    let id = Math.floor(Math.random() * 1001);
    const usedIds = persons.map(person => person.id);

    while (usedIds.find(usedId => usedId === id)) {
        id = Math.floor(Math.random() * 1001);
    }
    return id;
}

  app.post('/api/persons', (request, response) => {
    const body = request.body
    if (!body.name || !body.number) {
        return response.status(404).json({
            error: 'missing name or number'
        });
    }
    else if (persons.find(person => person.name.toLowerCase() === body.name.toLowerCase())) {
        return response.status(404).json({
            error: 'name must be unique'
        });
    }
    const person = {
      
      id: generateId(),
        name: body.name,
        number:body.number
        
    }

    persons = persons.concat(person);
    response.json(person);
});

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)
  
    response.status(204).end()
  })

  


  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

 