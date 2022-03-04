require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

//env file dependencies
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
//database connection
mongoose.Promise = global.Promise;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("Mongo connected successfully"))
  .catch((err) => console.log(err));

//imported model her

const { User } = require("./models/User.js");

//home route
app.get("/", (req, res) => {
  res.send("Welcome to Medpharma");
});

app.post("/new-consult", async (req, res, next) => {
  try {
    const user = new User(req.body);

    if (!user) {
      res.json({
        succes: false,
      });
    } else if (user) {
      user.save((err, doc) => {
        if (err) {
          throw new Error("Cannot create user");
        }
        res.json({
          success: true,
          doc: doc,
        });
      });
    }
  } catch (error) {
    next(error);
  }
});

//view all consultations

app.get("/all-consult", (req, res) => {
  User.find({}, (err, devs) => {
    if (err) {
      res.status(200).json({
        err: err,
      });
    }
    res.json({
      succes: true,
      docs: devs,
    });
  });
});

//get details of a single patient
app.get("/patient/:_id", (req, res, next) => {
  try {
    let { _id } = req.params;
    User.findOne({ id: _id }, (err, doc) => {
      if (err) {
        throw new Error("Patient does not exits");
      }
      res.status(200).json({
        succes: true,
        data: doc,
      });
    });
  } catch (error) {
    return next(error);
  }
});

//update patient information
app.put("/update-info/:_id", (req, res) => { 
  let { _id } = req.params;
  User.findByIdAndUpdate(
    { id: _id},
    req.body, 
    (err, doc) => {
      if (!err) {
        res.json({
          success: true,
          message: doc,
        });
      } else {
        res.json({
          success: false,
          message: err,
        });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
