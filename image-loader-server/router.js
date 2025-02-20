const express = require("express");
const router = express.Router();

router.get('/image', (req, res) => {
    const imageUrl = '/assets/ambulance.jpeg';
    res.status(200).json(imageUrl);
});

router.use('*', (req, res) => {
    res.status(404).send('Not Found');
});

module.exports = router;
