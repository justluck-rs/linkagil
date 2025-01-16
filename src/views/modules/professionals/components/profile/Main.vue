<template>
  <div class="min-h-screen bg-gray-50 p-8 mt-24">
    <div class="max-w-6xl mx-auto space-y-8 flex grid grid-cols-7 gap-4 items-start">
      <!-- Profile Header -->
      <Card class="flex items-start gap-8 bg-white rounded-lg p-8 shadow-sm col-span-5">
        <Avatar class="w-32 h-32">
          <AvatarImage src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2069&auto=format&fit=crop" />
          <AvatarFallback>DP</AvatarFallback>
        </Avatar>

        <div class="space-y-4 flex-1 ">
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
            <span class="flex items-center gap-2">São Paulo, SP</span>
            <span class="flex items-center gap-2">(11) 99999-9999</span>
            <span class="flex items-center gap-2">maria.santos@email.com</span>
          </div>
        </div>
      </Card>

      <Card class="col-span-2 mt-[-10]">
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            Agende sua consulta
          </CardTitle>
          <CardDescription>
            Selecione uma data e horário disponível
          </CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <Calendar
            mode="single"
            v-model="date"
            class="rounded-md border"
          />

          <Separator class="my-4" />
        </CardContent>
      </Card>
      <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div class="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sobre mim</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-gray-600 leading-relaxed">
                Sou psicóloga clínica com especialização em Terapia Cognitivo-Comportamental pela USP.
                Atuo há 10 anos no atendimento de adolescentes e adultos, com foco em ansiedade,
                depressão e desenvolvimento pessoal. Acredito na importância de uma abordagem
                personalizada e acolhedora para cada paciente.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Especialidades</CardTitle>
            </CardHeader>
            <CardContent class="grid grid-cols-2 gap-4">
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
            </CardContent>
          </Card>
        </div>


        <Card>
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              Agende sua consulta
            </CardTitle>
            <CardDescription>
              Selecione uma data e horário disponível
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <Calendar
              mode="single"
              v-model="date"
              class="rounded-md border"
            />

            <Separator class="my-4" />
          </CardContent>
        </Card>
      </div> -->
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"

// const date = ref(new Date())
// const selectedTime = ref('')

// const timeSlots = [
//   "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
//   "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
// ]

// const formatDate = (date) => {
//   return new Intl.DateTimeFormat('pt-BR', {
//     weekday: 'long',
//     day: 'numeric',
//     month: 'long'
//   }).format(date)
// }

// const handleTimeSelect = (time) => {
//   selectedTime.value = time
// }

// const handleSchedule = () => {
//   console.log('Agendamento:', {
//     date: date.value,
//     time: selectedTime.value
//   })
//   // Aqui você pode adicionar a lógica de agendamento
// }
</script>
