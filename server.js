const express = require("express");
const mongoose = require("mongoose");
const Car = require("./Models/cars.model");
const server = express();
mongoose
  .connect(
    "mongodb+srv://rohit_6455:EOP3bMykY6hvP7zc@cluster0.hoftjje.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MONGo");
  })
  .catch((error) => {
    console.log(error);
  });


server.use(express.json());
server.get("/", function (req, res) {
  res.send("Hello Welcome to Car Junctions");
});


server.get("/car", async (req, res) => {
  try {
    const cars = await Car.find({});
    res.status(200).json(cars);
  } catch (error) {
    res.status(404).send("Car Not Found");
  }
});

server.get("/car/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);
    res.status(200).send(car);
  } catch (error) {
    res.status(404).send("Car Not Found");
  }
});


server.post("/car", async (req, res) => {
  try {
    console.log(req.body)
    const car = await Car.create(req.body);

    res.status(201).send(car);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Car Not Found");
  }
});

server.patch("/car/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findByIdAndUpdate(id, req.body);
    if (!car) {
      return res.status(404).send("Car Not Found");
    }
    res.send("Car Details Updated");
  } catch (error) {
    res.status(500).send("Car Not Found");
  }
});

server.delete("/car/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findByIdAndDelete(id);
    if (!car) {
      return res.status(404).send("Car Not Found");
    }
    res.status(200).send("Deleted");
  } catch (error) {
    res.status(500).send("Car Not Found");
  }
});
server.listen(3000);
