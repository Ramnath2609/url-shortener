const express = require('express')
const bookmarkController = require('../app/controllers/bookmarkController')
const router = express.Router()


router.get('/bookmarks', bookmarkController.list)
router.get('/:hash', bookmarkController.showHash)
router.get('/bookmarks/tags', bookmarkController.showQuery)
router.get('/bookmarks/tags/:name', bookmarkController.showName)
router.get('/bookmarks/:id', bookmarkController.show)
router.post('/bookmarks', bookmarkController.create)
router.put('/bookmarks/:id', bookmarkController.update)
router.delete('/bookmarks/:id', bookmarkController.destroy)

module.exports = router