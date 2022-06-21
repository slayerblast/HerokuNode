
const app = require('./app');


app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
    console.log('Server écoute sur le port 3000')
})