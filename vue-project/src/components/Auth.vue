<script setup lang="ts">
import { storeAuth } from '@/stores/user';

const usuarios = storeAuth()

</script>


<template>
  <div class="container">
  <div class="card position-absolute top-50 start-50 translate-middle" style="width: 22rem">
    <div class="card-header text-center">Regístrate o inicia sesión</div>
    <div class="card-body">
      <h5 class="card-title">Correo electrónico</h5>
      <input type="text" 
        class="form-control" 
        placeholder="Correo electrónico" 
        aria-label="Correo electrónico" 
        aria-describedby="basic-addon1"
        v-model="usuarios.email"
        >
        <h5 class="card-title pt-3">Contraseña</h5>
      <input type="password" 
        class="form-control pt-2" 
        placeholder="Contraseña" 
        aria-label="Contraseña" 
        aria-describedby="basic-addon1"
        v-model="usuarios.password"
        >
        <div class="pt-3">
          <div class="d-grid gap-2 col-8 mx-auto">
          <button class="btn btn-success" 
          type="button"
          
          @click="usuarios.iniciarSesion()">
          <span v-if="usuarios.password.length">Entrar</span>
          <span v-else> Enviar enlace mágico </span>
        </button>
          <button class="btn btn-danger" 
            type="button"
            @click="usuarios.registrarse"
            >Registrase</button>
        </div>
      </div>
    </div>
    <div class="card-footer text-body-secondary"></div>
  </div>
</div>
</template>
