import { Router } from 'express';
import Todo from '../models/Todo.js';

const router = new Router();

router.get('/', async (req, res) => {
  console.log('get todos');
  const todos = await Todo.find({});
  res.send(todos);
});

router.post('/create', async (req, res) => {
  console.log('todo to create', req.body);
  const todo = new Todo({
    title: req.body.title,
    date: req.body.date,
  });
  await todo.save();
  res.send(todo);
});
export default router;
