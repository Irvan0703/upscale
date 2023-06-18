const router = require('express').Router();
const task = require('./controller')

router.post('/tasks', task.store);
router.get('/tasks', task.index);
router.get('/tasks/:id');
router.patch('/tasks/:id', task.update);
router.delete('/tasks/:id', task.destroy);

module.exports = router;