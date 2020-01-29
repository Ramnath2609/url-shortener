const express = require('express')
const bookmarkController = require('../app/controllers/bookmarkController')
const router = express.Router()


router.get('/bookmarks', bookmarkController.list)
router.get('/bookmarks/:id', bookmarkController.show)
router.post('/bookmarks', bookmarkController.create)
router.put('/bookmarks/:id', bookmarkController.update)
router.delete('/bookmarks/:id', bookmarkController.destroy)

module.exports = router