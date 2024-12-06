<template>
  <section class="min-h-screen flex flex-col transaction">
    <!-- Navbar -->
    <nav :class="navbarClass"
      class="text-white bg-white rounded-b-[20px] top-0 z-50 transition-transform ease-in-out duration-300">
      <div class="container mx-auto space-y-2 pb-4 mb-6">
        <header class="py-4 flex justify-between items-center transition-transform duration-700 ease-in-out"
          :class="{ 'top-0': isScrolled }">
          <div>
            <h1 class="text-lg font-bold text-black">Linkágil</h1>
          </div>
          <div>
            <div class="bg-sky-500 py-2 px-6 rounded flex items-center gap-2 text-base cursor-pointer">
              <p>Entrar</p>
            </div>
          </div>
        </header>

        <article v-if="isScrolled" class="transition-transform duration-700 ease-in-out mb-4">
          <div class="flex flex-col text-center py-1">
            <span class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-600">
              Encontre o Psicólogo Ideal para Você
            </span>
            <span class="mt-4 text-sm text-black">
              Conecte-se com profissionais qualificados para cuidar da sua saúde mental e bem-estar.
            </span>
          </div>
        </article>

        <!-- Search Section -->
        <section class=" bg-white rounded text-black border">
          <div class="flex justify-between items-center gap-2 px-4">
            <input id="search" placeholder="Pesquisar especialidade, motivo ou um nome..."
              class="flex-1 p-2 rounded-md outline-none text-gray-700" />
            <Sheet>
              <SheetTrigger as-child>
                <div class="flex p-4 items-center gap-2 cursor-pointer border-l">
                  <span>Filtros</span>
                  <Icon icon="lucide:filter" />
                </div>
              </SheetTrigger>

              <SheetContent side="top" class="h-screen overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filtrar Profissionais</SheetTitle>
                  <SheetDescription>
                    Utilize os filtros abaixo para encontrar o profissional ideal.
                  </SheetDescription>
                </SheetHeader>

                <div class="grid gap-6 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <!-- Iterando sobre os filtros -->
                  <div v-for="(filterGroup, index) in filters" :key="index" class="">
                    <h3 class="text-lg font-semibold mb-4">{{ filterGroup.name }}</h3>
                    <div class="scroller overflow-y-auto max-h-60">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Opção</TableHead>
                            <TableHead class="w-[100px] text-right">Selecionar</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow v-for="(filter, i) in filterGroup.filters" :key="i">
                            <TableCell>{{ filter.label }}</TableCell>
                            <TableCell class="text-right">
                              <Checkbox :checked="isSelected(filter.value, filterGroup.ref)"
                                @click="toggleFilter(filter.value, filterGroup.ref)" />
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>

                <SheetFooter class="mt-6 flex justify-between items-center">
                  <Button variant="outline" @click="clearAllFilters" class="mr-4">
                    Limpar Filtros
                  </Button>
                  <SheetClose as-child>
                    <Button @click="applyFilters">
                      Aplicar Filtros
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </section>
      </div>
    </nav>

    <!-- Área principal -->
    <main class="mx-4 md:container mt-10" :class="{ 'mt-64': !isScrolled }">
      <div class="flex-grow">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <article v-for="(psychologist, index) in psychologists" :key="index"
            class="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-all flex flex-col justify-between gap-4">
            <div class="flex items-center gap-4">
              <img :src="psychologist.photo" alt="Foto"
                class="w-12 h-12 rounded-full border border-gray-200 object-cover" />
              <div class="flex-1">
                <h2 class="text-sm font-semibold text-gray-800">{{ psychologist.name }}</h2>
                <p class="text-xs text-gray-500">CRP: {{ psychologist.crp }}</p>
                <div class="flex items-center gap-1 text-yellow-400">
                  <Icon icon="ant-design:star-filled" v-for="i in 5" :key="i" />
                  ({{ psychologist.rating }})
                </div>
              </div>
              <Icon icon="material-symbols:info-outline"
                class="text-xl text-gray-400 cursor-pointer hover:text-sky-500 transition" />
            </div>
            <Separator class="my-4" label="Sobre" />
            <div class="flex items-center justify-between">
              <p class="text-xs text-gray-500 text-justify">
                "{{ psychologist.description }}"
              </p>
            </div>

            <div class="flex justify-between items-center">
              <p class="text-xs font-semibold text-gray-800">{{ psychologist.price }}</p>
              <div class="flex justify-between items-center">
                <button class="flex justify-center items-center gap-2 p-2 hover:border-l-2 border-sky-500">
                  <span>Ver perfil completo</span>
                  <Icon icon="lucide:arrow-right" />
                </button>
              </div>
            </div>
            <button
              class="flex justify-center items-center gap-2 bg-gray-800 text-white hover:bg-sky-500 shadow p-2 rounded hover:text-black">
              <Icon icon="meteor-icons:whatsapp" class="text-xl" />
              <span>Enviar Mensagem</span>
            </button>
          </article>
        </div>
      </div>
    </main>

    <!-- Footer -->

    <footer class="bg-white text-black py-4 px-6 md:px-12 mt-24">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- About Section -->
        <div>
          <h3 class="text-xl font-bold mb-4">Sobre o Linkágil</h3>
          <p class="text-sm leading-relaxed">
            O Linkágil é uma plataforma que conecta profissionais de psicologia
            a pacientes, facilitando o acesso a informações e consultas.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-2">Links Rápidos</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">Início</a></li>
            <li><a href="#" class="hover:underline">Profissionais</a></li>
            <li><a href="#" class="hover:underline">Agendar Consulta</a></li>
            <li><a href="#" class="hover:underline">FAQ</a></li>
          </ul>
        </div>

        <!-- Categories -->
        <div>
          <h3 class="text-xl font-bold mb-2">Categorias</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">Psicologia Clínica</a></li>
            <li><a href="#" class="hover:underline">Terapia de Casal</a></li>
            <li><a href="#" class="hover:underline">Psicanálise</a></li>
            <li><a href="#" class="hover:underline">Terapia Infantil</a></li>
          </ul>
        </div>
      </div>

      <!-- Social Media -->
      <div class="mt-10 flex justify-center space-x-6">
        <a href="#" class="hover:text-gray-300">
          <Icon icon="lucide:facebook" class="w-4 h-4" />
        </a>
        <a href="#" class="hover:text-gray-300">
          <Icon icon="lucide:instagram" class="w-4 h-4" />
        </a>
        <a href="#" class="hover:text-gray-300">
          <Icon icon="lucide:twitter" class="w-4 h-4" />
        </a>
        <a href="#" class="hover:text-gray-300">
          <Icon icon="lucide:linkedin" class="w-4 h-4" />
        </a>
      </div>

      <!-- Footer Bottom -->
      <div class="mt-8 border-t border-gray-500 pt-4 text-center text-sm">
        <p>&copy; 2024 Linkágil. Todos os direitos reservados.</p>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';
