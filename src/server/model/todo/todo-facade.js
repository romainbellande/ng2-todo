const Model = require('../../lib/facade');
const todoSchema  = require('./todo-schema');


class TodoModel extends Model {}

module.exports = new TodoModel(todoSchema);
