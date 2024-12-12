<template>
  <nav class="fixed w-full bg-teal-950 text-teal-700 top-0 z-50 transition ease-in-out duration-300">
    <div :class="props.navbarClass" class="mx-auto">
      <header class="text-gray-700 py-2 border-b" :class="{ 'top-0': props.isScrolled }">
        <div class="sm:container flex justify-between items-center transition gap-10 duration-700 ease-in-out">
          <div>
            <!-- <h1 class="py-2 px-4 text-lg cursor-pointer">Linkágil</h1> -->
            <img src="../../../assets/imgs/logo-core.svg" alt="" class="w-[50%]">
          </div>
          <div class="flex justify-center items-center gap-2">
            <a variant="outline" class="bg-white p-2 px-4 rounded-md text-teal-700 hover:text-teal-500 border-teal-700 font-bold" href="auth/register">Registrar</a>
            <a class=" p-2 px-4 rounded-md bg-teal-700 hover:bg-teal-600 text-white font-bold" href="auth/login">Entrar</a>
          </div>
        </div>
      </header>
    </div>
  </nav>
</template>
<script setup>
import { Button } from '@/components/ui/button'

const props = defineProps({
  navbarClass: {
    type: String,
    default: ''
  },
  isScrolled: {
    type: Boolean,
    default: false
  }
})
</script>
<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
}

.navbar.shadow {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
