<template>
  <section class="relative flex flex-col">
    <Navbar />
    <main class="h-screen px-64 flex-1">
      <List />
    </main>

    <Footer />
  </section>
</template>

<script setup>
  import Navbar from './components/navbar/Main.vue'
  import Footer from './components/footer/Main.vue'
import List from './professional/list/Main.vue'
</script>
