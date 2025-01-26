<template>
  <div class="min-h-screen bg-gray-50 p-8 mt-14">
    <div class="max-w-7xl mx-auto space-y-3 items-start">
      <Button variant="outline" size="sm" @click="$router.push('/')">
        <Icon icon="mingcute:left-fill" width="24" height="24" />
      </Button>

      <div class="gap-8 grid grid-cols-10 flex">
        <Card class="p-8 col-span-7 space-y-8">
          <div class="flex gap-6">
            <Avatar class="w-32 h-32">
              <AvatarImage src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2069&auto=format&fit=crop" />
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
            <div class="space-y-4 flex-1">
              <div>
                <h1 class="text-3xl font-bold">Dra. Maria Santos</h1>
                <p class="text-gray-500">Psicóloga Clínica - CRP 01/12345</p>
              </div>

              <div class="flex gap-2">
                <Badge variant="secondary" class="flex items-center gap-1">
                  Terapia Cognitivo-Comportamental
                </Badge>
                <Badge variant="secondary" class="flex items-center gap-1">
                  10 anos de experiência
                </Badge>
              </div>

              <div class="flex gap-6 text-sm text-gray-500">
                <span class="flex items-center gap-2"><Icon icon="icon-park-solid:local"/>São Paulo, SP</span>
                <span class="flex items-center gap-2"><Icon icon="line-md:phone"/>(11) 99999-9999</span>
                <span class="flex items-center gap-2"><Icon icon="mi:email"/>maria.santos@email.com</span>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <p class="text-lg font-bold">Sobre Mim</p>
            <p class="text-gray-600 leading-relaxed">
              Sou psicóloga clínica com especialização em Terapia Cognitivo-Comportamental pela USP.
              Atuo há 10 anos no atendimento de adolescentes e adultos, com foco em ansiedade,
              depressão e desenvolvimento pessoal. Acredito na importância de uma abordagem
              personalizada e acolhedora para cada paciente.
            </p>
          </div>

          <div class="grid grid-cols-2">
            <div class="space-y-4 col-span-1 pl-0 p-4">
              <span class="text-lg font-bold">Video Apresentação</span>
              <iframe
                src="https://www.youtube.com/embed/yEa0_HPcrBg"
                class="col-span-1 w-full h-[200px]"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="space-y-4 col-span-1 pr-0 p-4">
              <span class="text-lg font-bold">Especialidades</span>
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <h4 class="font-medium">Áreas de atuação</h4>
                  <ul class="list-disc list-inside text-gray-600">
                    <li>Ansiedade e Depressão</li>
                    <li>Terapia de Casal</li>
                    <li>Desenvolvimento Pessoal</li>
                    <li>Gestão de Estresse</li>
                  </ul>
                </div>
                <div class="space-y-2">
                  <h4 class="font-medium">Público</h4>
                  <ul class="list-disc list-inside text-gray-600">
                    <li>Adolescentes</li>
                    <li>Adultos</li>
                    <li>Casais</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </Card>

        <Card class="col-span-3">
          <CardHeader>
              <CardTitle>
                Agende sua consulta
              </CardTitle>
            <CardDescription>
              Selecione uma data e horário disponível
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar v-model="date" class="rounded-md border bg-white mb-6" />
            <Separator class="my-4 bg-slate-50" />
            <div class="mt-4 font-bold">Horario</div>

            <div class="grid grid-cols-3 gap-4 py-4">
              <Button class="gap-2 bg-white text-black hover:bg-teal-100" v-for="(times, index) in timeSlots" :key="index">
                {{ times }}
              </Button>
            </div>
            <Button class="w-full bg-teal-700"><Icon icon="mdi:calendar-outline"/>Agendar</Button>

          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Calendar } from '@/components/ui/v-calendar'
import { ref } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from '@iconify/vue'
import { Separator } from "@/components/ui/separator"

const date = ref(new Date())
const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
];

</script>
