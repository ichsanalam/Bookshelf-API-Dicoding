const {
  saveBooks,
  getBooks,
  getBooksById,
  editBooksById,
  deleteBookbyId
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: saveBooks,
    options: {
      cors: {
        origin: ['*'],
      }
    }
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooks,
    options: {
      cors: {
        origin: ['*'],
      }
    }
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBooksById,
    options: {
      cors: {
        origin: ['*'],
      }
    }
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBooksById,
    options: {
      cors: {
        origin: ['*'],
      }
    }
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookbyId,
    options: {
      cors: {
        origin: ['*'],
      }
    }
  }
];

module.exports = routes;