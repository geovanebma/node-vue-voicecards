<!-- <template>
  <div v-for="(value, key) in dados">
    <div v-if="idioma.toLowerCase() == key.toLowerCase()" v-for="(v, k) in value" :key="key">
      <div :k="k"></div>
    </div>
  </div>
</template> -->
<template>
  <div>
    <div v-for="(categories, language) in dados" :key="language">
      <h2 class="language_desc">{{ language }}</h2>
      <div v-for="(topics, category) in categories" :key="category">
        <h1 class="category_desc" onclick="">{{ category }}</h1>
        <div class="topic_desc" v-for="(contents, topic, cont) in topics" :key="topic">
          <h4 class="category_desc">{{ topic }}</h4>
          <div class="flashcards-container">
            <div v-for="(content, index) in dados[language][category][topic]" :key="index" class="flashcard" :class="(actual_index == index && actual_cont == cont)?'show_card':'hide_card'" :id="'card'+cont+''+index" @click="flipCard(index)">
              <div :class="['card', { flipped: flippedCards.includes(index) }]">
                <div class="front">
                  <p>{{ content.text }}</p>
                  <b-icon class="play_icon" icon="play-circle-fill" title="Play" @click.stop="falar(content.text)"></b-icon>
                </div>
                <div class="back">
                  <p class="lowlight">{{ content.text }}</p>
                  <p class="highlight">{{ content.traduction }}</p>
                  <div class="buttons">
                    <button class="btn_card" @click.stop="handleButtonClick('easy', index, cont, dados[language][category][topic].length)">Easy</button>
                    <button class="btn_card" @click.stop="handleButtonClick('good', index, cont, dados[language][category][topic].length)">Good</button>
                    <button class="btn_card" @click.stop="handleButtonClick('difficult', index, cont, dados[language][category][topic].length)">Difficult</button>
                    <button class="btn_card" @click.stop="handleButtonClick('dontRemember', index, cont, dados[language][category][topic].length)">I don't remember</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dados: {
        "English": {
          "Get an international job": {
            "How to write a good resume?": [
              {
                "text": "Your resume must clearly, concisely and strategically present your qualifications to get a recruiter interested in meeting you.",
                "traduction": "Seu currículo deve apresentar suas qualificações de forma clara, concisa e estratégica para que um recrutador se interesse em conhecê-lo."
              },
              {
                "text": "It should convey your skills, work experience and assets.",
                "traduction": "Deve transmitir suas habilidades, experiência profissional e ativos."
              },
              {
                "text": "The resume is used to describe what you can accomplish professionally in a manner that also illustrates what you can do for an employer.",
                "traduction": "O currículo é usado para descrever o que você pode realizar profissionalmente, de uma maneira que também ilustra o que você pode fazer por um empregador."
              },
              {
                "text": "Job opportunities can arise unexpectedly.",
                "traduction": "As oportunidades de emprego podem surgir inesperadamente."
              },
              {
                "text": "An updated modern resume is the key to a successful job search.",
                "traduction": "Um currículo moderno e atualizado é a chave para uma busca de emprego bem-sucedida."
              }
            ],
            "What is a cover letter?": [
              {
                "text": "A letter of application also known as a cover letter is a document sent with your resume to provide additional information about your skills and experience to an employer.",
                "traduction": "Uma carta de candidatura, também conhecida como carta de apresentação, é um documento enviado com seu currículo para fornecer informações adicionais sobre suas habilidades e experiência a um empregador."
              },
              {
                "text": "The letter of application is intended to provide detailed information on why you are a qualified candidate for the job.",
                "traduction": "A carta de candidatura tem como objetivo fornecer informações detalhadas sobre por que você é um candidato qualificado para o cargo."
              },
              {
                "text": "Effective application letters explain the reasons for your interest in the specific organization and identify your most relevant skills.",
                "traduction": "Cartas de candidatura eficazes explicam os motivos do seu interesse na organização específica e identificam suas habilidades mais relevantes."
              },
              {
                "text": "Your cover letter should let the employer know what position you are applying for what makes you a strong candidate.",
                "traduction": "Sua carta de apresentação deve informar ao empregador para qual posição você está se candidatando, o que o torna um candidato forte."
              },
              {
                "text": "Why they should select you for an interview and how you will follow up?",
                "traduction": "Por que eles deveriam selecioná-lo para uma entrevista e como você fará o acompanhamento?"
              }
            ],
            "What is a portfolio?": [
              {
                "text": "A portfolio is a tangible evidence that proves you can work with programming languages.",
                "traduction": "Um portfólio é uma evidência tangível que prova que você pode trabalhar com linguagens de programação."
              },
              {
                "text": "Helps employers to know what skills you really have and to know you better.",
                "traduction": "Ajuda os empregadores a saber quais habilidades você realmente possui e a conhecê-lo melhor."
              },
              {
                "text": "Shows your personality your interests and who you actually are.",
                "traduction": "Mostrando sua personalidade, seus interesses e quem você realmente é."
              },
              {
                "text": "Shows that you can complete tasks.",
                "traduction": "Mostra que você pode concluir tarefas."
              },
              {
                "text": "You can start a project and finish it.",
                "traduction": "você pode iniciar um projeto e terminá-lo."
              }
            ]
          }
        }
      },
      flippedCards: [],
      actual_index:0,
      actual_cont:0,
      utterance:new SpeechSynthesisUtterance(),
      voices:null
    };
  },
  name: 'Flashcards',
  props: {
    
  },
  mounted:function(){
    this.voices = window.speechSynthesis.getVoices()
  },
  methods:{
    flipCard(index) {
      if (this.flippedCards.includes(index)) {
        this.flippedCards = this.flippedCards.filter(i => i !== index);
      } else {
        this.flippedCards.push(index);
      }
    },
    handleButtonClick(action, index, cont, max) {
      if(index+1 != max){
        this.actual_index = index+1
      }
    },
    setTextmessage(text, name){
      this.utterance.text = text
      
      if(name){
        this.setVoice(name)
      }
    },
    setVoice(){
      this.utterance.voice = "Google US English";
    },
    speakText(){
      this.utterance.voice = this.voices[3];
      window.speechSynthesis.speak(this.utterance);
    },
    pauseText(){
      speechSynthesis.pause(this.utterance)
    },
    cancelText(){
      speechSynthesis.cancel(this.utterance)
    },
    falar(text){
      this.setTextmessage(text)
      this.speakText()
    }
  }
}

</script>