 
const router = require('express').Router();
const { Post } = require('../../models');
const sequelize = require('../config/connection');
const withAuth = require('../../utils/auth');

// Gets every posts
router.get('/', (req, res) => {
    Post.findAll({})
        .then(postData => res.json(postData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//Gets posts by ID
router.get('/:id', (req, res) => {
    Post.findOne({
            where: {
                postID: req.params.id
            }
        })
        .then(postData => res.json(postData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//Posting posts
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Post.create({
                name: req.body.name,
                text: req.body.text,
                user_id: req.session.user_id
            })
            .then(postData => res.json(postData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
});

//Deletes posts 
router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(postData => {
        if (!postData) {
            res.status(404).json({ message: 'None found' });
            return;
        }
        res.json(postData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;

