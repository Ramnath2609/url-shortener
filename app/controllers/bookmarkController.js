const Bookmark = require('../models/bookmark')
const validator = require('validator')
const sh = require('shorthash')


module.exports.list = (req, res) => {
    Bookmark.find()
        .then(bookmarks => {
            if (bookmarks) {
                res.json(bookmarks)
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const bookmark = new Bookmark(req.body)
    if (validator.isURL(bookmark.original_url)) {
        bookmark.hashed_url= sh.unique(bookmark.original_url)
        bookmark.save()
        .then(bookmark => {
            if (bookmark) {
                res.json(bookmark)
            }
        })
        .catch(err => {
            res.json(err)
        })
    } else {
        res.json({
            note : "URL must be provided"
        })
    }
}

module.exports.showName = (req, res) =>{
    const name = req.params.name
    Bookmark.find({tags : name})
        .then(bookmark => {
            res.json(bookmark)
        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.showQuery = (req, res) => {
    console.log(req.query)
    const names = req.query.names.split(',')
    Bookmark.find({tags : {"$in" : names}})
        .then(bookmarks => {
            res.json(bookmarks)
        })
}

module.exports.showHash = (req, res) => {
    const hashValue = req.params.hash
    Bookmark.find({hashed_url : hashValue})
        .then(bookmark => {
            if (bookmark) {
                console.log(bookmark)
                res.redirect(bookmark[0].original_url)
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Bookmark.findById(id)
        .then(bookmark => {
            if (bookmark) {
                res.json(bookmark)
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Bookmark.findByIdAndUpdate(id, body)
        .then(bookmark => {
            if (bookmark) {
                res.json(bookmark)
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Bookmark.findByIdAndDelete(id)
        .then(bookmark => {
            if (bookmark) {
                res.json(bookmark)
            }
        })
        .catch(err => {
            res.json(err)
        })
}

