const express = require('express');
const router = express.Router();
const { contactForm, contactBlogAuthorForm } = require('../controllers/form');

// validators
const { runValidator } = require('../validators');
const { contactFormValidator } = require('../validators/form');

router.post('/contact', contactFormValidator, runValidator, contactForm);
router.post('/contact-blog-author', contactFormValidator, runValidator, contactBlogAuthorForm);

module.exports = router;