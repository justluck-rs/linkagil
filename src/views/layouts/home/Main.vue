<template>
  <section class="relative flex flex-col">
    <div class="flex justify-center">
      <Navbar class="w-[1300px]"/>
    </div>
    <main class="h-screen flex justify-center flex-1">
      <List class="w-[1300px]"/>
    </main>

    <Footer />
  </section>
</template>

<script setup>
  import Navbar from './components/navbar/Main.vue'
  import Footer from './components/footer/Main.vue'
import List from './professional/list/Main.vue'
</script>
