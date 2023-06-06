const router = require("express").Router();
const { Clothing } = require("../models");

// GET all galleries for homepage
router.get("/", async (req, res) => {
  try {
    res.render("homepage", { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET clothing for men
router.get("/men", async (req, res) => {
  try {
    const dbClothingData = await Clothing.findAll({
      where: {
        genId: 1,
      }
    });

    const clothing = dbClothingData.map((clothing) =>
      clothing.get({ plain: true })
    );

    res.render("gallery", {
      clothing,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET clothing for women
router.get("/women", async (req, res) => {
  try {
    const dbClothingData = await Clothing.findAll({
      where: {
        genId: 2,
      }
    });

    const clothing = dbClothingData.map((clothing) =>
      clothing.get({ plain: true })
    );

    res.render("gallery", {
      clothing,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
