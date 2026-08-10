const Post = require('../models/Post');
const { getPagination, getSort } = require('../utils/queryHelpers');

// Helper: title se slug banata hai (agar frontend admin form slug na bheje)
const slugify = (text) =>
    text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');

// @route   GET /api/posts  (public — for the BlogPage.jsx list)
// Query params: ?category=Travel Diaries&search=hunza&sort=-views&page=1&limit=9
const getPosts = async (req, res) => {
    try {
        const { category, search } = req.query;
        const { page, limit, skip } = getPagination({ ...req.query, limit: req.query.limit || 9 });
        const sort = getSort(req.query.sort, '-date');

        const filter = { published: true };
        if (category) filter.category = category;
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: 'i' } },
                { excerpt: { $regex: search, $options: 'i' } },
                { tags: { $regex: search, $options: 'i' } },
            ];
        }

        const posts = await Post.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(limit);

        const total = await Post.countDocuments(filter);

        res.status(200).json({
            success: true,
            count: posts.length,
            total,
            page: Number(page),
            pages: Math.ceil(total / limit),
            posts,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   GET /api/posts/:slug  (public — for PostDetail.jsx)
const getPostBySlug = async (req, res) => {
    try {
        // Use findOneAndUpdate to increment the view count in one query
        const post = await Post.findOneAndUpdate(
            { slug: req.params.slug },
            { $inc: { views: 1 } },
            { new: true }
        );
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }
        res.status(200).json({ success: true, post });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   PATCH /api/posts/:id/like  (public — for the heart button)
// body: { increment: true }  ya  { increment: false } (unlike)
const toggleLike = async (req, res) => {
    try {
        const { increment = true } = req.body;
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            { $inc: { likes: increment ? 1 : -1 } },
            { new: true }
        );
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }
        res.status(200).json({ success: true, likes: post.likes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   POST /api/posts  (admin only — admin dashboard "new post")
const createPost = async (req, res) => {
    try {
        const body = req.body;
        if (!body.slug && body.title) {
            body.slug = slugify(body.title);
        }
        body.author_ref = req.admin.id;

        const post = await Post.create(body);
        res.status(201).json({ success: true, post });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'A post with this slug already exists' });
        }
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   PUT /api/posts/:id  (admin only — admin dashboard "edit post")
const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }
        res.status(200).json({ success: true, post });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   DELETE /api/posts/:id  (admin only)
const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }
        res.status(200).json({ success: true, message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @route   GET /api/posts/admin/all  (admin only — shows both drafts and published posts)
const getAllPostsForAdmin = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: posts.length, posts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getPosts,
    getPostBySlug,
    createPost,
    updatePost,
    deletePost,
    getAllPostsForAdmin,
    toggleLike,
};
