<template>
  <div class="p-4 rounded h-auto">
    <div class="form-control mb-4">
      <label class="label">
        <span class="label-text">Localidade:</span>
      </label>
      <input type="input" placeholder="Pesquisar cards..." class="input input-bordered w-full" v-model="localSearch"
        @input="emitFilters" />
    </div>
    <div class="form-control mb-4">
      <label class="label">
        <span class="label-text">Valor de/até:</span>
      </label>
      <input type="range" min="0" max="100" value="25" class="range range-info" step="25" />
      <div class="flex w-full justify-between px-2 text-xs">
        <span>R$40.00</span>
        <span>R$70.00</span>
        <span>R$100.00</span>
        <span>R$130.00</span>
        <span>R$150.00</span>
      </div>
    </div>
    <div class="form-control mb-4">
      <label class="label">
        <span class="label-text">Especialidade:</span>
      </label>
      <input type="input" placeholder="Pesquisar cards..." class="input input-bordered w-full" v-model="localSearch"
        @input="emitFilters" />
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  label: String,
  type: String,
})
</script>
