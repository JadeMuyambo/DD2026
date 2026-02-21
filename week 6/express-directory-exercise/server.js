//Load JSON from /data/directory.json into a variable named directory
let directory = require('./data/directory.json');


app.use(express.static(path.join(__dirname, 'public')));

// --------------------
// ROUTES
// --------------------

// A) LIST PAGE: GET /directory
// Renders the directory.handlebars view
// The view expects: { people: [...] }
app.get('/directory', (req, res) => {
  res.render('directory', { people: directory });
});

// B) DETAILS PAGE: GET /directory/:id
// Uses a *route parameter* (req.params.id)
// The view expects: { person: {...} }
app.get('/directory/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = directory.find(p => p.id === id);

  res.render('person', { person });

});

// C) RUNTIME ADD: GET /person/add
// Uses *query parameters* (req.query)
// Example request:
// /person/add?id=999&first_name=Ana&last_name=Gomez&email=a@b.com&address=1%20Main&city=Miami&state=FL&zip=33142
// Adds to directory array in memory only (does not write to JSON file)
app.get('/person/add', (req, res) => {
 
  // Add person to memory
directory.push({
id: parseInt(req.query.id),
first_name: req.query.first_name,
last_name: req.query.last_name,
email: req.query.email,
address: req.query.address,
city: req.query.city,
state: req.query.state,
zip: req.query.zip,
});

});
