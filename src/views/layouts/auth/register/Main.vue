<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
    <div class="container mx-auto px-4">
      <h1 v-if="!selectedType" class="text-3xl font-bold text-center mb-3">Bem-vindo ao LinkÁgil</h1>
      <p v-if="!selectedType" class="text-gray-600 text-center text-sm mb-10">Escolha como você deseja se cadastrar na plataforma</p>
      
      <div v-if="!selectedType" class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <!-- Card Cliente -->
        <Card class="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer bg-white/95 backdrop-blur border hover:border-blue-300" @click="selectedType = 'client'">
          <CardHeader class="space-y-3">
            <div class="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <Icon icon="material-symbols:person-add" class="w-8 h-8 text-blue-500" />
            </div>
            <CardTitle class="text-xl font-semibold text-center text-blue-600">Cliente</CardTitle>
            <CardDescription class="text-center text-gray-600 text-sm">
              Encontre profissionais qualificados para seus projetos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul class="space-y-3">
              <li class="flex items-center bg-blue-50/50 p-2.5 rounded-md group-hover:bg-blue-50 transition-colors">
                <Icon icon="material-symbols:check-circle" class="mr-2.5 text-blue-400 w-5 h-5" />
                <span class="text-gray-600 text-sm">Publique suas necessidades gratuitamente</span>
              </li>
              <li class="flex items-center bg-blue-50/50 p-2.5 rounded-md group-hover:bg-blue-50 transition-colors">
                <Icon icon="material-symbols:description" class="mr-2.5 text-blue-400 w-5 h-5" />
                <span class="text-gray-600 text-sm">Receba propostas personalizadas</span>
              </li>
              <li class="flex items-center bg-blue-50/50 p-2.5 rounded-md group-hover:bg-blue-50 transition-colors">
                <Icon icon="material-symbols:star" class="mr-2.5 text-blue-400 w-5 h-5" />
                <span class="text-gray-600 text-sm">Escolha o melhor profissional</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <!-- Card Profissional -->
        <Card class="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer bg-white/95 backdrop-blur border hover:border-green-300" @click="selectedType = 'professional'">
          <CardHeader class="space-y-3">
            <div class="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
              <Icon icon="material-symbols:work" class="w-8 h-8 text-green-500" />
            </div>
            <CardTitle class="text-xl font-semibold text-center text-green-600">Profissional</CardTitle>
            <CardDescription class="text-center text-gray-600 text-sm">
              Expanda seus negócios e encontre novos clientes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul class="space-y-3">
              <li class="flex items-center bg-green-50/50 p-2.5 rounded-md group-hover:bg-green-50 transition-colors">
                <Icon icon="material-symbols:trending-up" class="mr-2.5 text-green-400 w-5 h-5" />
                <span class="text-gray-600 text-sm">Receba leads qualificados diariamente</span>
              </li>
              <li class="flex items-center bg-green-50/50 p-2.5 rounded-md group-hover:bg-green-50 transition-colors">
                <Icon icon="material-symbols:dashboard" class="mr-2.5 text-green-400 w-5 h-5" />
                <span class="text-gray-600 text-sm">Gerencie seus projetos em um só lugar</span>
              </li>
              <li class="flex items-center bg-green-50/50 p-2.5 rounded-md group-hover:bg-green-50 transition-colors">
                <Icon icon="material-symbols:visibility" class="mr-2.5 text-green-400 w-5 h-5" />
                <span class="text-gray-600 text-sm">Aumente sua visibilidade no mercado</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <!-- Formulário Cliente -->
      <div v-if="selectedType === 'client'" class="max-w-xl mx-auto">
        <div class="flex items-center mb-6">
          <button @click="selectedType = null" class="flex items-center text-blue-500 hover:text-blue-700 transition-colors text-sm">
            <Icon icon="material-symbols:arrow-back" class="w-5 h-5 mr-1.5" /> 
            <span>Voltar</span>
          </button>
        </div>
        
        <Card class="bg-white/95 backdrop-blur shadow-md">
          <CardHeader class="text-center pb-6">
            <div class="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Icon icon="material-symbols:person-add" class="w-10 h-10 text-blue-500" />
            </div>
            <CardTitle class="text-2xl font-semibold text-blue-600 mb-1">Cadastro de Cliente</CardTitle>
            <CardDescription class="text-sm text-gray-500">Preencha seus dados para criar sua conta</CardDescription>
          </CardHeader>
          <CardContent>
            <form class="space-y-4 max-w-md mx-auto">
              <div class="space-y-1.5">
                <label class="text-xs font-medium text-gray-600">Nome Completo</label>
                <div class="relative">
                  <Icon icon="material-symbols:person" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input type="text" v-model="clientForm.name" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-colors" placeholder="Digite seu nome completo" />
                </div>
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-medium text-gray-600">Email</label>
                <div class="relative">
                  <Icon icon="material-symbols:mail" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input type="email" v-model="clientForm.email" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-colors" placeholder="Digite seu email" />
                </div>
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-medium text-gray-600">Telefone</label>
                <div class="relative">
                  <Icon icon="material-symbols:phone" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input type="tel" v-model="clientForm.phone" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-colors" placeholder="Digite seu telefone" />
                </div>
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-medium text-gray-600">Senha</label>
                <div class="relative">
                  <Icon icon="material-symbols:lock" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input type="password" v-model="clientForm.password" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-colors" placeholder="Digite sua senha" />
                </div>
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-medium text-gray-600">Confirmar Senha</label>
                <div class="relative">
                  <Icon icon="material-symbols:lock" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input type="password" v-model="clientForm.confirmPassword" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-colors" placeholder="Confirme sua senha" />
                </div>
              </div>
              <button type="submit" class="w-full bg-blue-500 text-white py-2.5 px-4 rounded-md text-sm font-medium hover:bg-blue-600 focus:ring-2 focus:ring-blue-400/50 transition-colors flex items-center justify-center space-x-1.5">
                <span>Criar Conta</span>
                <Icon icon="material-symbols:arrow-forward" class="w-4 h-4" />
              </button>
            </form>
          </CardContent>
        </Card>
      </div>

      <!-- Formulário Profissional -->
      <div v-if="selectedType === 'professional'" class="max-w-4xl mx-auto">
        <header class="mb-6">
          <button @click="selectedType = null" class="flex items-center text-green-500 hover:text-green-700 transition-colors text-sm">
            <Icon icon="material-symbols:arrow-back" class="w-5 h-5 mr-1.5" />
            <span>Voltar</span>
          </button>
          <div class="text-center">
            <span class="text-2xl font-semibold text-green-600 mb-1">Cadastro de Profissional</span>
          </div>
        </header>

        <!-- Stepper -->
        <div class="mb-8">
          <div class="flex justify-between items-center">
            <div v-for="(step, index) in steps" :key="index" class="flex-1 relative">
              <!-- Linha conectora -->
              <div v-if="index < steps.length - 1" class="absolute w-full h-0.5 top-1/2 left-1/2 transform -translate-y-1/2" :class="index < currentStep ? 'bg-green-500' : 'bg-gray-200'"></div>
              
              <!-- Círculo com ícone -->
              <div class="relative z-10 flex flex-col items-center">
                <div :class="`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${index <= currentStep ? 'bg-green-500 text-white shadow-lg shadow-green-200' : 'bg-gray-100 text-gray-400'}`">
                  <Icon :icon="step.icon" class="w-6 h-6" />
                </div>
                
                <!-- Título e descrição -->
                <div class="mt-3 text-center">
                  <p :class="`font-medium text-sm mb-0.5 ${index <= currentStep ? 'text-green-600' : 'text-gray-400'}`">
                    {{ step.title }}
                  </p>
                  <p class="text-xs text-gray-500 hidden md:block">
                    {{ step.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card class="bg-white/95 backdrop-blur shadow-md p-8">
          
          <CardContent>

            <form class="space-y-6 max-w-md mx-auto">
              <!-- Step 1: Dados Pessoais -->
              <div v-if="currentStep === 0" class="grid grid-cols-1 gap-4">
                <div class="space-y-1.5">
                  <label class="text-xs font-medium text-gray-600">Nome Completo</label>
                  <div class="relative">
                    <Icon icon="material-symbols:person" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input type="text" v-model="professionalForm.name" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors" placeholder="Digite seu nome completo" />
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-xs font-medium text-gray-600">Email</label>
                    <div class="relative">
                      <Icon icon="material-symbols:mail" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input type="email" v-model="professionalForm.email" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors" placeholder="Digite seu email" />
                    </div>
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-medium text-gray-600">CPF</label>
                    <div class="relative">
                      <Icon icon="material-symbols:badge" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input type="text" v-model="professionalForm.cpf" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors" placeholder="Digite seu CPF" />
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-xs font-medium text-gray-600">Senha</label>
                    <div class="relative">
                      <Icon icon="material-symbols:lock" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input type="password" v-model="professionalForm.password" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors" placeholder="Digite sua senha" />
                    </div>
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-medium text-gray-600">Confirmar Senha</label>
                    <div class="relative">
                      <Icon icon="material-symbols:lock" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input type="password" v-model="professionalForm.confirmPassword" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors" placeholder="Confirme sua senha" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Step 2: Dados Pessoais Complementares -->
              <div v-if="currentStep === 1" class="grid grid-cols-1 gap-4">
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-xs font-medium text-gray-600">Telefone</label>
                    <div class="relative">
                      <Icon icon="material-symbols:phone" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input type="tel" v-model="professionalForm.phone" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors" placeholder="Digite seu telefone" />
                    </div>
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-medium text-gray-600">Data de Nascimento</label>
                    <div class="relative">
                      <Icon icon="material-symbols:calendar-today" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input type="date" v-model="professionalForm.birth_date" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors" />
                    </div>
                  </div>
                </div>

                <div class="space-y-1.5">
                  <label class="text-xs font-medium text-gray-600">Gênero</label>
                  <div class="relative">
                    <Icon icon="material-symbols:person" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select v-model="professionalForm.gender" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors">
                      <option value="">Selecione</option>
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div class="space-y-1.5">
                  <label class="text-xs font-medium text-gray-600">Biografia</label>
                  <div class="relative">
                    <textarea v-model="professionalForm.bio" rows="4" class="w-full p-3 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors" placeholder="Conte um pouco sobre você"></textarea>
                  </div>
                </div>
              </div>

              <!-- Step 3: Endereço -->
              <div v-if="currentStep === 2" class="grid grid-cols-1 gap-4">
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-xs font-medium text-gray-600">CEP</label>
                    <div class="relative">
                      <Icon icon="material-symbols:location-on" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input type="text" v-model="professionalForm.address_zipcode" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors" placeholder="Digite seu CEP" />
                    </div>
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-medium text-gray-600">Rua</label>
                    <div class="relative">
                      <Icon icon="material-symbols:location-on" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input type="text" v-model="professionalForm.address_street" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors" placeholder="Digite sua rua" />
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-xs font-medium text-gray-600">Número</label>
                    <div class="relative">
                      <Icon icon="material-symbols:numbers" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input type="text" v-model="professionalForm.address_number" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors" placeholder="Número" />
                    </div>
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-medium text-gray-600">Complemento</label>
                    <div class="relative">
                      <Icon icon="material-symbols:home" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input type="text" v-model="professionalForm.address_complement" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors" placeholder="Complemento" />
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-3 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-xs font-medium text-gray-600">Bairro</label>
                    <div class="relative">
                      <Icon icon="material-symbols:location-on" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input type="text" v-model="professionalForm.address_neighborhood" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors" placeholder="Bairro" />
                    </div>
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-medium text-gray-600">Cidade</label>
                    <div class="relative">
                      <Icon icon="material-symbols:location-city" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input type="text" v-model="professionalForm.address_city" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors" placeholder="Cidade" />
                    </div>
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-medium text-gray-600">Estado</label>
                    <div class="relative">
                      <Icon icon="material-symbols:map" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input type="text" v-model="professionalForm.address_state" class="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-colors" placeholder="Estado" />
                    </div>
                  </div>
                </div>
              </div>

            </form>
          </CardContent>
        </Card>
        <!-- Navigation Buttons -->
        <div class="flex justify-between mt-6">
          <button v-if="currentStep > 0" 
                  type="button" 
                  @click="prevStep"
                  class="px-4 py-2 text-sm text-green-600 hover:text-green-700 font-medium flex items-center">
            <Icon icon="material-symbols:arrow-back" class="w-4 h-4 mr-1" />
            Anterior
          </button>
          <button v-if="currentStep < steps.length - 1" 
                  type="button"
                  @click="nextStep"
                  class="ml-auto px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium hover:bg-green-600 focus:ring-2 focus:ring-green-400/50 transition-colors flex items-center">
            Próximo
            <Icon icon="material-symbols:arrow-forward" class="w-4 h-4 ml-1" />
          </button>
          <button v-else 
                  type="submit"
                  class="ml-auto px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium hover:bg-green-600 focus:ring-2 focus:ring-green-400/50 transition-colors flex items-center">
            Criar Conta
            <Icon icon="material-symbols:check" class="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

const selectedType = ref(null)
const currentStep = ref(0)

const clientForm = ref({
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
})

const professionalForm = ref({
  // Dados Pessoais
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  
  // Dados Profissionais
  profession: '',
  experience: '',
  specialties: [],
  description: '',
  
  // Redes Sociais e Plano
  linkedin: '',
  instagram: '',
  portfolio: '',
  selectedPlan: 'basic' // basic, pro, premium
})

const steps = [
  {
    title: 'Dados Pessoais',
    description: 'Informações básicas para sua conta',
    icon: 'material-symbols:person'
  },
  {
    title: 'Dados Profissionais', 
    description: 'Sua experiência e especialidades',
    icon: 'material-symbols:work'
  },
  {
    title: 'Redes Sociais e Plano',
    description: 'Conecte suas redes e escolha um plano',
    icon: 'material-symbols:share'
  }
]

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}
</script>