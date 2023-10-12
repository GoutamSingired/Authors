const Author = require('../models/author.model')

module.exports = {
    getAllAuthors: (req, res) => {
        Author.find({})
            .then(authors => {res.json(authors)})
            .catch(err => {res.json("not found authors", err)})
    },

    createAuthors: (req, res) => {
        console.log("body", req.body.newName)
        Author.create(req.body.newName)
            .then(newName => {res.status(200).json(newName)})
            .catch(err => {res.status(500).json(err), console.log(err)}) 
    },
    getOneAuthor: (req, res) => {
        console.log(req.params.id)
        Author.findOne({_id: req.params.id})
            .then(oneAuthor => res.json(oneAuthor))
            .catch(err => {res.json("cant get one", err)})
    },
    updateOneAuthor: (req, res) => {
        console.log("hello", req.body)
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
            .then(updateOne => res.status(200).json(updateOne))
            .catch(err => { res.status(500).json(err), console.log(err)} )
    },
    deleteOneAuthor: (req, res) => {
        console.log(req.params.id)
        Author.deleteOne({_id: req.params.id})
            .then(deleteOne => res.json(deleteOne))
            .catch(err => console.log(err))
    }
}