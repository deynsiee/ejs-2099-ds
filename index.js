/* 
EJS Templating Library
Salalila, Dayna Micaela M.
 WD-202
*/
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    name: 'Salalila, Dayna Micaela M.',
    address: '48 General Luna Street, Babo Sacan, Porac, Pampanga',
    bday: 'December 26, 2002',
    email: 'dmsalalila@student.hau.edu.ph',
    tnum: '(045) 649 - 5255',
    elem: '2009 - 2015 Saint Catherine Academy : CCE Porac',
    hs: '2015 - 2021 Saint Catherine Academy : CCE Porac',
    col: '2021 - Present Holy Angel University',
    language: 'English & Tagalog',
    profi: 'MS Office, Programming in Java and Python',
  });
});

//serve static files
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
