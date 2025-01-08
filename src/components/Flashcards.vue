<template>
  <div>
    <a href="/" class="vh_button">
      <input type="button" class="btn btn-warning" value="Voltar para a página inicial">
    </a>
    <h1 class="category_desc2 vh_title" onclick="">{{ dados.name }}</h1>
    <div v-if="dados" class=" vh_body_div">
      <div v-for="(content, index) in dados.list" :key="index" class="flashcard" :class="(actual_index == index)?'show_card':'hide_card'" :id="'card'+dados.code+''+index" @click="flipCard(index)">
        <label for="">{{ index+" of "+(dados.list.length-1) }}</label>
        <div :class="['card', { flipped: flippedCards.includes(index) }]">
          <div class="front">
            <p>{{ content.text }}</p>
            <b-icon class="play_icon" :id="'play_button'+index" ref="play_button" :class="playIconClass" :icon="playIcon" :title="playTitle" @click.stop="toggleSpeech(content.text)"></b-icon>
          </div>
          <div class="back">
            <p class="lowlight">{{ content.text }}</p>
            <p class="highlight">{{ content.traduction }}</p>
            <div class="buttons">
              <button class="btn_card" @click.stop="handleButtonClick('easy', index, dados.list.length, content.status.easy)">Easy</button>
              <button class="btn_card" @click.stop="handleButtonClick('medium', index, dados.list.length, content.status.medium)">Good</button>
              <button class="btn_card" @click.stop="handleButtonClick('hard', index, dados.list.length, content.status.hard)">Difficult</button>
              <button class="btn_card" @click.stop="handleButtonClick('dontRemember', index, dados.list.length, '')">I don't remember</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showPopup" class="popup-alert">
      <div class="popup-content">
        <h3>Parabéns!</h3>
        <p>Todos os flashcards foram terminados com sucesso!</p>
        <p>({{count_easy}}) Fáceis</p>
        <p>({{count_medium}}) Médios</p>
        <p>({{count_hard}}) Difíceis</p>
        <button @click="closePopup">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { database, ref, update } from "../../src/firebase";

export default {
  data() {
    return {
      flippedCards: [],
      all_five: [],
      actual_index: 0,
      count_easy: 0,
      count_medium: 0,
      count_hard: 0,
      reviewed: false,
      utterance: null,
      default_voice: null,
      isPlaying: false,
      voicesLoaded: false,
      showPopup: false
    };
  },
  name: 'Flashcards',
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
    },
    c: {
      type: Number,
      required: true
    }
  },
  computed: {
    playIcon() {
      return this.isPlaying ? 'pause-circle-fill' : 'play-circle-fill';
    },
    playTitle() {
      return this.isPlaying ? 'Pause' : 'Play';
    },
    playIconClass() {
      return this.isPlaying ? 'pause_icon' : 'play_icon';
    }
  },
  mounted() {
    if(this.dados){
      localStorage.setItem('dados', JSON.stringify(this.dados));
    }

    this.loadVoices();
    if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
      window.speechSynthesis.onvoiceschanged = this.loadVoices;
    }
  },
  methods: {
    toggleSpeech(text) {
      if (this.isPlaying) {
        this.pauseSpeech();
      } else {
        this.speakText(text);
      }
    },
    speakText(text) {
      if (!this.utterance) {
        this.utterance = new SpeechSynthesisUtterance('Toodle pip');
        this.utterance.lang='en-US';

        this.utterance.onend = () => {
          this.isPlaying = false;
        };
      }

      this.utterance.text = text;
      this.default_voice = this.voices.find(voice => voice.lang.startsWith('en-US')); // Prefer US English

      if (this.voicesLoaded) {
        this.utterance.voice = this.default_voice;
        if (!this.utterance.voice) {
          console.warn("Voice not found, using default voice");
        }
      } else {
        console.warn("Voices not loaded yet");
      }

      this.isPlaying = true;
      window.speechSynthesis.speak(this.utterance);
    },
    pauseSpeech() {
      window.speechSynthesis.pause();
      this.isPlaying = false;
    },
    resumeSpeech() {
      window.speechSynthesis.resume();
      this.isPlaying = true;
    },
    stopSpeech() {
      window.speechSynthesis.cancel();
      this.isPlaying = false;
    },
    loadVoices() {
      this.voices = window.speechSynthesis.getVoices();
      this.voicesLoaded = true;
    },
    flipCard(index) {
      if (this.flippedCards.includes(index)) {
        this.flippedCards = this.flippedCards.filter(i => i !== index);
      } else {
        this.flippedCards.push(index);
      }
    },
    handleButtonClick(action, index, max, value) {
      value = value+1;

      if (index + 1 != max) {
        this.all_five.push(value)
        this.actual_index = index + 1;

        if(action == "easy"){
          this.count_easy = this.count_easy+1;
        }

        if(action == "medium"){
          this.count_medium = this.count_medium+1;
        }

        if(action == "hard"){
          this.count_hard = this.count_hard+1;
        }

        console.log(this.$refs)
        
        this.$nextTick(() => {
          const buttonRef = this.$refs[`play_button`][index+1];

          if (buttonRef && buttonRef.$el) {
            buttonRef.$el.click();
          } else {
            console.error(`Botão com ref "play_button${index+1}" não encontrado.`);
          }
        });
        // setTimeout(() => {
        //   if (buttonRef) {
        //     buttonRef.$el.click(); // Dispara o clique programaticamente
        //   } else {
        //     console.error(`Botão com ref "play_button${index+1}" não encontrado.`);
        //   }
        // }, 1000);
        
        // console.dir(document.getElementById("play_button" + (index+1)).click())
      }else{
        for (let index = 0; index < this.all_five.length; index++) {
          const element = this.all_five[index];
          
          if(element != 5){
            break;
          }else{
            if(index == this.all_five.length-1){
              this.reviewed = true
            }
          }
        }

        this.showCompletionPopup()
      }

      this.saveToFirebase(action, value)
    },
    saveToFirebase: async function(action, value) {
      const today = new Date();

      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
      const day = String(today.getDate()).padStart(2, '0');

      const formattedDate = `${year}-${month}-${day}`;


      const updates = {}; // Create an object to store the updates
      updates[`logins/0/languages/${this.campo}/${this.cont}/topicos/${this.chave}/list/${this.c}/status/${action}`] = value;
      updates[`logins/0/languages/${this.campo}/${this.cont}/topicos/${this.chave}/list/${this.c}/status/last_reviewed`] = formattedDate;
      updates[`logins/0/languages/${this.campo}/${this.cont}/topicos/${this.chave}/reviewed`] = this.reviewed;
      
      // Update the data in the database
      await update(ref(database), updates);
    },
    showCompletionPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
      this.$router.push('/');
    },
  }
};
</script>