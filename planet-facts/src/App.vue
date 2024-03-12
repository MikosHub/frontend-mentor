<template>
  <h1 class="text-3xl font-bold underline text-green-500">Hello World!</h1>
</template>

<script setup>
import { usePlanetStore } from './stores/planet.store';

const store = usePlanetStore();
const { planetData } = store;

console.log(planetData[0].geology)
</script>