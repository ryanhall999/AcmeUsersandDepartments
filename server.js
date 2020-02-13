const express = require('express');
const app = express();
const db = require('./db');
app.use(require('cors')());

app.get('/api/departments', (req, res, next)=> {
  db.readDepartments()
    .then( departments => res.send(departments)) 
    .catch(next);
});

app.get('/api/users', (req, res, next)=> {
  db.readUsers()
    .then( users => res.send(users)) 
    .catch(next);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));
