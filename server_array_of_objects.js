const express = require("express");
const server = express();
const cars = [
  {
    id: 0,
    name: "Ford Mustang",
    brand: "Ford",
    price: "27000$",
    fuelType: "Petrol",
    transmission: "Automatic or Manual",
    imageURL:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220119032855_Mustang_Sketch.jpg&w=700&q=90&c=1",
  },
  {
    id: 1,
    name: "Chevrolet Corvette",
    brand: "Chevrolet",
    price: "60000$",
    fuelType: "Petrol",
    transmission: "Automatic or Manual",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/2021_Chevrolet_Corvette_C8.jpg",
  },
  {
    id: 2,
    name: "Volkswagon Beetle",
    brand: "Volkswagon",
    price: "20000$",
    fuelType: "Petrol",
    transmission: "Automatic or Manual",
    imageURL:
      "https://uploads.vw-mms.de/system/production/images/vwn/007/966/images/55b7c491ac9c323f2ab4709f6da6edab14d9e767/DB2012AU00293_web_1600.jpg?1649147241",
  },
  {
    id: 3,
    name: "Toyota Camry",
    brand: "Toyota",
    price: "24000$",
    fuelType: "Petrol",
    transmission: "Automatic or Manual",
    imageURL:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/10926/1690544712715/front-left-side-47.jpg",
  },
  {
    id: 4,
    name: "Honda Civic",
    brand: "Honda",
    price: "21000$",
    fuelType: "Petrol",
    transmission: "Automatic or Manual",
    imageURL:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148156.jpeg?q=80&q=80",
  },
];
server.use(express.json());
server.get("/", function (req, res) {
  res.send("Hello Welcome to Car Junctions");
});


server.get("/cars", function (req, res) {
  res.send(cars);
});

server.get("/cars/:id", function (req, res) {
  const id = cars.find((x) => x.id === Number(req.params.id));
  if (id) {
    res.send(id);
  } else {
    res.status(404).send("Car Not Found");
  }
});

server.get("/cars/brand/:brand", function (req, res) {
    console.log('inside brand')
  const brand = cars.find((z) => z.brand === req.params.brand);
  if (brand) {
    res.send(brand);
  } else {
    res.status(404).send("Car Not Found");
  }
});




server.post("/cars", function (req, res) {
  const newCar = req.body;
  cars.push(newCar);
  res.status(201).send("Car Added");
});

server.patch("/cars/:id", function (req, res) {
  const id1 = req.params.id;
  const data = req.body;
  const index = cars.findIndex((c) => c.id.toString() === id1);
  if (index > -1) {
    cars[index] = {
      ...cars[index],
      ...data,
    };
    res.send("Updated");
  } else {
    res.status(404).send("Car Not Found");
  }
});

server.delete("/cars/:id", function (req, res) {
  const index = cars.findIndex((t) => t.id == req.params.id);
  if (index > -1) {
    cars.splice(index, 1);
    res.send("Car Deleted");
  } else {
    res.status(404).send("Car Not Found");
  }
});
server.listen(3001);
