const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "public/uploads/" });

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("upload");
});
app.get("/search", (req, res) => {
  const search = req.query.term; // query string vs query params
  console.log(search);
  // selcet from producs where name like ${search}

  res.json({ result: "success", num: 98 });
});

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  let message = "Success!!";
  res.render("upload", { message: message, img: req.file.filename });
});

app.listen(3000);
