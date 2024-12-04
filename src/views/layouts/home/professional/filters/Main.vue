<template>
  <div class="bg-base-100 p-4 rounded-lg shadow-md">
    <h3 class="text-lg font-semibold mb-4">Filtros</h3>

    <!-- Search Input -->
    <div class="form-control mb-4">
      <label class="label">
        <span class="label-text">Buscar</span>
      </label>
      <input type="text" placeholder="Pesquisar cards..." class="input input-bordered w-full" v-model="localSearch"
        @input="emitFilters" />
    </div>

    <!-- Category Filters -->
    <div class="mb-4">
      <h4 class="text-sm font-medium mb-2">Categorias</h4>
      <div class="flex flex-col space-y-2">
        <label v-for="category in categories" :key="category" class="flex items-center space-x-2">
          <input type="checkbox" :value="category" v-model="localCategories" class="checkbox" @change="emitFilters" />
          <span>{{ category }}</span>
        </label>
      </div>
    </div>

    <!-- Tag Filters -->
    <div>
      <h4 class="text-sm font-medium mb-2">Tags</h4>
      <div class="flex flex-col space-y-2">
        <label v-for="tag in tags" :key="tag" class="flex items-center space-x-2">
          <input type="checkbox" :value="tag" v-model="localTags" class="checkbox" @change="emitFilters" />
          <span>{{ tag }}</span>
        </label>
      </div>
    </div>

    <!-- Clear Filters Button -->
    <button class="btn btn-ghost w-full mt-4" @click="clearFilters">
      Limpar Filtros
    </button>
  </div>
</template>

<script setup>
</script>
