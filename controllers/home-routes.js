const router = require('express').Router();
const { Clothing } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbClothingData = await Clothing.findAll({
      include: [
        {
          model: Piece,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const allClothing = dbClothingData.map((clothing) =>
      clothing.get({ plain: true })
    );
    res.render('homepage', {
      allClothing,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get('/clothing/:id', async (req, res) => {
  try {
    const dbClothingData = await Clothing.findByPk(req.params.id, {
      include: [
        {
          model: Piece,
          attributes: [
            'id',
            'name',
            'price',
            'genId',
          ],
        },
      ],
    });

    const clothing = dbClothingData.get({ plain: true });
    res.render('clothing', { clothing, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
