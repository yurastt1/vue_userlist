<template>
  <tr> 
    <td><button @click="userdeletor"><b-icon icon="trash2" aria-hidden="true"></b-icon></button>
    <td>{{ user.name }}</td>
    <td>{{ user.surname }}</td>
    <td>{{ user.email }}</td>
    <td>
      <b-button 
        @click="opensettings"
        v-b-modal.modal-2
        variant="outline-primary"
        size="sm" class="mb-2"
      >
        <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Settings
      </b-button>
    </td>
  </tr>
</template>

<script>
export default {
  methods: {
    opensettings() {
      this.$emit('usersettings', this.index)
    },
    userdeletor() {
      this.$emit('deleteuser', this.index)
    }
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
