const Router = require('express').Router;
const router = new Router();

const todo  = require('./model/todo/todo-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to server API!' });
});

router.use('/todo', todo);


module.exports = router;
