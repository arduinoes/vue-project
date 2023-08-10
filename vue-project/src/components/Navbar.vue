<script setup lang="ts">
import { storeAuth } from "@/stores/user"

const usuarios = storeAuth(); 

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vue&Supabase</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/store">Store</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
        <!-- Iniciar sesión -->
        <button
        v-if="usuarios.session === null"
          type="button"
          class="btn btn-outline-primary mx-2"
          data-bs-toggle="modal"
          data-bs-target="#login"
        >
          Log in
        </button>
        <!-- Cerrar sesión -->
        <button
        v-if="usuarios.session !== null"
          class="btn btn-outline-danger me-2"
          data-bs-toggle="modal"
          data-bs-target="#login"
          @click="usuarios.salir"
        >
          Log out
        </button>
        <!-- Regístrate -->
        <button
          v-if="usuarios.session === null"
          type="button"
          class="btn btn-outline-warning"
          data-bs-toggle="modal"
          data-bs-target="#registro"
        >
          <!-- inicia modal con id="registro" -->
          Regístrate
        </button>
        <!-- Final auth -->
        <!-- //// Modal - Registrarse //// -->
        <div  class="modal fade" id="registro">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Regístrate</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="usuarios.registrarse()">
                  <!-- CORREO -->
                  <div class="input-group mb-3">
                    <span class="input-group-text">Correo</span>
                    <input
                      v-model="usuarios.email"
                      type="email"
                      required="true"
                      class="form-control"
                    />
                  </div>
                  <!-- PASSWORD -->
                  <div class="input-group mb-3">
                    <span class="input-group-text">Password</span>
                    <input
                      v-model="usuarios.password"
                      type="password"
                      required="true"
                      class="form-control"
                    />
                  </div>
                  <!-- REPASSWORD -->
                  <div class="input-group mb-3">
                    <span class="input-group-text">Repite Password</span>
                    <input
                      v-model="usuarios.repassword"
                      type="password"
                      required="true"
                      class="form-control"
                    />
                  </div>
                  <div class="d-grid gap-2">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Registrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- //// Modal - Iniciar sesión //// -->
        <div class="modal fade" id="login">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Inicia de sesión</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="usuarios.iniciarSesion()">
                  <!-- CORREO -->
                  <div class="input-group mb-3">
                    <span class="input-group-text">Correo</span>
                    <input
                      v-model="usuarios.email"
                      type="email"
                      required="true"
                      class="form-control"
                    />
                  </div>
                  <!-- PASSWORD -->
                  <div class="input-group mb-3">
                    <span class="input-group-text">Password</span>
                    <input
                      v-model="usuarios.password"
                      type="password"
                      required="true"
                      class="form-control"
                    />
                  </div>
                  <div class="d-grid gap-2">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      <!-- Cierra el modal -->
                      Iniciar sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
