const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const { connect } = require("mssql");
const app = express();
const connection = require("./db");
const sql = require("mssql/msnodesqlv8");
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { execFile } = require("child_process");
const path = require("path");
const { exec } = require("child_process");

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(express.json());
app.use(express.static("public"));
app.use("/model", express.static("model"));

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);
///////////////////////

const scriptPath = path.join(__dirname, "model", "model.py");
// execFile("python", [scriptPath], (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(stdout);
// });

exec(`python ${scriptPath}`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
////////////////////////////

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});

app.get("/stations", (req, res) => {
  sql.connect(connection, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query(
      "select * from Stations order by len(Station_id), Station_id ;",
      function (err, response) {
        if (err) console.log(err);
        else res.send(response);
      }
    );
  });
});

app.get("/users", (req, res) => {
  sql.connect(connection, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query(
      "select * from Accounts order by len(Account_id), Account_id ;",
      function (err, response) {
        if (err) console.log(err);
        else res.send(response);
      }
    );
  });
});

app.post("/information", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  sql.connect(connection, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    try {
      request.query(
        `SELECT * FROM Accounts where Account_name = '${username}'`,
        function (err, result) {
          if (err) console.log(err);
          else {
            if (
              password ===
              result.recordsets[0].map((pass) => pass.Account_password)[0]
            ) {
              req.session.user = result.recordset[0];
              console.log(req.session.user);
              res.send(result.recordset[0]);
            } else {
              res.send({ message: "Wrong username/password combination!" });
            }
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  });
});

app.get("/information", (req, res) => {
  console.log(req.session.user);
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/deleteMember", (req, res) => {
  const data = req.body;

  sql.connect(connection, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query(
      `DELETE FROM Accounts WHERE Account_id='${data.id}'`,
      function (err, response) {
        if (err) console.log(err);
        else res.send(response);
      }
    );
  });
});

app.get("/deleteMember", (req, res) => {
  sql.connect(connection, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query(
      "select * from Accounts order by len(Account_id), Account_id ;",
      function (err, response) {
        if (err) console.log(err);
        else res.send(response);
      }
    );
  });
});

app.post("/deleteStation", (req, res) => {
  const data = req.body;

  sql.connect(connection, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query(
      `DELETE FROM Stations WHERE Station_id='${data.id}'`,
      function (err, response) {
        if (err) console.log(err);
        else res.send(response);
      }
    );
  });
});

app.get("/deleteStation", (req, res) => {
  sql.connect(connection, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query(
      "select * from Stations order by len(Station_id), Station_id ;",
      function (err, response) {
        if (err) console.log(err);
        else res.send(response);
      }
    );
  });
});
