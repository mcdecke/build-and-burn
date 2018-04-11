const express = require('express')
const router = express('router')
const knex = require('knex')



router.get('/',( q, s, _) => {
  knex.select()
  .from('burn')
  .then(x => {
    s.json(x)
  })
  .catch((err) => {
    _(err)
  })
})

router.get('/:id',( q, s, _) => {
  knex('burn')
  .where('id', q.params.id)
  .then((x) => {
    s.json(x)
  })
  .catch((err) => {
    _(err)
  })
})

router.post('/', (q, s, next) => {
  knex('burn')
    .insert({
      "colname1": q.body.colname1,
      "colname2": q.body.colname2,
      "colname3": q.body.colname3
    })
    .returning('*')
    .then((data) => {
      s.json(data[0])
    })
    .catch((err) => {
      next(err)
    })
})

router.put('/:id', (q, s, next) => {
  knex('burn')
  .where('id', q.params.id)
  .then((data) => {
    knex('burn')
    .where('id', q.params.id)
    .limit(1)
    .update({
      "colname1": q.body.colname1,
      "colname2": q.body.colname2,
      "colname3": q.body.colname3
    })
    .returning('*')
    .then((data) => {
      s.json(data[0])
    })
  })
  .catch((err) => {
    next(err)
  })
})

router.delete('/:id', (q, s, _) => {
  knex('burn')
  .where('id', q.params.id)
  .first()
  .then((x) => {
    if(!x) return _()
    knex('burn')
    .del()
    .where('id', q.params.id)
    .then(()=>{
      s.send(`ID ${q.params.id}`)
    })
  })
})

module.exports = router
