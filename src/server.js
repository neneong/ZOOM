import express, { application } from "express"

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + "/views");
app.use("/public", express.static(__dirname+"/public"));
app.get("/", (req, res)=>res.render("home"));
app.get("/*", (req, res)=>res.redirect("/"));

const handleListen = () => console.log("LISTENING ON http://localhost:3000")

app.listen(3000, handleListen);
