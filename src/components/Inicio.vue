<template>
  <div id="app">
    <div>
      <header>
        <div class="row" id="menu">
          <div class="col-md-12" id="titulo_icone_div">
            <b-icon class="icons-medium" id="menu_hamburguer" icon="list" @click="toggleMenu()"></b-icon>
            <a href="">VoiceCards</a>
          </div>
        </div>
        <nav :class="['sidebar', { 'is-visible': is_nav_visible }]" id="nav_menu">
          <b-icon class="icons" id="close_nav" icon="x-lg" title="Fechar" @click="toggleMenu()"></b-icon>
          <br>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <label for="idioma">Language:</label>
              <select name="idioma" id="idioma">
                <option v-for="(value, key) in idiomas" :value="value" :key="key" :id="'idioma'+key" :selected="idioma_atual === value">&nbsp;{{ value }}</option>
              </select>
            </li>
            <li class="list-group-item" @click="scroolTo('flashcards_div'), toggleMenu()">Home</li>
            <li class="list-group-item" @click="scroolTo('phrasal_verbs_div'), toggleMenu()">Phrasal Verbs</li>
            <li class="list-group-item" @click="scroolTo('dictionary_div'), toggleMenu()">Dictionary</li>
          </ul>
        </nav>
      </header>
      <section v-if="!dados" class="loading">
        <b-icon icon="arrow-repeat" font-scale="3" class="spinner"/>
        <h3>Loading...</h3>
      </section>
      <section v-else class="menu row" id="flashcards_div">
        <article class="col-md-12">
          <div>
            <div v-for="(categories, key) in dados" :key="key">
              <div v-for="(languages, k) in categories.languages" :key="k">
                <div class="language_desc">{{ k }}</div>
                <div class="container">
                  <div class="row">
                    <div class="col-sm-12 col-md-3 topic_desc" v-for="(categories, cont) in languages" :key="cont" @click.prevent="navigateToTopics(key, k, cont)"><!--topic_desc-->
                      <div v-if="categories.img" :id="'image'+cont" class="img_div" :ref="'image'+cont" v-html="imageHtml" :aaa="base64ToImage(categories.img)">
    
                      </div>
                      <div v-else :id="'image'+cont" class="img_div">
                        <label :style="'background:#'+categories.color">{{ categories.categoria }}</label>
                      </div>
                      <div class="title_card">
                        <span :style="'background:#'+categories.color">#{{cont+1}}</span>
                        <label>{{ categories.categoria }}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <!-- <input type="file" @change="onFileChange"> -->
      </section>
    </div>
  </div>
</template>
<script>
import { database, ref, get, child } from "../../src/firebase";

// getPosts()

var app = {
  name: 'App',
  data() {
    return {
      is_nav_visible: false,
      idioma_atual:'english',
      idiomas:['english', 'espanhol'],
      actual_topic: 0,
      dados: null,
      activeCategory: 0,
      img_input: "",
      text_file: "",
      selected_file: null,
      imageHtml: null,
    };
  },
  mounted(){
    this.getPosts()
  },
  watch:{

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
    },
    getPosts:async function() {
      const dbRef = ref(database);
      var posts = ""
      var self = this
      
      try {
        const snapshot = await get(child(dbRef, 'logins'));
        
        if (snapshot.exists()) {
          posts = snapshot.val();
          self.dados = posts
        } else {
          console.log("Nenhum dado disponível");
        }
      } catch (error) {
        console.error("Erro ao obter dados: ", error);
      }
    },
    navigateToTopics(key, k, cont) {
      this.$store.commit('setCards', this.dados);
      this.$router.push({
        name: 'Topicos',
        params: { dados: this.dados[key]["languages"][k][cont], chave:key, campo:k, cont:cont }
      });
    },
    toggleTopic(index) {
      this.activeCategory = this.activeCategory === index ? null : index;
    },
    isActive(index) {
      return this.activeCategory === index;
    },
    imageToBase64(imgFile, callback) {
      const reader = new FileReader();
      
      reader.onloadend = function() {
        const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
        callback(base64String);
      };
      
      reader.readAsDataURL(imgFile);
    },
    base64ToImage(base64){
      // var image = new Image();
      // image.src = 'data:image/png;base64,' + base64;

      const imageHtml = `<img src="data:image/png;base64,${base64}" alt="Image">`;
      this.imageHtml = imageHtml;
      // document.getElementById(id).append(image);
    },
    onFileChange(event) {
      this.selected_file = event.target.files[0];
      this.uploadImage()
    },
    uploadImage() {
      const file = this.selected_file;

      this.imageToBase64(file, function(base64String) {
        console.log(base64String);
      });
    },
  }
}

export default app;
</script>