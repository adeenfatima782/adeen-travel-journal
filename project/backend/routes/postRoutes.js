const express = require('express');
const router = express.Router();
const {
    getPosts,
    getPostBySlug,
    createPost,
    updatePost,
    deletePost,
    getAllPostsForAdmin,
    toggleLike,
} = require('../controllers/postController');
const { protect } = require('../middleware/auth');
const validate = require('../middleware/validate');
const { postRules } = require('../validators/contentValidators');

// Define the admin route first; otherwise "/admin/all" will be treated as ":slug"
router.get('/admin/all', protect, getAllPostsForAdmin);

// Public routes — BlogPage.jsx and PostDetail.jsx
router.get('/', getPosts);
router.patch('/:id/like', toggleLike);
router.get('/:slug', getPostBySlug);

// Admin only — create/edit/delete
router.post('/', protect, postRules, validate, createPost);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);

module.exports = router;
