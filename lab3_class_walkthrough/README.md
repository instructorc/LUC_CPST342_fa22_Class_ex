#  Nodejs Express Grocery List App - Adding Update Feature (Lab 3)
You are going to extend the functionality of an existing application by adding an update feature to the application provided. 

![Image of Lab 3 Functionality](https://instructorc.github.io/site/slides/logic/images/node/lab3-review.gif)
## Requirements

### Step 1 - Setup project folder and start-up server
1.  Pull down the contents of your assigned repository and install the necessary dependencies need to run the application.  The package.json file has already been created and identifies the packages your repository will depend upon.
2.  Start the server and make sure you are able to create and delete grocery items.

### Step 2 - Adjust the front-end code to include an Update button
Listed below are a few steps that will help you accomplish adding an Update button
1.  Navigate to the link below and select a button to add to your HTML code.
	1.  [Link to Bootstrap Button Options](https://getbootstrap.com/docs/4.0/components/buttons/)
    2.  Select one of the from the  For example, in the code below, I selected the warning button and added the text **"Update"** between the opening and closing button element.
        ```html
         <button type="button" class="btn btn-warning">Update</button>
        ```

	3.  Add a new form element similar to the delete button and add the button as a child element. Your code should look similar to what's below.
        ```html
         <form action="/[ADD YOUR OWN UPDATE PATH]" method="[ADD THE TYPE OF METHOD YOU PREFER - EITHER GET OR POST">
            <button name="deleterecord" id="deletenow" type="submit" class="btn btn-danger" value="{{this.itemID}}">DELETE</button>
         </form>
        ```
	4. You will need to update the action path and method values based on how you create your route in step 3.
    5. Make sure your update button has ```{{this.itemID}}``` specified for the value.  This is necessary so that we identify which record to update.
2.  Save your code start up the server and visual inspect to make sure the button properly displays next to the delete button. 

### Step 3 - Create the database function that allows you to execute the UPDATE SQL command
1.  Navigate to the database.js file and include statements that will allow you to execute an update on a specific record. An example of what your route might look like is listed below.
    ```javascript
    let updateItem = (item_name, item_count, res) =>{
    var updateGroceryListItem = '[YOUR SQL STATEMENT]'
    
    db.run(updateGroceryListItem, function(err){

    }
    ```
2. Make sure your function properly makes a call to the database before implementing it into a route.
3. Make sure the function is able to be exported to different files.
### Step 4 - Define a Route/URL path
1.  Navigate to the app.js and create a route that will allow you to update a selected item. An example of what your route might look like is listed below.
    ```javascript
      app.post('/update_item', function (req, res) {

      })
    ```
		
### Step 5 - Implement functionality to update a record. [Stretch Requirement]
There are a number of ways you can go about achieving this objective.  Think creatively about a solution and plan out your logic before attempting to implement the functionality.  This would be a good opportunity to create a new branch and experiment with different ways in which you can allow a record to be updated.  Listed below are a few ideas to get you started.
	
1.  When the Update button is clicked, you can have the end-user navigate to a different page to re-enter and update grocery item information.

2.  You can use the existing form used to create a record and change the action value to a new route. This would require the use of JavaScript and the ability to change the attribute value.
	
3. You can add an entirely new form on the index page that would be used solely to update a record.  This is probably the easiest way to implement functionality, but not user-friendly. 


### STEP 6 - Extra Credit (2 Points) 
1.  Add a new column to your database table.  The new column will allow the end user to add a description for each item.

### STEP 7 - GitHub Repository
1.  Adjust README.md file at the end to include the date of completion and course information.

### STEP 8 - Submission
1.  Comment your name to the app.js file and 
2.  Make sure your master branch is clean and push up your final changes.
3.  In Sakai, submit the URL to your repository

### Lab Resources
The lecture videos listed under week 5 will walk you through how the application is built.

[SQLite Update Example](https://www.sqlitetutorial.net/sqlite-update/)
