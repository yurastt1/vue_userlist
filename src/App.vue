<template>
  <div id="app">
    <UserSettings v-if="showSettings" :showSettings="showSettings" :user="currentUser" @changeSettings="changeSettings" />
    <AddUser @adduser="adduser" />
    <UserList :users="users" :usersettings="usersettings" />
  </div>
</template>

<script>
import AddUser from './components/AddUser'
import UserList from './components/UserList'
import UserSettings from './components/UserSettings'

export default {
  name: 'App',
  data() {
    return {
      users: [],
      showSettings: false,
      currentUser: {}
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
    UserSettings,
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
    },
    usersettings(index) {
      this.showSettings = !this.showSettings
      this.currentUser = { ...this.users[index], index: index }
    },
    changeSettings(user) {
      this.users[user.index].name = user.name;
      this.users[user.index].surname = user.surname;
      this.users[user.index].email = user.email;
      this.saveusers();
    }
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
