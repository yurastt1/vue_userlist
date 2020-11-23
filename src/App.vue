<template>
  <div id="app">
    <AddUser @adduser="adduser" />
    <UserList :users="users" :deleteuser="deleteuser" />
  </div>
</template>

<script>
import AddUser from './components/AddUser'
import UserList from './components/UserList'

export default {
  name: 'App',
  data() {
    return {
      users: [{name: "lolly", surname: "popa", email:"jopa"}]
    }
  },
  mounted() {
    if (localStorage.getItem('users')) {
      try {
        this.users = JSON.parse(localStorage.getItem('users'));
      } catch (e) {
        localStorage.removeItem('users')
      }
    }
  },
  components: {
    AddUser,
    UserList,
  },
  methods: {
    saveusers() {
      let parsed = JSON.stringify(this.users)
      localStorage.setItem('users', parsed)
    },
    adduser(user) {
      this.users.push(user);
      this.saveusers();
    },
    deleteuser(index) {
       this.users.splice(index, 1);
       this.saveusers();
      // changing props below and it works
      // (this.users.find(element => element.id === id).name = "swat");
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
