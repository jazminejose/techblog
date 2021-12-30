const router = require('express').Router()
const { Post, User, Comment } = require('../models')
const passport = require('passport')

router.get('/posts', passport.authenticate('jwt'), async function (req, res) {
  const posts = await Post.findAll({ include: [User] })
  res.json(posts)
})

router.post('/posts', passport.authenticate('jwt'), async function ({ body, user }, res) {
  const post = await Post.create({
    ...body,
    uid: user.id
  })
  res.json(post)
})

router.put('/posts', passport.authenticate('jwt'), async function ({ params: { id } }, res) {
  await Post.update({ where: { id } })
  res.sendStatus(200)
})

router.delete('/posts/:id', passport.authenticate('jwt'), async function ({ params: { id } }, res) {
  await Post.destroy({ where: { id } })
  res.sendStatus(200)
})

module.exports = router