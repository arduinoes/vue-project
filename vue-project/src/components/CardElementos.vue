<script setup lang="ts">
import type { Element } from "../stores/elementos";

defineProps<{
  element: Element;
}>();
</script>

<template>
  <div class="col">
    <div class="card" style="width: 22rem">
      <img :src="element.image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ element.id }}</h5>
        <p class="card-text">{{ element.description }}</p>
        <p class="card-text">{{ element.price }}</p>
        <a href="#" class="btn btn-primary">{{ element.title }}</a>
      </div>
    </div>
  </div>
</template>
