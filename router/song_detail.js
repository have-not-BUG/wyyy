var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var id = parseInt(req.query.ids)
  var data = {
    // "id": id,
    c: JSON.stringify([{ id: id }]),
    ids: '[' + id + ']',
    csrf_token: ''
  }
  console.log(data)
  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/v3/song/detail',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
