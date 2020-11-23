<template>
  <div>
    <b-modal no-close-on-backdrop id="modal-2" title="Change settings" @hide="handleClose" >
      <b-form @submit.prevent="onSubmit">
        <b-form-group
            id="input-group-1"
            label="Name:"
            label-for="input-1"
          >
            <b-form-input  
              id="input-1"
              v-model="name"
              required
              placeholder="Enter name"
            />  
          </b-form-group>
          <b-form-group 
            id="input-group-2" 
            label="Surname" 
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="surname"
              required
              placeholder="Enter surname"
            />
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="Email address:"
            label-for="input-3"
          >
            <b-form-input
              type="email"
              required
              v-model="email" 
               placeholder="Enter Email"
              :class="{invalid: ($v.email.$dirty && !$v.email.required)
                || ($v.email.$dirty && !$v.email.email)}">
            </b-form-input>
          </b-form-group>
          <b-button type="Submit" variant="primary">Change</b-button>
        </b-form>
    </b-modal>
  </div>
</template>

<script>
import {email, required} from 'vuelidate/lib/validators'

export default {
  props: ['user'],
  data() {
    return {
      name: this.user.name,
      surname: this.user.surname,
      email: this.user.email
    }
  },
  methods: {
    onSubmit() {
      const user = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        index: this.user.index
      }

      this.$emit('changeSettings', user)
    },
    handleClose() {
      this.$emit('modalclosed')
    }
  },
  validations: {
    name: {required},
    surname: {required},
    email: {email, required}
  }
}
</script>
