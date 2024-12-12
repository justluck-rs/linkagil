<template>
  <section class="min-h-screen bg-slate-50 flex justify-center items-center">
    <div>
      <div class="p-4 w-full flex justify-center">
        <img src="../../../../assets/imgs/fivcon-logo-small.svg" alt="" class="w-[20%]">
      </div>
      <Card class="bg-white p-6 w-[500px]">
        <div class="grid w-full items-center gap-1.5 mb-4">
          <Input id="name" type="name" placeholder="Nome Completo" />
        </div>
        <div class="grid w-full items-center gap-1.5 mb-4">
          <Input id="email" type="email" placeholder="Email" />
        </div>
        <div class="grid w-full items-center gap-1.5 mb-4">
          <Input id="phone" type="phone" placeholder="Contato" />
        </div>
        <div class="grid w-full items-center gap-1.5 mb-4">
          <Input id="password" type="password" placeholder="Senha" />
        </div>
        <div class="grid w-full items-center gap-1.5 mb-4">
          <Input id="password" type="password" placeholder="Confirmar Senha" />
        </div>
        <br>
        <Button type="submit" class="w-full text-white" @click="register">
          Enviar
        </Button>
        <div class="mt-2">Ja tenho tenho uma <a class="text-teal-700" href="login">conta</a></div>
      </Card>
    </div>
  </section>
</template>

<script setup lang='ts'>
  import { Button } from '@/components/ui/button'
  import { Card } from '@/components/ui/card'
  import { Input } from '@/components/ui/input'

</script>
