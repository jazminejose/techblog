const router = require('express').Router()
const { Comment, User, Post } = require('../models')
const passport = require('passport')

// GET all comments
router.get('/comments', passport.authenticate('jwt'), async function (req, res) {
  const notes = await Comment.findAll({ include: [User, Post] })
  res.json(comment)
})

// POST one post
router.post('/comments', passport.authenticate('jwt'), async function (req, res) {
  const note = await Comment.create({
    body: req.body.body,
    pid: req.body.pid,
    uid: req.user.id
  })
  res.json(comment)
})

router.get('/comments/:id', passport.authenticate('jwt'), async function (req, res) {
  const note = await Comment.findAll({ where: { pid: req.params.id }, include: [User] })
  res.json(comment)
})


// DELETE one comment
router.delete('/comments/:id', passport.authenticate('jwt'), async function (req, res) {
  await Comment.destroy({ where: { id: req.params.id } })
  res.sendStatus(200)
})

module.exports = router