require('dotenv').config();
const express = require('express');
const cors = require('cors');
const UsersRouter = require('./routes/UsersRouter');
const TasksRouter = require('./routes/TasksRouter');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/users', UsersRouter);

app.use('/tasks', TasksRouter);

app.listen(PORT, () => { console.log(`Ouvindo a porta ${PORT}`); });
