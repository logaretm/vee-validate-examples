<template>
    <div class="columns is-multiline">
        <div class="column is-12">
            <label class="label">First Name</label>
            <p class="control has-icon has-icon-right">
                <input name="first_name" v-model="first_name" v-validate.initial="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('first_name') }" type="text" placeholder="First Name">
                <i v-show="errors.has('first_name')" class="fa fa-warning"></i>
                <span v-show="errors.has('first_name')" class="help is-danger">{{ errors.first('first_name') }}</span>
            </p>
        </div>
        <div class="column is-12">
            <label class="label">Last Name</label>
            <p class="control has-icon has-icon-right">
                <input name="last_name" v-model="last_name" v-validate.initial="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('last_name') }" type="text" placeholder="Last Name">
                <i v-show="errors.has('last_name')" class="fa fa-warning"></i>
                <span v-show="errors.has('last_name')" class="help is-danger">{{ errors.first('last_name') }}</span>
            </p>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'initial-value-example',
    data: () => ({
      first_name: '',
      last_name: 'valid'
    })
  };
</script>
