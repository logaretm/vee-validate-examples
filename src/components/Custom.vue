<template>
  <div>
    <text-input name="email" v-validate="'required|email'"></text-input>
    {{ errors.first('email') }}
  </div>
</template>

<script>
import TextInput from './TextInput';

export default {
  components: {
    TextInput
  } 
}
</script>
