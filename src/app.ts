import express, { Express, Request, Response } from 'express';
import * as userController from './controllers/UserController';
import bodyParser from 'body-parser';

const PORT = 80;

const app: Express = express();
// app.use(express.bodyParser())
app.listen(PORT, () => { console.log(`listening to port ${PORT}!`); });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// --------------------- get ---------------------
app.get('/user', userController.getAllUsers);
app.get('/user/:id', userController.getUserById);

// --------------------- post --------------------
app.post('/user', userController.postCreateNewUser);
app.post('/user:id', userController.postUpdateExistingUserById);



