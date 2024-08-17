<template>
  <div class="contenedor">
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/addlista">Go to About</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F5E3E0;
  margin-top: 60px;
}

.contenedor
{
  width: 80%;
  margin: auto;
  background-color: #D282A6;
}

body{
  background-color: #0A090C;
}
</style>
