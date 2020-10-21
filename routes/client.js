const express = require("express");
const Client = require("../model/Client");
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.get("/", async (req, res) => {});

router.post(
  "/",
  [check("name", "Name is Required").not().isEmpty()],
  async (req, res) => {
    console.log(res.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;
    const nameObj = {};
    try {
      if (name) nameObj.name = name;
      userPro = new Client(nameObj);
      await userPro.save();
      return res.json(nameObj);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
