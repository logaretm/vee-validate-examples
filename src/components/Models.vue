<template>
    <div class="columns is-multiline">
        <div class="column is-12">
            <label class="label">Email</label>
            <p class="control has-icon has-icon-right">
                <input name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
                <i v-show="errors.has('email')" class="fa fa-warning"></i>
                <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
            </p>
        </div>
        <div class="column is-12">
            <label class="label">Password</label>
            <p class="control has-icon has-icon-right">
                <input name="passsword" v-model.lazy="passsword" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('passsword') }" type="text" placeholder="Password">
                <i v-show="errors.has('first_name')" class="fa fa-warning"></i>
                <span v-show="errors.has('first_name')" class="help is-danger">{{ errors.first('first_name') }}</span>
            </p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'model-example',
    data: () => ({
      email: '',
      passsword: ''
    })
  };
</script>
