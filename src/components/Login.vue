<template>
	<el-row class="content">
		<el-col :xs="24" :sm="{span:6, offset: 9}">
			<span class="title">欢迎登陆</span>
			<el-row>
				<el-input v-model="account" placeholder="账号" tyep="text"></el-input>
				<el-input v-model="password" placeholder="密码" tyep="password"  @keyup.enter.native="loginToDo"></el-input>
			  <el-button type="primary" @click="loginToDo">登陆</el-button>
			</el-row>
		</el-col>
	</el-row>
</template>
<script>
import md5 from 'md5';
export default {
  data() {
    return {
      account: '',
      password: ''
    };
  },
  methods: {
    loginToDo() {
      let obj = {
        name: this.account,
        password: md5(this.password)
      };
      this.$http.post('/auth/user', obj)
      .then((res) => {
        if (res.data.success) {
          window.sessionStorage.setItem('demo-token', res.data.token);
          this.$message({
            type: 'success',
            message: '登陆成功'
          });
          this.$router.push('/todolist'); // 编程式路由，通过push方法，改变路由。
        } else {
          this.$message({
            type: 'error',
            message: res.data.info
          });
          window.sessionStorage.setItem('demo-token', null);
        }
      }, () => {
        this.$message.error('请求错误');
        window.sessionStorage.setItem('demo-token', null);
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
  .el-row.content
    padding 16px
  .title
    font-size 28px
  .el-input
    margin 12px 0
  .el-button
    width 100%
    margin-top 12px    
</style>
