const express = require('express')
const router = express('router')
const knex = require('knex')

router.get('/',( q, s, _) => {
  res.send('All records')
})

router.get('/:id',( q, s, _) => {
  res.send('A record')
})

router.post('/', ( q, s, _) => {
  res.send('Made a thing here')
})

router.put('/:id', (q, s, _) => {
  res.send('Changed a thing here')
})

router.delete('/:id', (s, q, _) => {
  res.send('Preformed Sudoku')
})

module.exports = router
