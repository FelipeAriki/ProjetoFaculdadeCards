<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/cadastroVaga" class="nav-link active">Cadastrar Vaga</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Visualizar Vagas</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Opções
            </a>
            <ul class="dropdown-menu">
              <router-link to="/cadastroVaga" class="dropdown-item">Cadastrar Vaga</router-link>
              <li><hr class="dropdown-divider"></li>
              <li><router-link to="/" class="dropdown-item">Visualizar Vagas</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <hr/>
  <router-view></router-view>
</template>

<script>
import Painel from './components/Painel.vue';


export default {
  name: 'App',
  components: {
    Painel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#center {
  /* min-height: 500px; */
  height: 75vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}
</style>
