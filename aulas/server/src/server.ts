import express from 'express'
import cors from 'cors'
import { routes } from './routes';

/*
GET, POST, PUT, PATCH, DELETE

GET = Buscar informacoes
POST = Cadastrar informacoes
PUT = Atualizar informacoes de uma entidade
PATCH = Atualizar informacoes de uma UNICA entidade
DELETE = Deletar uma informacao
*/

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('HTTP Server is running');
});