/**
 * @file homeRoutes.js
 * Implements the home page API routes to render handlebars files
 * 
 * @see  ../views/homepage.handlebars
 */

const router = require('express').Router();
const { Post, User, Comment } = require('../models');

/**
 * @route GET '/' 
 * Finds and returns all Post data in the database, including associated User and Comment data
 */
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: ['id', 'title', 'content', 'created_date'],
            order: [['created_date', 'DESC']],
            include: [
                {
                    model: User,
                    attributes: ['id', 'username']
                },
                {
                    model: Comment,
                    attributes: ['id', 'content', 'created_date'],
                    include: {
                        model: User,
                        attributes: ['id', 'username']
                    }
                }
            ]
        });
    
        if (!postData) {
            res.status(404).json({
                message: 'No post data was found in the database.'
            });
            return;
        }

        // Serialize the post data and render it in homepage.handlebars
        const posts = postData.map(post => post.get({ plain: true }));
        res.render('homepage', { 
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

/**
 * @route GET '/:id'
 * Finds and returns the Post data by `id`, including associated User and Comment data
 */
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(
            req.params.id, 
            {
                attributes: ['id', 'title', 'content', 'created_date'],
                include: [
                    { 
                        model: User,
                        attributes: ['id', 'username'],
                    },
                    {
                        model: Comment,
                        attributes: ['id', 'content', 'created_date', 'user_id', 'post_id'],
                        include: {
                            model: User,
                            attributes: ['id', 'username']
                        }
                    }
                ]
            }
        );
        
        if (!postData) {
            res.status(404).json({
                message: 'No post data was found for the requested id.'
            });
            return;
        }

        // Serialize the post data and render it in single-post.handlebars
        const post = postData.get({ plain: true });
        res.render('single-post', {
            post,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

/**
 * @route GET '/login'
 * Redirects the user to login.handlebars page
 */
router.get('/login', (req, res) => {
    try {
        // If the user is already logged in, redirect to the home page
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }

        // If the user is not logged in, render login.handlebars for the user to log in
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

/**
 * @route GET '/signup'
 * Redirects the user to signup.handlebars page
 */
router.get('/signup', (req, res) => {
    try { 
        //  If the user is already logged in, redirect to the home page
        if (req.session.loggedIn) {
          res.redirect('/');
          return;
        }
      
        // If the user is not logged in, render signup.handlebars for the user to sign up
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
