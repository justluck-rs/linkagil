<template>
  <section class="min-h-screen bg-white flex justify-center items-center mt-[-90px]">
    <Tabs default-value="account" class="w-[400px]">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="account">
          Profissional
        </TabsTrigger>
        <TabsTrigger value="password">
          Paciente
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Profissional</CardTitle>
            <CardDescription>
              Login somente para os profissionail. Informe seu email e senha e clique em Entrar.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-3">
            <div class="space-y-1">
              <Label for="name">Email</Label>
              <Input id="name" type="email" placeholder="email"/>
            </div>
            <div class="space-y-1">
              <Label for="username">Senha</Label>
              <Input id="username" type="password" placeholder="senha"/>
            </div>
          </CardContent>
          <CardFooter class="flex flex-col">
            <Button class="w-full">Entrar</Button>
            <div class="mt-3">Ainda não possuo uma <a class="text-teal-700" href="register">Conta</a></div>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Paciente</CardTitle>
            <CardDescription>
              Login somente para os Pacientes. Informe seu email e senha e clique em Entrar.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-3">
            <div class="space-y-1">
              <Label for="name">Email</Label>
              <Input id="name" type="email" placeholder="email"/>
            </div>
            <div class="space-y-1">
              <Label for="username">Senha</Label>
              <Input id="username" type="password" placeholder="senha"/>
            </div>
          </CardContent>
          <CardFooter class="flex flex-col">
            <Button class="w-full">Entrar</Button>
            <div class="mt-3">Ainda não possuo uma <a class="text-teal-700" href="register">Conta</a></div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

    <!-- <div>
      <div class="p-4 w-full flex justify-center">
        <img src="../../../../assets/imgs/fivcon-logo-small.svg" alt="" class="w-[20%]">
      </div>
      <Card class="bg-white p-6 w-[450px]">
        <div class="grid w-full items-center gap-1.5 mb-4">
          <Input id="email" type="email" placeholder="Email" />
        </div>
        <div class="grid w-full items-center gap-1.5 mb-4">
          <Input id="password" type="password" placeholder="password" />
        </div>
        <br>
        <Button type="submit" class="w-full text-white" @click="login">
          Entrar
        </Button>
        <div class="mt-3">Ainda não possuo uma <a class="text-teal-700" href="register">conta</a></div>
      </Card>
    </div> -->
  </section>
</template>

<script setup lang='ts'>
  import { Button } from '@/components/ui/button'
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
  import { Input } from '@/components/ui/input'
  import { Label } from '@/components/ui/label'
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from '@/components/ui/tabs'
</script>
