<template>
  <div> 
     <b-button v-b-modal.modal-1 variant="outline-primary">Add user</b-button>
      <b-modal id="modal-1" title="User">
        <b-form v-show="showModal" @submit.prevent="onSubmit">
          <b-form-group>
            <label>Name:<b-form-input  type="text" v-model="name"></b-form-input></label>
          </b-form-group>
          <b-form-group>
            <label>Surname:<b-form-input type="text" v-model="surname"></b-form-input></label>
          </b-form-group>
          <b-form-group>
          <label>Email:
            <b-form-input
              type="text" 
              v-model="email" 
              :class="{invalid: ($v.email.$dirty && !$v.email.required)
                || ($v.email.$dirty && !$v.email.email)}">
            </b-form-input>
          </label>
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
