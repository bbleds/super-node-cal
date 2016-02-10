const express = require("express");
const path = require("path")
const app = express();
const PORT = process.env.PORT || 3000;

//configure views engine for jade
app.set("view engine", "jade")

//look for files in /public directory
app.use(express.static(path.join(__dirname, '/public')));

// index/default route
app.get("/", (req, res)=>{
	res.render("index")
});

app.listen(PORT, ()=>{
	console.log(`Listening on port: ${PORT}`);
});
