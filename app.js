const express = require('express');
const conectDB = require('./config/db');

const app = express();

conectDB();
app.use(express.json());
app.use('/api/users', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/post'));

const PORT = 5000||process.env.PORT;
app.listen(PORT,()=>{console.log(`${PORT}`+' is working')});