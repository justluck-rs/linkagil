<template>
  <section class="grid grid-cols-12 gap-4 p-4 mt-14">
    <aside class="col-span-12 md:col-span-3 space-y-4 border-r">
      <span class="text-base px-4">Filtar por:</span>
      <div class="h-auto">
        <Filters />
      </div>
    </aside>
    <main class="col-span-12 md:col-span-9 space-y-6">
      <div class="relative scroll-categories flex justify-start items-center gap-3 p-2 overflow-x-auto overflow-x-scroll">
        <Categories v-for="i in 10" :key="i" />
      </div>
      <div class="divider">Profissionais</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card v-for="i in 21" :key="i" />
      </div>
    </main>
  </section>
</template>

<script setup>
import Card from '../card/Main.vue';
import Filters from '../filters/Main.vue';
import Categories from '../categories/Main.vue';
</script>

<style scoped>
.scroll-categories::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.scroll-categories::-webkit-scrollbar-track {
  background: transparent;
}

.scroll-categories::-webkit-scrollbar-thumb {
  background-color: #9CA3AF;
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: content-box;
}

.scroll-categories::-webkit-scrollbar-thumb:hover {
  background-color: #6B7280;
}

.scroll-categories {
  scrollbar-width: thin;
  scrollbar-color: #9CA3AF transparent;
}

.scroll-categories {
  scroll-behavior: smooth;
}

</style>
