<script setup lang="ts">
import { onMounted } from 'vue'
import { storeElementos } from "../stores/elementos";
import CardElementos from "@/components/CardElementos.vue";
import Auth from "../components/Auth.vue";
import { storeAuth } from "@/stores/user"

const usuarios = storeAuth();
const elementos = storeElementos();

onMounted(() => {
  elementos.obtenerElementos();
})

</script>

<template>
  <Auth v-if="usuarios.session === null" />
  <main v-else>
    <div  class="container mt-4">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <CardElementos
          v-for="element in elementos.elementos"
          :key="element.id"
          :element="element"
        />
      </div>
    </div>
  </main>
</template>
