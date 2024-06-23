const { Storage } = require('@google-cloud/storage');
const File = require('../models/File');
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();

const storage = new Storage({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
});
const bucket = storage.bucket(process.env.CLOUD_STORAGE_BUCKET);

exports.uploadFile = async (req, res) => {
    try {
        const blob = bucket.file(req.file.originalname);
        const blobStream = blob.createWriteStream({
            resumable: false
        });

        blobStream.on('error', (err) => {
            res.status(500).send({ message: err.message });
        });

        blobStream.on('finish', async () => {
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

            const file = new File({
                filename: req.file.originalname,
                url: publicUrl,
                user: req.user.id
            });

            await file.save();

            res.status(200).send({ file });
        });

        blobStream.end(req.file.buffer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getFiles = async (req, res) => {
    try {
        const files = await File.find({ user: req.user.id });
        res.json(files);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};