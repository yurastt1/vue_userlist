<template>
  <div>
  <b-modal v-show="showSettings" id="modal-1" title="BootstrapVue">
    <p>{{name}}</p>
    <p>{{surname}}</p>
  </b-modal>
</div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object
    }
  },
  data() {
    return {
      showSettings: true
    }
  }
}
</script>
