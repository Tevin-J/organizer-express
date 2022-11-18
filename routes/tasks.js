import { Router } from 'express';
import Task from '../models/Task.js';

const router = new Router();

router.get('/:task_date', async (req, res) => {
  const tasks = await Task.find({ date: req.params.task_date });
  console.log(`get ${tasks.length} tasks for ${req.params}`);

  res.send(tasks.map((task) => ({ title: task.title, date: task.date, id: task._id })));
});

router.post('/:task_date', async (req, res) => {
  console.log('task to create', req.body);
  const task = new Task({
    title: req.body.title,
    date: req.body.date,
  });
  await task.save();
  res.send({ id: task._id });
});

router.delete('/:task_date/:task_id', async (req, res) => {
  console.log('task id to delete', req.params.task_id);
  await Task.deleteOne({ _id: req.params.task_id });
  res.send();
});
export default router;
