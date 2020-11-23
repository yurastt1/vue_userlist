<template>
  <div>
    <b-button v-b-modal.modal-2>Launch demo modal</b-button>

    <b-modal id="modal-2" title="BootstrapVue">
      <b-form @submit.prevent="onSubmit">
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
    }
  },
  validations: {
    name: {required},
    surname: {required},
    email: {email, required}
  }
}
</script>
