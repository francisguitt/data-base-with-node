import express from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import mainRouter from '../src/routes/index.js';
dotenv.config();
const app = express();



app.set('view engine', 'mustache');
app.set('views', path.join(path.resolve('./src'), 'views'));
app.engine('mustache', mustache());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(mainRouter);

app.use((req, res) => {
    res.send(' Ops ! Pagina nao encontrada');
})

app.listen(process.env.PORT, () => {
    console.log(`Running on ${process.env.PORT}`)
})
