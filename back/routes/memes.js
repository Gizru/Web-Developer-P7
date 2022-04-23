const express = require('express');

const router = express.Router();

const memesCtrl = require('../controllers/memes');
const multer = require('../middleware/multer-config');


router.post('/', multer, memesCtrl.createMeme);

router.put('/', memesCtrl.memeSeen);

router.get('/', memesCtrl.getMemes);


module.exports = router;