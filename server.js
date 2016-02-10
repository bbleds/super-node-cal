const express = require("express");
const path = require("path")
const sassMiddleware = require('node-sass-middleware');
const app = express();
const PORT = process.env.PORT || 3000;

//configure views engine for jade
app.set("view engine", "jade")

//sass middleware -> sass will be compiled when linked in views/header.jade
app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    //this is whitespace indent rather than curly braces
    indentedSyntax: true,
    debug: true,
    outputStyle: 'compressed'
}));

//look for files in /public directory
app.use(express.static(path.join(__dirname, '/public')));

// get year and month generator modules
const {outputCal, calHeaderOutput, calBodyOutput} = require("./public/javascripts/monthGen.js");
const {makeYear} = require("./public/javascripts/yearGen.js");

// API for generating years
app.get("/api/:year", (req, res)=>{
	const string = `<pre>${makeYear(req.params.year).toString()}</pre>`;
	res.send(`${string}`)
});

// API for generating the month of a specific year
app.get("/api/:year/:month", (req, res)=>{
	const string = `<pre>${outputCal(parseInt(req.params.month),parseInt(req.params.year))}</pre>`;
	console.log(string);
	res.send(`${string}`)
});

// index/default route
app.get("/", (req, res)=>{
	res.render("index")
});

app.listen(PORT, ()=>{
	console.log(`Listening on port: ${PORT}`);
});
