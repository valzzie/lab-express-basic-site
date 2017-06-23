//We have to first require express so we can use it in our app.
const express= require("express");
//define what are valid pages that can be accessed in our application
const app= express();
//This is the name of the package that we installed for ejs.  npm install ejs --save
app.set('view engine','ejs');
//get static assets from the public/folder  aka: now users can see stuff in public folder
app.use(express.static('public'));
//ROUTE
let visitCount=0;
//the anonomous function below determines what happens when you visit pages
//a route is an address(url) that you can visit on this application
//the address we are referring to is localhost:3000/ aka: the home page of this app.
//when visit site in the browser we will be using a get request to this address and then run the code below.
app.get('/',(request,response, next)=>{
//this function determines the code that is run when you visit the address(url)
visitCount +=1;
console.log(visitCount + "people want to see Enrique.");// will see this console.log in the terminal
//send the browser the contents of views/home.ejs
response.render("home.ejs");
});
// now this is what happens when you visit the localhost:3000/about page
app.get('/about',(request,response,next) => {
  //sends the browser the contents of views/about.ejs
  response.render("about.ejs");
});

app.get('/photogallery',(request,response,next) => {
  response.render('photogallery.ejs');
});
//below says, stay running and wait for people to connect to you.
app.listen(3000);//the 3000 is from localhost:3000 so can't change it.  It goes to homepage.
//to run the page go to terminal and type: node app.js  (then can go to localhost:3000 to see changes)
