<template>
  <div class="row row_desc" :id="'topics'+cont">
    <a class="col-sm-3 col-md-3 col-lg-3 subcategory_desc" v-for="(topic, c) in dados.topicos" :style="(topic.reviewed)?'background:#34eb58':'background:#'+dados.color" :key="c" @click.prevent="navigateToFlashcards(c)">
      <div>
        <h5 @click="actual_topic = cont">{{ topic.name }}</h5>
        <h6 v-if="topic.reviewed"><p>(You are up to date!)</p></h6>
      </div>
    </a>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeCategory: 0,
      };
    },
    name: 'Topicos',
    props: {
      dados: {
        type: Object,
        required: true,
        default: function() {
          const storedData = localStorage.getItem('dados');
          return storedData ? JSON.parse(storedData) : {};
        }
      },
      chave: {
        type: Number,
        required: true
      },
      campo: {
        type: String,
        required: true
      },
      cont: {
        type: Number,
        required: true
      }
    },
    computed: {
    },
    mounted() {
      if(this.dados){
        localStorage.setItem('dados_topicos', JSON.stringify(this.dados));
        localStorage.setItem('dados_cont', JSON.stringify(this.cont));
        localStorage.setItem('dados_campo', JSON.stringify(this.campo));
        localStorage.setItem('dados_chave', JSON.stringify(this.chave));
      }else{
        this.dados = localStorage.getItem('dados_topicos');
        this.cont = localStorage.getItem('dados_cont');
        this.campo = localStorage.getItem('dados_campo');
        this.chave = localStorage.getItem('dados_chave');
      }
    },
    methods: {
      navigateToFlashcards(c) {
        this.$store.commit('setCards', this.dados);
        this.$router.push({ 
          name: 'Flashcards',
          params: { dados: this.dados["topicos"][c], chave:this.chave, campo:this.campo, cont:this.cont, c:c }
        });
      },
      toggleTopic(index) {
        this.activeCategory = this.activeCategory === index ? null : index;
      },
      isActive(index) {
        return this.activeCategory === index;
      },
    }
  };
</script>