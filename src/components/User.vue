<template>
  <tr> 
    <td>{{ user.name }}</td>
    <td>{{ user.surname }}</td>
    <td>{{ user.email }}</td>
    <td><b-button @click="log" variant="outline-primary">Props</b-button></td>
  </tr>
</template>

<script>
export default {
  methods: {
    log() {
      console.log(this.index, this.user);
      this.$emit('usersettings', this.index)
    },
  },
  props: {
    user: {
      type: Object,
    },
    index: {
      type: Number,
    }
  }
}
</script>
