<template>
  <div>
    <Navbar/>

    <!-- <Aside/> -->

    <main class="h-screen">
      <slot>
        <Card/>
      </slot>
    </main>

    <Footer/>
  </div>
</template>

<script setup>
  import Navbar from './components/navbar/Main.vue'
  import Footer from './components/footer/Main.vue'
  import Card from './professional/card/Main.vue'
</script>
