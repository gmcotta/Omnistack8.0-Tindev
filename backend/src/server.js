const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://gustavo:gustavo@cluster0-br2p8.mongodb.net/tindev_w10?retryWrites=true&w=majority',
{useNewUrlParser: true})

const routes = require('./routes');
const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);