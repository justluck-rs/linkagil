<template>
  <section class="grid grid-cols-1 lg:grid-cols-3 gap-3 p-10 mt-14">
    <Filters />
    <div class="col-span-1 grid md:grid-cols-2 gap-3 lg:col-span-2">
      <Card v-for="i in 10" :key="i" />
    </div>
  </section>
</template>

<script setup>
import Card from '../card/Main.vue'
import Filters from '../filters/Main.vue'
</script>
