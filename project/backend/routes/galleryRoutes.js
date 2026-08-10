const express = require('express');
const router = express.Router();
const {
    getAlbums,
    getAlbumBySlug,
    getAllAlbumsForAdmin,
    createAlbum,
    updateAlbum,
    deleteAlbum,
    togglePhotoLike,
} = require('../controllers/galleryController');
const { protect } = require('../middleware/auth');
const validate = require('../middleware/validate');
const { albumRules } = require('../validators/contentValidators');

router.get('/admin/all', protect, getAllAlbumsForAdmin);

router.get('/', getAlbums);
router.patch('/:albumId/photos/:photoId/like', togglePhotoLike);
router.get('/:slug', getAlbumBySlug);

router.post('/', protect, albumRules, validate, createAlbum);
router.put('/:id', protect, updateAlbum);
router.delete('/:id', protect, deleteAlbum);

module.exports = router;
