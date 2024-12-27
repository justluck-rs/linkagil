<template>
  <section class="min-h-screen flex flex-col transaction">
    <main v-if="$route.path == '/'" class="px-2 sm:container mx-auto md:px-10 mt-20" :class="{ 'mt-24': !isScrolled }">
      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <FilterSidebar :filters="filters" :categories="categories" @apply-filters="applyFilters"
          @clear-filters="clearAllFilters" />
        <ProfessionalList :professionals="professionals" />
      </div>
    </main>
    <main  v-if="$route.path == '/perfil'" class="px-2 sm:container mx-auto md:px-10 mt-20" :class="{ 'mt-24': !isScrolled }">
      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <Profile :professionals="professionals" />
      </div>
    </main>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import FilterSidebar from '@/components/shared/filters/Main.vue'
import ProfessionalList from '@/views/modules/professionals/components/list/Main.vue'
import Profile from '@/views/modules/professionals/components/profile/Main.vue'

const isScrolled = ref(true);
function handleScroll(){
  if (window.scrollY > 50) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

const categories = [
  {
    id: 1,
    name: "Psicologia Clínica",
    icon: "lucide:heart"
  },
  {
    id: 2,
    name: "Psicologia Infantil",
    icon: "lucide:baby"
  },
  {
    id: 3,
    name: "Psicologia Organizacional",
    icon: "lucide:briefcase"
  },
  {
    id: 4,
    name: "Psicologia Escolar",
    icon: "lucide:book-open"
  },
  {
    id: 5,
    name: "Psicoterapia",
    icon: "lucide:message-circle"
  },
  {
    id: 6,
    name: "Psicologia Social",
    icon: "lucide:users"
  },
  {
    id: 7,
    name: "Neuropsicologia",
    icon: "lucide:brain"
  },
  {
    id: 8,
    name: "Psicologia do Esporte",
    icon: "lucide:dumbbell"
  },
  {
    id: 9,
    name: "Psicologia Jurídica",
    icon: "lucide:scale"
  },
  {
    id: 10,
    name: "Psicologia Hospitalar",
    icon: "lucide:stethoscope"
  }
];


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


const professionals = [
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

function isSelected(ref, group){
  return selectedFilters.value[group]?.includes(ref);
};

function toggleFilter(value, group){
  const groupFilters = selectedFilters.value[group] || [];
  console.log(groupFilters);
  const index = groupFilters.indexOf(value);
  if (index > -1) {
    selectedFilters.value[group].splice(index, 1);
  } else {
    selectedFilters.value[group].push(value);
  }
};
function applyFilters(){
  console.log('Aplicando filtros:', selectedFilters.value);
};

function clearAllFilters(){
  selectedFilters.value = { specialty: [], motivation: [] };
};


onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

