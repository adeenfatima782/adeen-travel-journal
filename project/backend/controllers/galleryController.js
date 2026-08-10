const Album = require('../models/Album');
const { getPagination, getSort } = require('../utils/queryHelpers');

const slugify = (text) =>
    text.toString().toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

// @route   GET /api/gallery  (public)
// Query params: ?search=hunza&tag=Mountains&sort=-views&page=1&limit=12
const getAlbums = async (req, res) => {
    try {
        const { search, tag } = req.query;
        const { page, limit, skip } = getPagination(req.query);
        const sort = getSort(req.query.sort, '-createdAt');

        const filter = { published: true };
        if (tag) filter.tags = tag;
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: 'i' } },
                { region: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { tags: { $regex: search, $options: 'i' } },
            ];
        }

        const total = await Album.countDocuments(filter);
        const albums = await Album.find(filter).sort(sort).skip(skip).limit(limit);

        res.status(200).json({ success: true, count: albums.length, total, page, pages: Math.ceil(total / limit), albums });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   GET /api/gallery/:slug  (public)
const getAlbumBySlug = async (req, res) => {
    try {
        const album = await Album.findOne({ slug: req.params.slug });
        if (!album) return res.status(404).json({ success: false, message: 'Album not found' });
        res.status(200).json({ success: true, album });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   GET /api/gallery/admin/all  (admin)
const getAllAlbumsForAdmin = async (req, res) => {
    try {
        const albums = await Album.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: albums.length, albums });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   POST /api/gallery  (admin)
const createAlbum = async (req, res) => {
    try {
        const body = req.body;
        if (!body.slug && body.name) body.slug = slugify(body.name);
        const album = await Album.create(body);
        res.status(201).json({ success: true, album });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'An album with this slug already exists' });
        }
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   PUT /api/gallery/:id  (admin)
const updateAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!album) return res.status(404).json({ success: false, message: 'Album not found' });
        res.status(200).json({ success: true, album });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   DELETE /api/gallery/:id  (admin)
const deleteAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndDelete(req.params.id);
        if (!album) return res.status(404).json({ success: false, message: 'Album not found' });
        res.status(200).json({ success: true, message: 'Album deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   PATCH /api/gallery/:albumId/photos/:photoId/like  (public heart button)
const togglePhotoLike = async (req, res) => {
    try {
        const { increment = true } = req.body;
        const album = await Album.findOne({ _id: req.params.albumId, 'photos._id': req.params.photoId });
        if (!album) return res.status(404).json({ success: false, message: 'Photo not found' });

        const photo = album.photos.id(req.params.photoId);
        photo.likes += increment ? 1 : -1;
        await album.save();

        res.status(200).json({ success: true, likes: photo.likes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getAlbums,
    getAlbumBySlug,
    getAllAlbumsForAdmin,
    createAlbum,
    updateAlbum,
    deleteAlbum,
    togglePhotoLike,
};
