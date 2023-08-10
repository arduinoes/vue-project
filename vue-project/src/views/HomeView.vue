<script setup lang="ts">
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";

const elements: any = ref([]);

async function obtenerElementos() {
  const { data } = await supabase.from("elementos").select();
  elements.value = data;
  console.log(data);
}

 onMounted(() => {
   obtenerElementos();
 });
</script>

<template>
  <ul>
    <li v-for="element in elements" :key="element.id">{{ element.title }}</li>
  </ul>
</template>
