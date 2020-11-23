<template>
  <div>
    <table class="table table-striped">
    <thead>
      <tr>
        <th></th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Properties</th>
      </tr>
    </thead>
    <tbody>
      <User 
        @usersettings="usersettings"
        @deleteuser="deleteuser"
        v-for="(user, index)
        in this.users" :user="user" 
        :index="index" 
        :key="user.id"
      />  
    </tbody>
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
    usersettings: {
      type: Function,
    },
    deleteuser: {
      type: Function
    }
  }
}
</script>