// import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';


const navbarClass = ref('transition-all shadow-none');
const isScrolled = ref(true);

const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = false
    navbarClass.value = 'w-full bg-sky-500 shadow fixed top-0 z-50 transition-all';
  } else {
    navbarClass.value = 'w-full bg-sky-500  sticky top-0 z-50 transition-all';
    isScrolled.value = true
  }
};

const filters = ref([
  {
    name: 'Especialidade',
    ref: 'specialty',
    filters: [
      { label: 'Psicologia Clínica', value: 'psicologia-clinica' },
      { label: 'Terapia de Casal', value: 'terapia-casal' },
      { label: 'Terapia Infantil', value: 'terapia-infantil' },
      { label: 'Psicanálise', value: 'psicanalise' },
      { label: 'Coach', value: 'coach' },
      { label: 'Nutricionista', value: 'nutricionista' },
      { label: 'Psicanalista', value: 'psicanalista' },
      { label: 'Psicólogo', value: 'psicologo' },
      { label: 'Psiquiatra', value: 'psiquiatra' },
      { label: 'Terapeuta', value: 'terapeuta' }
    ]
  },
  {
    name: 'Motivo',
    ref: 'motivation',
    filters: [
      { label: 'Depressão', value: 'depressao' },
      { label: 'Ansiedade', value: 'ansiedade' },
      { label: 'Estresse', value: 'estresse' },
      { label: 'Autoestima', value: 'autoestima' },
      { label: 'Abuso Sexual', value: 'abuso-sexual' },
      { label: 'Adolescência', value: 'adolescencia' },
      { label: 'Adoção de Filhos', value: 'adocao-filhos' },
      { label: 'Agressividade', value: 'agressividade' },
      { label: 'Alterações de Humor', value: 'alteracoes-humor' },
      { label: 'Angústia', value: 'angustia' },
      { label: 'Anorexia', value: 'anorexia' },
      { label: 'Assertividade', value: 'assertividade' },
      { label: 'Assédio Moral', value: 'assedio-moral' },
      { label: 'Autismo', value: 'autismo' },
      { label: 'Auto Mutilação', value: 'auto-mutilacao' },
      { label: 'Autoconhecimento', value: 'autoconhecimento' },
      { label: 'Borderline', value: 'borderline' },
      { label: 'Bulimia', value: 'bulimia' },
      { label: 'Bullying', value: 'bullying' },
      { label: 'Burnout', value: 'burnout' },
      { label: 'Cirurgia Bariátrica', value: 'cirurgia-bariatrica' },
      { label: 'Ciúmes', value: 'ciumes' },
      { label: 'Claustrofobia', value: 'claustrofobia' },
      { label: 'Compulsão Alimentar', value: 'compulsao-alimentar' },
      { label: 'Controle / Inteligência Emocional', value: 'controle-inteligencia-emocional' },
      { label: 'Criatividade', value: 'criatividade' },
      { label: 'Culpa', value: 'culpa' },
      { label: 'Câncer', value: 'cancer' },
      { label: 'Deficiência Física', value: 'deficiencia-fisica' },
      { label: 'Desmotivação Profissional', value: 'desmotivacao-profissional' },
      { label: 'Dislexia', value: 'dislexia' },
      { label: 'Diversidade', value: 'diversidade' },
      { label: 'Doenças Emocionais', value: 'doencas-emocionais' },
      { label: 'Educação Financeira', value: 'educacao-financeira' },
      { label: 'Empatia', value: 'empatia' },
      { label: 'Empoderamento', value: 'empoderamento' },
      { label: 'Esportes / Atividades Físicas', value: 'esportes-atividades-fisicas' },
      { label: 'Esquizofrenia', value: 'esquizofrenia' },
      { label: 'Estudos e Aprendizados', value: 'estudos-aprendizados' },
      { label: 'Excesso de Peso', value: 'excesso-peso' },
      { label: 'Falta de Desejo', value: 'falta-desejo' },
      { label: 'Foco', value: 'foco' },
      { label: 'Gravidez', value: 'gravidez' },
      { label: 'HIV / AIDS', value: 'hiv-aids' },
      { label: 'Ideação Suicida', value: 'ideacao-suicida' },
      { label: 'LGBTQIAPN+ / Identidade de Gênero', value: 'lgbtqiapn-identidade-genero' },
      { label: 'Menopausa', value: 'menopausa' },
      { label: 'Morte e Luto', value: 'morte-luto' },
      { label: 'Motivação', value: 'motivacao' },
      { label: 'Obesidade', value: 'obesidade' },
      { label: 'Orientação Sexual', value: 'orientacao-sexual' },
      { label: 'Preconceito LGBTQIAPN+', value: 'preconceito-lgbtqiapn' },
      { label: 'Problemas Financeiros', value: 'problemas-financeiros' },
      { label: 'Procrastinação', value: 'procrastinacao' },
      { label: 'Propósito de Vida', value: 'proposito-vida' },
      { label: 'Racismo', value: 'racismo' },
      { label: 'Relacionamentos', value: 'relacionamentos' },
      { label: 'Resiliência', value: 'resiliencia' },
      { label: 'Sexualidade', value: 'sexualidade' },
      { label: 'Síndrome do Pânico', value: 'sindrome-panico' },
      { label: 'Terapia de Casal / Casamento', value: 'terapia-casal-casamento' },
      { label: 'Terceira Idade', value: 'terceira-idade' },
      { label: 'Timidez', value: 'timidez' },
      { label: 'Transtorno Bipolar', value: 'transtorno-bipolar' },
      { label: 'Transtorno de Déficit de Atenção', value: 'transtorno-deficit-atencao' },
      { label: 'Transtorno de Estresse Pós-Traumático', value: 'transtorno-estresse-pos-traumatico' },
      { label: 'Transtornos Alimentares', value: 'transtornos-alimentares' },
      { label: 'Traumas e Abusos', value: 'traumas-abusos' },
      { label: 'Violência Doméstica', value: 'violencia-domestica' }
    ]
  },
  {
    name: 'Categorias',
    ref: 'category',
    filters: [
      { label: 'Adultos', value: 'adultos' },
      { label: 'Crianças', value: 'crianças' },
      { label: 'Adolescentes', value: 'adolescentes' },
      { label: 'Casais', value: 'casais' },
      { label: 'Comunidade LGBTQIAPN+', value: 'comunidade-lgbtqiapn' },
      { label: 'Homem (cis e trans)', value: 'homem-cis-trans' },
      { label: 'Mulher (cis e trans)', value: 'mulher-cis-trans' },
      { label: 'Gênero Fluido', value: 'genero-fluido' },
      { label: 'Pessoa Não-Binária', value: 'pessoa-nao-binaria' }
    ]

  },
  {
    name: 'Etinia',
    ref: 'language',
    filters: [
      { label: 'Amarela', value: 'amarela' },
      { label: 'Branca', value: 'branca' },
      { label: 'Indígena', value: 'indigena' },
      { label: 'Parda', value: 'parda' },
      { label: 'Preta', value: 'preta' }
    ]
  },
  {
    name: 'Preço',
    ref: 'academicFormation',
    filters: [
      { label: 'R$ 60 - 99', value: 'preco-60-99' },
      { label: 'R$ 100 - 149', value: 'preco-100-149' },
      { label: 'R$ 150 - 199', value: 'preco-150-199' },
      { label: 'R$ 200 - 400', value: 'preco-200-400' }
    ]
  },
  {
    name: 'Formação Acadêmica',
    ref: 'price',
    filters: [
      { label: 'Doutorado', value: 'doutorado' },
      { label: 'Mestrado', value: 'mestrado' },
      { label: 'Especialização', value: 'especializacao' },
      { label: 'Pós-Graduação', value: 'pos-graduacao' },
      { label: 'Graduação', value: 'graduacao' },
      { label: 'Outros Cursos', value: 'outros-cursos' }
    ]
  },
  {
    name: 'Idiomas',
    ref: 'ethnicity',
    filters: [
      { label: 'Inglês', value: 'ingles' },
      { label: 'Francês', value: 'frances' },
      { label: 'Alemão', value: 'alemao' },
      { label: 'Italiano', value: 'italiano' },
      { label: 'Libras', value: 'libras' },
      { label: 'Português', value: 'portugues' },
      { label: 'Espanhol', value: 'espanhol' }
    ]
  }
])


