const express = require("express");
const router = express.Router();
const { generateImage } = require("../controllers/generateimage");

router.post("/generateImage", generateImage);

module.exports = router;
