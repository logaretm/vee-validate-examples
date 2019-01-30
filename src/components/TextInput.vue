<template>
  <input type="text" :name="name" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'text-input',
  $_veeValidate: {
    // value getter
    value () {
      return this.$el.value;
    },
    // name getter
    name () {
      return this.name;
    }
  },
  props: {
    name: String,
    value: {
      type: null,
      default: null
    }
  },
  mounted () {
    this.$el.value = this.value;
  }
}
</script>

