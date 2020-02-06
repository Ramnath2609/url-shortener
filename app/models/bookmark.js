const mongoose = require('mongoose')
const validator = require('validator')
const sh = require('shorthash')

const Schema = mongoose.Schema

const bookmarkSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    original_url : {
        type : String,
        required : true
    },
    tags : {
        type : [String],
        required : true
    },
    hashed_url : {
        type : String
    },
    createdAt : {
        type : Date,
        default : new Date()
    }
})



bookmarkSchema.pre('save', function(next) {
    const bookmark = this
    if (validator.isURL(bookmark.original_url)) {
        bookmark.hashed_url= sh.unique(bookmark.original_url)
        next()
    } else {
        res.json({
            note : "URL must be provided"
        })
    }
})


const Bookmark = mongoose.model('Bookmark', bookmarkSchema)
module.exports = Bookmark