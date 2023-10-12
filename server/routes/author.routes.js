const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/authors', AuthorController.getAllAuthors);
    app.post('/authors/new', AuthorController.createAuthors);
    app.get('/authors/:id', AuthorController.getOneAuthor);
    app.patch('/authors/:id', AuthorController.updateOneAuthor);
    app.delete('/authors/:id', AuthorController.deleteOneAuthor);
}