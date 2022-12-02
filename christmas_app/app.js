const express = require('express')
const app = express()
const port = 3000

var sqlite3 = require('sqlite3').verbose() //npm install sqlite3

//Creating a new database instance - Indication of connected database
//Before peforming any operations to database, make sure database is connected.
let db = new sqlite3.Database('./christmas_list.db', sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
	  // Cannot open database
	  console.error(err.message)
	  throw err
	}else{
		//Successful database connection
		console.log('Connected to the SQLite database.') 
	}
});

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
    getAllItems(res);
	
})

// Route to create a grocery list item
app.post('/create_list_item', function (req, res) {

    
	//Getting body parameters
	const { item_name, item_priority} =req.body;
    console.log(item_name + " " + item_priority);

    var createChristmasListItem = 'INSERT INTO List (item_name, item_priority) VALUES (?,?)' //Parameterized Query
    var params = [item_name, item_priority];
    
    db.run(createChristmasListItem, params, function(err){

        if(err){
            return console.log(err.message);
        }


        getAllItems(res)
        console.log("Christmas List Item Created");
        console.log(`Rows inserted ${this.changes}`);
    })

	//Execute creatItems method
	//dbOperations.createItem(item_name, item_count, res);
    //res.render('index', {itemID: 12, item_count: 2, item_name: "Motorcyle"});

	
 })

 let getAllItems = (res) => {
    var getAllChristmasItems = 'SELECT itemID, item_name, item_priority FROM list';
    db.all(getAllChristmasItems, function(err, rows){
        if (err) {
         
            throw err;
          }
          /*rows.forEach((row) => {
            console.log(row.item_name);
          });*/
          console.log(rows);
          res.render('index', {rows})

    })
}

 // Route that allows me to delete a grocery list item
 app.post('/delete_item', function (req, res) {
    console.log("This coming from the delete route")
	//Getting body parameters
	const { deleterecord} = req.body;
    var deleteChristmasItem = 'DELETE FROM list WHERE itemID = ?'; //Parameterized
	
    var params = [deleterecord];

	db.run(deleteChristmasItem, params, function(err){
		if (err){
			return console.log(err.message);
		}
    

		console.log("Christmas List Item Deleted");
		console.log(`Rows deleted ${this.changes}`);	  
	});

	getAllItems(res)
	
 })

  // Route that allows me to delete a grocery list item
  app.post('/update_item', function (req, res) {
    
	//Getting body parameters
	const { updaterecordID} = req.body;

    var getChristmasItem = 'SELECT itemID, item_name, item_priority FROM list WHERE itemID = ?';
    var params = [updaterecordID];
    db.get(getChristmasItem, params, function(err, row){
        if (err) {
         
            throw err;
          }
          /*rows.forEach((row) => {
            console.log(row.item_name);
          });*/
          console.log(row);
          res.render('update', {row});

    })

   //STEP 1 Create a route called confirm update
           //STEP 2 - RUN A DATABASE FUNCTION THAT WILL UPDATE THAT SPECIFIC RECORD

           // STEP 3 - ROUTE BACK TO HOME PAGE  *HINT CONSIDER THE GETALLITEMS FUNCTION  *ANOTHER HINT PASS THE RES TO GETALLITEMS


	
 })





app.listen(port, () => console.log(`Example app listening on port ${port}!`))