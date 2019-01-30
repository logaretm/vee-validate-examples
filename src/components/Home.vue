<template>
  <ul>
    <li v-for="ex in examples" :key="ex.path">
      <router-link :to="ex.path">{{ ex.name }}</router-link>
    </li>
  </ul>
</template>

<script>
import { routes } from '../router';

export default {
  name: 'home',
  data: () => ({
    examples: routes.filter(r => r.path !== '/').map(r => {
      return {
        path: r.path,
        name: r.meta.title
      };
    })
  })
};
</script>