const psychologists = [
  {
    name: 'Dra. Maria da Silva',
    crp: '123456',
    description:
      'Apaixonada por ajudar as pessoas a encontrarem equilíbrio emocional e desenvolvimento pessoal.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 150/h',
    rating: 5.0,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
  {
    name: 'Dr. João Santos',
    crp: '654321',
    description: 'Especialista em terapia para casais e psicanálise.',
    photo: 'https://via.placeholder.com/100',
    price: 'R$ 200/h',
    rating: 4.9,
  },
];

const selectedFilters = ref({
  specialty: [],
  motivation: [],
  category: [],
  language: [],
  academicFormation: [],
  price: [],
  ethnicity: [],
})

const isSelected = (ref, group) => {
  return selectedFilters.value[group]?.includes(ref);
};

const toggleFilter = (value, group) => {
  const groupFilters = selectedFilters.value[group] || [];
  console.log(groupFilters);
  const index = groupFilters.indexOf(value);
  if (index > -1) {
    selectedFilters.value[group].splice(index, 1);
  } else {
    selectedFilters.value[group].push(value);
  }
};
const applyFilters = () => {
  console.log('Aplicando filtros:', selectedFilters.value);
};

const clearAllFilters = () => {
  selectedFilters.value = { specialty: [], motivation: [] };
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
}

.navbar.shadow {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.scroller::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.scroller::-webkit-scrollbar-track {
  background: transparent;
}

.scroller::-webkit-scrollbar-thumb {
  background-color: #9CA3AF;
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: content-box;
}

.scroller::-webkit-scrollbar-thumb:hover {
  background-color: #6B7280;
}


.scroller {
  scrollbar-width: thin;
  scrollbar-color: #9CA3AF transparent;
}

.scroller {
  scroll-behavior: smooth;
}
</style>
