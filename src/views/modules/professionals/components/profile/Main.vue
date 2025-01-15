<template>
  <div class="container mx-auto p-4 mt-24 grid grid-cols-1 lg:grid-cols-4 gap-4">
    <Card  class="col-span-3">
      <CardHeader>
        <CardTitle>Dra. Maria Oliveira</CardTitle>
        <CardDescription>Psicóloga Clínica | CRP 06/123456</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div>
            <h3 class="font-semibold mb-2">Sobre a Profissional</h3>
            <p>
              Psicóloga clínica com mais de 10 anos de experiência, especializada em 
              saúde mental, transtornos de ansiedade e depressão. Minha abordagem 
              terapêutica é centrada no cliente, utilizando técnicas da Terapia 
              Cognitivo-Comportamental (TCC) e Psicologia Humanista.
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">Formação Acadêmica</h3>
            <ul class="list-disc list-inside">
              <li>Graduação em Psicologia - Universidade de São Paulo (USP)</li>
              <li>Mestrado em Psicologia Clínica - Pontifícia Universidade Católica (PUC-SP)</li>
              <li>Especialização em Terapia Cognitivo-Comportamental</li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold mb-2">Áreas de Atuação</h3>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">Ansiedade</Badge>
              <Badge variant="secondary">Depressão</Badge>
              <Badge variant="secondary">Estresse</Badge>
              <Badge variant="secondary">Relacionamentos</Badge>
              <Badge variant="secondary">Autoestima</Badge>
              <Badge variant="secondary">Luto</Badge>
            </div>
          </div>

          <div>
            <h3 class="font-semibold mb-2">Informações de Contato</h3>
            <div class="space-y-2">
              <p> Consultório: Rua Oscar Freire, 1000 - Pinheiros, São Paulo - SP</p>
              <p> (11) 98765-4321</p>
              <p> contato@drmariaoliveira.com.br</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card class="col-span-1">
      <Calendar v-model="value"  :weekday-format="'short'" class="col-span-1 rounded-md border" />
    </Card>
  </div>
</template>

<script setup>
  import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
  import { Badge } from '@/components/ui/badge'
  import { Calendar } from '@/components/ui/calendar'
</script>