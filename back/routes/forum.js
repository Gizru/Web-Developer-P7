const express = require('express');

const router = express.Router();

const forumCtrl = require('../controllers/forum');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');


router.post('/', forumCtrl.createForum);

router.put('/', forumCtrl.postSeen);

router.get('/', forumCtrl.getForums);

//router.put


module.exports = router;