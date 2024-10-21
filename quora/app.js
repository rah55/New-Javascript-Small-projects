const express = require("express");
const app = express();
const methodOverride=require("method-override");
const port = 8080;
const { v4: uuidv4 } = require("uuid");

const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(), //this function create unique IDs,
    username: "Apna college",
    content: "this is apna college ",
  },
  { id: uuidv4(), username: " College", content: "college content " },
  { id: uuidv4(), username: "School", content: "School content " },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  console.log(post);
  res.render("show.ejs", { post });
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
  res.redirect("/posts");
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent =req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content=newContent;
 console.log(post);
 res.redirect("/posts");
});

app.post("/posts", (req, res) => {
  const { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });

  res.redirect("/posts");
});

app.listen(port, () => {
  console.log("server running successfully");
});
