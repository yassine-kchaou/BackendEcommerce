const express = require('express');
const mongoose = require('mongoose');
//pour acceder à la fichier .env
const dotenv = require('dotenv');
const categorieRouter=require('./routes/categorie.route');
const scategorieRouter=require('./routes/scategorie.route');
const articleRouter = require('./routes/article.route')



const app =express();

dotenv.config()
app.use(express.json());


// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD)
// dans le cas positive
.then(() => {console.log("DATABASECLOUD Successfully Connected");})
// dans le cas négative
.catch(err => { console.log("Unable to connect to DATABASECLOUD", err);
process.exit(); });

app.use ('/api/categories',categorieRouter)
app.use ('/api/scat',scategorieRouter)
app.use ('/api/article',articleRouter)


app.get('/',(req,res)=>{
    res.send('bonjourr!!!!')
})


app.listen(process.env.PORT,()=>{
    console.log("Server is listening on port "+process.env.PORT); });
module.exports = app;