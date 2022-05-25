const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
});

const mongoose = require('mongoose');
const methodOverride = require('method-override');
const dbPath = process.env.DB_PATH;
const dbOptions = {
    useNewUrlParser: true
};
const port = process.env.PORT || 5000;

const mainRouter = require('./Routes/moviesRoutes');
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('./public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(mainRouter);
mongoose.connect(dbPath, dbOptions)
    .then(() => console.log(`La base de données est connectée sur ${dbPath}`))
    .catch(err => console.log(err));
app.listen(port, console.log(`Notre serveur tourne sur http://localhost:${port}`));