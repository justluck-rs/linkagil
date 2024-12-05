<template>
  <article class="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-all flex flex-col gap-6">
    <div class="flex items-start justify-between">
      <img
        src="../../../../../assets/imgs/fivcon-logo-small.svg"
        alt="Logo"
        class="w-14 h-14 rounded-full border border-gray-200 object-cover"
      />
      <div class="flex-1 pl-4">
        <h2 class="text-lg font-semibold text-gray-800">Dra. Maria da Silva</h2>
        <p class="text-sm text-gray-500">CRP: 123456</p>
      </div>
      <Icon icon="material-symbols:info-outline" class="text-2xl cursor-pointer hover:text-sky-500" />
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex justify-between items-center flex-wrap">
        <div class="flex items-center gap-3 text-gray-500">
          <Icon icon="uim:whatsapp" class="text-2xl hover:text-green-500 transition-colors" />
          <Icon icon="mage:instagram-square" class="text-2xl hover:text-pink-500 transition-colors" />
          <Icon icon="carbon:logo-facebook" class="text-2xl hover:text-blue-500 transition-colors" />
          <Icon icon="fa:youtube-square" class="text-xl hover:text-red-500 transition-colors" />
        </div>
        <div class="flex items-center gap-1 text-yellow-500">
          <Icon icon="ant-design:star-filled" class="" />
          <Icon icon="ant-design:star-filled" class="" />
          <Icon icon="ant-design:star-filled" class="" />
          <Icon icon="ant-design:star-filled" class="" />
          <Icon icon="ant-design:star-filled" class="" />
          <span class="text-gray-500 text-sm">(5.0)</span>
        </div>
      </div>
      <div class="divider">Sobre</div>
      <p class="text-sm text-gray-600">
        "Apaixonada por ajudar as pessoas a encontrarem equilíbrio emocional e desenvolvimento pessoal."
      </p>
    </div>

    <div class="flex justify-between items-center">
      <div>
        <p class="text-sm text-gray-500">Atendimento</p>
        <p class=" font-semibold text-gray-800">R$ 150/h</p>
      </div>
      <button class="flex justify-center items-center gap-2 p-2 hover:border-b-2 border-sky-500">
        <span>Ver perfil completo</span>
        <Icon icon="lucide:arrow-right" />
      </button>
    </div>
    <button class="flex justify-center items-center gap-2 bg-sky-500 text-white hover:bg-green-500 shadow p-2 rounded hover:text-black">
      <Icon icon="meteor-icons:whatsapp" class="text-xl" />
      <span>Enviar Mensagem</span>
    </button>
  </article>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style>
.btn-primary {
  background-color: #1d4ed8;
  color: white;
  border: none;
}
.btn-primary:hover {
  background-color: #2563eb;
}
</style>
