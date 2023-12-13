const express = require("express");
const cors = require("cors");
const connectToDb = require("./utils/dbConnection");

const taskRoutes = require("./routes/taskRoutes")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  try {
    res.status(200).send("welcome to the express server!!");
  } catch (error) {
    console.log(error);
  }
}); 


app.use('/api/taskmanager', taskRoutes);

app.listen(4000, async(err) => {
  if (!err) {
    await connectToDb();
    console.log("server is running on port", 4000);
  } else {
    console.log("some error happened while listening to the server", err);
  }
});
