<template>
  <div id="app">
    <!-- <Portifolio msg="Welcome to Your Vue.js App"/> -->
    <div>
      <header>
        <div class="row" id="menu">
          <div class="col-md-12" id="titulo_icone_div">
            <b-icon class="icons-medium" id="menu_hamburguer" icon="list" @click="toggleMenu()"></b-icon>
            <a href="">FlashcardsVoice</a>
          </div>
        </div>
        <nav :class="['sidebar', { 'is-visible': is_nav_visible }]" id="nav_menu">
          <b-icon class="icons" id="close_nav" icon="x-lg" title="Fechar" @click="toggleMenu()"></b-icon>
          <br>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <label for="idioma">Language:</label>
              <select name="idioma" id="idioma">
                <option v-for="(value, key) in idiomas" :value="value" :key="key" :id="'idioma' + key" :selected="idioma_atual === value">&nbsp;{{ value }}</option>
              </select>
            </li>
            <li class="list-group-item" @click="scroolTo('flashcards_div'), toggleMenu()">Página Inicial</li>
            <li class="list-group-item" @click="scroolTo('phrasal_verbs_div'), toggleMenu()">Phrasal Verbs</li>
            <li class="list-group-item" @click="scroolTo('dictionary_div'), toggleMenu()">Dictionary</li>
          </ul>
        </nav>
      </header>
      <section class="menu row" id="flashcards_div">
        <article class="col-md-12">
          <Flashcards></Flashcards>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
import Flashcards from './components/Flashcards.vue'

var app = {
  name: 'App',
  data() {
    return {
      is_nav_visible: false,
      idioma_atual:'english',
      idiomas:['english', 'espanõl']
    };
  },
  components: {
    Flashcards,
  },
  methods:{
    toggleMenu() {
      this.is_nav_visible = !this.is_nav_visible;
    },
    scroolTo:function(id){

      const targetId = id;
      const targetElement = document.querySelector('#'+targetId);

      const offset = -50;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

export default app;
</script>