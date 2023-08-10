<script setup lang="ts">
import Auth from "../components/Auth.vue";
import { storeAuth } from "@/stores/user"

const usuarios = storeAuth();
</script>

<template>
  <Auth v-if="usuarios.session === null" />
  <div v-else>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>
