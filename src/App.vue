<template>
  <div id="app">
    <header class="meta">
      <h1>{{ $route.meta.title }}</h1>
      <img v-show="$route.path === '/'" src="/logo.png" alt="VeeValidate Logo" width="200">
      <p>{{ $route.meta.description }}</p>
    </header>

    <main>
      <router-view></router-view>
    </main>
    <footer>
      ️️<router-link v-show="$route.path !== '/'" to="/">⬅️ Back to examples</router-link>
      <a target="_blank" rel="noopener" href="https://baianat.github.io/vee-validate">📚 Docs</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  display: block;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.meta {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
