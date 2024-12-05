<template>
  <section class="relative flex flex-col">
    <div class="flex justify-center">
      <Navbar class="w-screen fixed z-[1000]" />
    </div>
    <main class="flex-1 mt-10">
      <Professionals />
    </main>
    <Footer />
  </section>
</template>

<script setup>
  import Navbar from './components/navbar/Main.vue'
  import Footer from './components/footer/Main.vue'
import Professionals from './professional/Main.vue'

</script>
