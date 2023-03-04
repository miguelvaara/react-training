const http = require('http')

const server = http.createServer((request, response) => {

    const book = {
        author: "Suvi-Tuulia Armas",
        title: "Viheltelyn suuri taito"
    }

    response.setHeader('Content-Type', 'application/json')
    response.write(JSON.stringify(book))
    response.end()
})

server.listen(8000)