<template>
  <div> 
     <b-button v-b-modal.modal-1 variant="outline-primary">Add user</b-button>
      <b-modal id="modal-1" title="Add user">
        <b-form v-show="showModal" @submit.prevent="onSubmit">
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
          <b-button type="Submit" variant="primary">Add user</b-button>
        </b-form>
      </b-modal>
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
      showModal: true
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
