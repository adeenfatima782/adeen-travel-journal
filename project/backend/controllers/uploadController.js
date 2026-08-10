// @route   POST /api/upload  (admin only)
// form-data field name: "image"
const uploadImage = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'No image was provided' });
    }

    // Build the image public URL from the server address
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const url = `${baseUrl}/uploads/${req.file.filename}`;

    res.status(201).json({ success: true, url });
};

module.exports = { uploadImage };
