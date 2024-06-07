const express = require('express')
const app = express() //declaring express inside this variable, we can call express functions with this variable//
const path = require ('path')
const PORT = process.env.PORT || 3500;
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

const  errorHandler  = require('./middleware/errorHandler');
const {logger} = require('./middleware/logEvents');
const { callbackify } = require('util');
const { error } = require('console');


app.use(cors(corsOptions));

app.use('/',express.static(path.join(__dirname,'./public')))
// to access static files(like css files) for subdir folder too, use the below snippet
app.use('/subdir',express.static(path.join(__dirname,'./public'))) 

app.use(logger) 
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use('/', require('./routes/root'))
app.use('/subdir', require('./routes/subdir'))
app.use('/employees', require('./routes/api/employee'))


// app.get('/*', (req, res) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
// }) we can use the below  snippet to redirect and show 404 error

app.all('*', (req, res) => {
    res.status(404);
    if(req.accepts('html')){
    res.sendFile(path.join(__dirname, 'views', '404.html')) 
    } else if(req.accepts('json')) {
        res.send({"error" : "404 not found"})
    } else {
        res.type('txt').send('404 not found');
    }
})


app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
 