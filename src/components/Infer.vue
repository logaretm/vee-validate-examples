<template>
    <div class="columns is-multiline">
        <div class="column is-12">
            <label class="label">Email</label>
            <p class="control has-icon has-icon-right">
                <input name="email" v-model="email" v-validate :class="{'input': true, 'is-danger': errors.has('email') }" type="email" required>
                <i v-show="errors.has('email')" class="fa fa-warning"></i>
                <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
            </p>
        </div>
        <div class="column is-12">
            <label class="label">Date</label>
            <p class="control has-icon has-icon-right">
                <input name="date" v-model="date" v-validate :class="{'input': true, 'is-danger': errors.has('date') }" type="date">
                <i v-show="errors.has('date')" class="fa fa-warning"></i>
                <span v-show="errors.has('date')" class="help is-danger">{{ errors.first('date') }}</span>
            </p>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'infer-value-example',
    data: () => ({
      email: '',
      date: ''
    })
  };
</script>
