const todolist = require('../models/todolist.js');

const getTodolist = function* () {
  const id = this.params.id;
  const result = yield todolist.getTodolistById(id);
  this.body = result;
};
// 增加
const createTodolist = function*() {
  const data = this.request.body;
  yield todolist.createTodolist(data);
  this.body = {
    success: true
  };
};
// 删除
const removeTodolist = function* () {
  const id = this.params.id;
  const user_id = this.params.userId;
  yield todolist.removeTodolist(id, user_id);

  this.body = {
    success: true
  };
};

const updateTodolist = function* () {
  const id = this.params.id;
  const user_id = this.params.userId;
  let status = this.params.status;
  status === '0' ? status = true : status = false;// 状态反转（更新）

  yield todolist.updateTodolist(id, user_id, status);

  this.body = {
    success: true
  };
};
// 更新
module.exports = (router) => {
  router.get('/todolist/:id', getTodolist);
  router.post('/todolist', createTodolist);
  router.delete('/todolist/:userId/:id', removeTodolist);
  router.put('/todolist/:userId/:id/:status', updateTodolist);
};
