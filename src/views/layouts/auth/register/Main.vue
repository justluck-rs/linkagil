<template>
  <section class="flex justify-center items-center">

    <Card class="mx-auto w-full h-screen flex justify-center">
      <div class="w-[80%] items-start gap-2">
        <Stepper class="p-6" v-model="stepIndex">
          <StepperItem
            v-for="step in steps"
            :key="step.step"
            v-slot="{ state }"
            class="relative flex w-full flex-col items-center justify-center mt-20"
            :step="step.step"
          >
            <StepperSeparator
              v-if="step.step !== steps[steps.length - 1].step"
              class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
            />

            <StepperTrigger as-child>
              <Button
                :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                size="icon"
                class="z-10 rounded-full shrink-0"
                :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
                @click="step_selected = step.step"
              >
                <Icon v-if="state === 'completed'" icon="mdi:check-bold" class="size-5" width="24" height="24" />
                <Icon v-if="state === 'active'" icon="mdi:circle" width="24" height="24" />
                <Icon v-if="state === 'inactive'" icon="ix:circle-dot" width="512" height="512" />
              </Button>
            </StepperTrigger>

            <div class="mt-5 flex flex-col items-center text-center">
              <StepperTitle
                :class="[state === 'active' && 'text-primary']"
                class="text-sm font-semibold transition lg:text-base"
              >
                {{ step.title }}
              </StepperTitle>
              <StepperDescription
                :class="[state === 'active' && 'text-primary']"
                class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm"
              >
                {{ step.description }}
              </StepperDescription>
            </div>
          </StepperItem>
        </Stepper>

        <div class="flex justify-center">
          <div class="w-[60%] mt-10">
            <template v-if="stepIndex == 1">
              <CardHeader>
                <CardTitle class="text-xl">
                  Dados Pessoais
                </CardTitle>
                <CardDescription>
                  Coloque suas informaçoes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="grid gap-4">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="grid gap-2">
                      <Label for="first-name">Nome</Label>
                      <Input id="first-name" placeholder="Fulano" required />
                    </div>
                    <div class="grid gap-2">
                      <Label for="last-name">Sobre Nome</Label>
                      <Input id="last-name" placeholder="Silva" required />
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div class="grid gap-2">
                      <Label for="first-name">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                    </div>
                    <div class="grid gap-2">
                      <Label for="last-name">Senha</Label>
                      <Input id="password" type="password" />
                    </div>
                  </div>


                </div>
                <div class="mt-4 text-center text-sm">
                    Ja possui uma conta?
                  <a href="login" class="underline">
                    Entrar
                  </a>
                </div>
              </CardContent>
            </template>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="w-[80%] flex items-center justify-between mt-4">
            <Button :disabled="stepIndex == 1" variant="outline" size="sm" @click="stepIndex -= 1">
              <Icon icon="lucide:chevron-left" width="24" height="24" />
              Voltar
            </Button>
            <div class="flex items-center gap-3">
              <Button v-if="stepIndex !== 3" :type="'submit'" size="sm" @click="stepIndex += 1">
                Próximo
                <Icon icon="lucide:chevron-right" width="24" height="24" />
              </Button>

              <Button v-if="stepIndex === 3" size="sm" type="submit">
                Cadastrar
                <Icon icon="lucide:user-pen" width="24" height="24" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </Card>
  </section>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Stepper, StepperDescription, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/components/ui/stepper'
import { Icon } from '@iconify/vue';
import { ref } from 'vue'

const steps = [
  {
    step: 1,
    title: 'Pessoal',
    description: 'Forneça seu Nome e Email',
  },
  {
    step: 2,
    title: 'Profissional',
    description: 'Alguns detalhes sobre seus Dados Profissonais',
  },
  {
    step: 3,
    title: 'Invite your team',
    description: 'Start collaborating with your team',
  },
]
 const stepIndex = ref(1)

</script>
