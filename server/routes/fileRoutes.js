const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../middleware/authMiddleware');
const fileController = require('../controllers/fileController');

const upload = multer({
    storage: multer.memoryStorage()
});

router.post('/', auth, upload.single('file'), fileController.uploadFile);
router.get('/', auth, fileController.getFiles);

module.exports = router;