const express = require("express");
const { createproduct } = require("../Controllers/productController");

const route = express.Router();

route.post("/", createproduct);

module.exports = route;