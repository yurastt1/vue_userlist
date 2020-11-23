<template>
  <div>
    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <User @deleteuser="deleteuser" v-for="(user, index) in this.users" :user="user" :index="index" :key="user.id"></User>  
    </table>
  </div> 
</template>

<script>
import User from './User'
export default {
  components: {
    User,
  },
  props: {
    users: {
      type: Array,
      required: true
    },
    deleteuser: {
      type: Function,
    }
  }
}
</script>
