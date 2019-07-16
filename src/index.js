const { server } = require('./app')

const port = process.env.PORT

server.listen(port, () => {
    console.log(`app listening to port ${port}`)
});