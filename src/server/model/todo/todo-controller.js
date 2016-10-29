const Controller = require('../../lib/controller');
const todoModel  = require('./todo-facade');


class TodoController extends Controller {}

module.exports = new TodoController(todoModel);
