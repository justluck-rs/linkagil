<template>
  <footer class="sky-200 rounded-t-[40px] bg-slate-500 text-white py-4 px-6 md:px-12 mt-24">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      <div>
        <h3 class="text-xl font-bold mb-2">Links Rápidos</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Início</a></li>
          <li><a href="#" class="hover:underline">Profissionais</a></li>
          <li><a href="#" class="hover:underline">Agendar Consulta</a></li>
          <li><a href="#" class="hover:underline">FAQ</a></li>
        </ul>
      </div>

      <div v-for="(filterGroup, index) in props.filters" :key="index">
        <h3 class="text-lg font-semibold mb-4">{{ filterGroup.name }}</h3>
        <div class="scroller overflow-y-auto max-h-60">
          <Table>
            <TableHeader>

            </TableHeader>
            <TableBody class="cursor-pointer">
              <TableRow v-for="(filter, i) in filterGroup.filters" :key="i">
                <TableCell><a href="#">{{ filter.label }}</a></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
    <section class="pt-12">
      <div class="flex justify-center flex-col items-center">
        <h3 class="text-xl font-bold mb-4">Sobre o Linkágil</h3>
        <p class="text-sm leading-relaxed">
          O Linkágil é uma plataforma que conecta você à profissionais especializados, facilitando o acesso a
          informações, serviços e consultas.
        </p>
      </div>
      <div class="mt-10 flex justify-center space-x-6">
        <a href="#" class="hover:text-gray-300">
          <Icon icon="lucide:facebook" class="w-4 h-4" />
        </a>
        <a href="#" class="hover:text-gray-300">
          <Icon icon="lucide:instagram" class="w-4 h-4" />
        </a>
        <a href="#" class="hover:text-gray-300">
          <Icon icon="lucide:twitter" class="w-4 h-4" />
        </a>
        <a href="#" class="hover:text-gray-300">
          <Icon icon="lucide:linkedin" class="w-4 h-4" />
        </a>
      </div>
    </section>

    <div class="mt-8 border-gray-500 pt-4 text-center">
      <p>&copy; 2024 Linkágil. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
const props = defineProps({
  filters: {
    type: Array,
    required: true
  },
})
</script>
<style scoped>
.scroller {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.4) initial;
}

</style>
