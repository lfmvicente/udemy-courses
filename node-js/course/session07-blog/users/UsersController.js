const express = require('express');
const router = express.Router();
const User = require('./User');
const bcrypt = require('bcryptjs');

router.get('/admin/users', (req, res) => {
    User.findAll().then((users) => {
        res.render('admin/users/index', {users:users})
    }).catch((error) => {
        res.redirect('/')
    })
})

router.get('/admin/users/create', (req, res) => {
    res.render('admin/users/create')
})

router.post('/users/create', (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)

    User.findOne({
        where: {
            email: email
        }
    }).then((user) => {
        if (user) {
            res.redirect('/admin/users/create')
        } else {
            User.create({
                email: email,
                password: hash
            }).then(() => {
                res.redirect('/')
            }).catch((error) => {
                res.redirect('/')
            })
        }
    })
})

router.get('/login', (req, res) => {
    res.render('admin/users/login')
})

router.post('/authenticate', (req, res) => {
    let email = req.body.email
    let password = req.body.password

    User.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if (user)  {
            let validation = bcrypt.compareSync(password, user.password)
            if (validation) {
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                res.redirect('/admin/articles')
            } else {
                res.redirect('login')
            }
        } else {
            res.redirect('/login')
        }
    })
})

router.get('/logout', (req, res) => {
    req.session.user = undefined;
    res.redirect('/login')
})


module.exports = router;