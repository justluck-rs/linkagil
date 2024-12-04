<template>
  <section class="grid grid-cols-1 lg:grid-cols-3 gap-3 p-10 bg-white mt-14">
    <div class="card card-side bg-base-100 shadow-xl">
      We are using cookies for no reason.
    </div>
    <div class="col-span-1 lg:col-span-2">
      <Card v-for="i in 10" :key="i" class="mb-4"/>
    </div>
  </section>
</template>

<script setup>
import Card from '../card/Main.vue'
</script>
