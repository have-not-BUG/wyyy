const express = require('express')
const router = express()
const util = require('../util/util')

router.get('/', (req, res) => {
  const data = {
    byids: req.query.id,
    id: req.query.id,
    csrf_token: ''
  }
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/v1/cloud/get/byids',
    'POST',
    data,
    cookie,
    music_req => {
      res.setHeader('Content-Type', 'application/json')
      res.send(music_req)
    },
    err => {
      res.status(502).send('fetch error')
    }
  )
})

module.exports = router