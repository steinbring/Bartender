<template>
  <div id="app">
    <header>
      <h1><router-link to="/">Cocktail Recipes</router-link></h1>
      <nav>
        <ul>
          <li><router-link to="/simple">Simple Cocktails</router-link></li>
          <li><router-link to="/intermediate">Intermediate Cocktails</router-link></li>
          <li><router-link to="/advanced">Advanced Cocktails</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style>
  #app {
    text-align: center;
  }

  header {
    background-color: #f8f8f8;
    padding: 10px 0;
    margin-bottom: 20px;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
  }

  nav li {
    display: inline;
    margin: 0 10px;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
