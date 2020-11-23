<template>
  <div> 
    <button @click="showModal = !showModal">Add user</button>
    <form v-show="showModal" @submit.prevent="onSubmit">
      <label>Name:<input type="text" v-model="name"></label>
      <label>Surname:<input type="text" v-model="surname"></label>
      <label>Email:
        <input 
          type="text" 
          v-model="email" 
          :class="{invalid: ($v.email.$dirty && !$v.email.required)
            || ($v.email.$dirty && !$v.email.email)}">
      </label>
      <button type="Submit">Add user</button>
    </form>
    </div>
</template>

<script>
import {email, required} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      name: '',
      surname: '',
      email: '',  
      showModal: false
    }
  },
  validations: {
    name: {required},
    surname: {required},
    email: {email, required}
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const user = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        id: +new Date()
      }
      this.$emit('adduser', user)
  
      this.name = ""
      this.surname = ""
      this.email = ""
    }
  },
}
</script>
