<template>
    <div class="columns is-multiline">
        <div class="column is-12">
            <label class="label">Message</label>
            <p class="control has-icon has-icon-right">
                <input name="message" v-model="message" v-validate="'required|min:5'" :class="{'input': true, 'is-danger': errors.has('message') }" type="text" placeholder="Your Message">
                <i v-show="errors.has('message')" class="fa fa-warning"></i>
                <span v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</span>
            </p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'vuex-example',
    computed: {
      message: {
        get () {
          return this.$store.state.message;
        },
        set (val) {
          this.$store.commit('UPDATE_MESSAGE', val);
        }
      }
    }
  };
</script>
