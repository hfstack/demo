const Sequelize = require('sequelize');
// const Todolist = new Sequelize('mysql://root:123456@localhost/todolist', {
//   define: {
//     timestamps: false
//   }
// });
var Todolist = new Sequelize(
  'todolist', // 数据库名
  'root',   // 用户名
  'HLf5897633',   // 用户密码
  {
    'dialect': 'mysql',  // 数据库使用mysql
    'host': '110.9.106.181', // 数据库服务器ip
    'port': 3306,        // 数据库服务器端口
    'define': {
        // 字段以下划线（_）来分割（默认是驼峰命名风格
      // 'underscored': true,
      'timestamps': false
    }
  }
);
module.exports = {
  Todolist // 将Todolist暴露出接口方便Model调用
};

