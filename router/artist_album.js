var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var id = req.query.id
  var data = {
    offset: req.query.offset || 0,
    total: true,
    limit: req.query.limit || 30,
    csrf_token: ''
  }
  util.createWebAPIRequest(
    'music.163.com',
    `/weapi/artist/albums/${id}`,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
