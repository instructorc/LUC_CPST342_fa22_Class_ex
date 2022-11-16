const express = require('express')
const app = express()
const port = 3000

/**To serve static files such as images, CSS files, and JavaScript files, create a folders
* and include the below statement.  The below statement assumes that I have a folder named assets
**/
app.use(express.static('assets'))

// view engine setup
app.set("view engine", "hbs");

// parse application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', function (req, res) {
	console.log("Sent as a get request");

	res.render('home', { 
        title: "Routing in Action!",
        class: "CPST 342 Intro. to Web"
    })
})

app.get('/users/:id', function (req, res) {
	//Getting id parameter
	var id = req.params.id;
	console.log("Sent as a get request");
	res.render('home', { title: "Routing in Action!", user_id : id})
})

app.get('/contact', function (req, res) {

	res.render( 'contact', {title : "Contact Page"})
 })

 app.get('/getjson', function (req, res) {

	res.json({"name": "Somebody"});
 })


 app.post('/submit', function (req, res) {
	//Getting body parameters
	var data = req.body;
	var firstName = data.fname;
	var lastName = data.lname;
	var id = data.id;

	console.log("Sent as a post request");
	console.log(firstName + " " + lastName + " " + id );
	res.render( 'userinfo', {
        title : "User Info. Page",
        first : firstName,
        last: lastName,
        id : id
    })
 })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))