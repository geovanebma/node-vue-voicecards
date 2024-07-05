<template>
  <div>
    <div v-if="chave_desc == '1'">
      <div>
        <h3>Blend/Laravel</h3>
        <p>Como programador fullStack, foi essencial para mim ter aprendido Laravel, pois já havia conhecimento de PHP e precisava aprender um framework relacionado a ele.</p>
        <p>Algumas skills com Laravel, incluem: criação de middlewares, API's (Rest e consumo), Rotas, Migrations, Formulários, CRUD, CRUD com Vue.</p>
        <p class="strong">Alguns programas a seguir:</p>
        <br>
        <ul class="list-unstyled">
          <li>
            <label class="strong">API rest de produtos:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/laravel-api-produtos</a>
          </li>
          <li>
            <label class="strong">Tela de dicionário de inglês:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/laravel-crud-dictionary</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="chave_desc == '2'">
      <div>
        <h3>CSS</h3>
        <p>É indispensável para a estilização do front a utilização do CSS, por isso, tenho aprendido para criar os melhores layouts com UI. Também tenho conhecimento em Bootstrap 3 ao 5 para estilização rápida e prática.</p>
        <p class="strong">Alguns programas a seguir:</p>
        <br>
        <ul class="list-unstyled">
          <li>
            <label class="strong">Portifólio:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/node-vue-portifolio</a>
          </li>
          <li>
            <label class="strong">Tela de dicionário de inglês:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/laravel-crud-dictionary</a>
          </li>
          <li>
            <label class="strong">Leitor de textos:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/Leitor-Textos</a>
          </li>
          <li>
            <label class="strong">Login Vivo - Intergrall:</label>
            <br>
            <a href="" target="_blank">https://www2.uranet.com.br//login/vivo/index.php</a>
          </li>
          <li>
            <label class="strong">Contato Boa Vista - Live Chat:</label>
            <br>
            <a href="" target="_blank">https://livechat.intergrall.com.br/im/livechat/view/LiveChatModelV2.php?token=MKUOK2mTwwxb44awwAvwmkgwwwxb44awwYi32a5rNw=</a>
          </li>
          <li>
            <label class="strong">Vivo Fidelização:</label>
            <br>
            <a href="" target="_blank">https://www.intergrall.com.br/lp/vivo_fidelizacao/vivo_fidelizacao.php?mku=MKU5jWsdaIuX4nbRbAoE3lVEdolxCoep4zTZ7O79d5qEZDq0U5GTocAdujr7jGea1iIDbx8HDCto4IWwwxb44awwAnNbYsfuEksNQjznfmcLqAL8UsmTt7hmfX7aTILCdRcv7A10bMd41eyNcSvmRnLbP8Ul7wwxb44awwm3RD7C1nmokE1uh09ojULTDRJWtAV9hRbp0zutuXdDNG5Yg==</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="chave_desc == '3'">
      <div>
        <h3>Database</h3>
        <p>Já para a base de dados, tenho o conhecimento nos seguntes programas: MySQL, SQL Server, SQLite e Firebase. Com conhecimentos avançados aprendidos na faculdade.</p>
        <p class="strong">Alguns programas a seguir:</p>
        <br>
        <ul class="list-unstyled">
          <li>
            <label class="strong">TCC App de logística - Firebase:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/java-android-tcc-camfexpress</a>
          </li>
          <li>
            <label class="strong">Dicionário de inglês - SQLite:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/laravel-crud-dictionary</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="chave_desc == '4'">
      <div>
        <h3>Figma</h3>
        <p>Para encontrar a melhor solução de UI/UX design, utilizo o Figma para detalhamanto de um site:</p>
        <p class="strong">Alguns programas a seguir:</p>
        <br>
        <ul class="list-unstyled">
          <li>
            <label class="strong">Novo Layout Intergrall:</label>
            <br>
            <a href="" target="_blank">https://www.figma.com/file/Cff4350Rq1WqnrdESE0HRU/SponsorB%2FKonecta%2FBMG?node-id=1%3A2</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="chave_desc == '5'">
      <div>
        <h3>Armazenamento em Nuvem</h3>
        <p>Para armazenamento em núvem, tenho experiência com firebase e PHP My Admin:</p>
        <p class="strong">Alguns programas a seguir:</p>
        <br>
        <ul class="list-unstyled">
          <li>
            <label class="strong">TCC App de logística - Firebase:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/java-android-tcc-camfexpress</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="chave_desc == '6'">
      <div>
        <h3>Git e GitHub</h3>
        <p>Na área de DevOps, utilizo Git para versão e controle de sistemas, com comandos avançados para uso no dia a dia. Também utilizo o GitHub para armazenamento de programas de uso.</p>
        <p class="strong">Alguns programas a seguir:</p>
        <br>
        <ul class="list-unstyled">
          <li>
            <label class="strong">GitHub:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="chave_desc == '7'">
      <div>
        <h3>HTML</h3>
        <p>A estrutura de um site é fundamental aprender, pois ela é a base que sustenta um website.</p>
        <p class="strong">Alguns programas a seguir:</p>
        <br>
        <ul class="list-unstyled">
          <li>
            <label class="strong">Portifólio:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/node-vue-portifolio</a>
          </li>
          <li>
            <label class="strong">Tela de dicionário de inglês:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/laravel-crud-dictionary</a>
          </li>
          <li>
            <label class="strong">Leitor de textos:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/Leitor-Textos</a>
          </li>
          <li>
            <label class="strong">Login Vivo - Intergrall:</label>
            <br>
            <a href="" target="_blank">https://www2.uranet.com.br//login/vivo/index.php</a>
          </li>
          <li>
            <label class="strong">Contato Boa Vista - Live Chat:</label>
            <br>
            <a href="" target="_blank">https://livechat.intergrall.com.br/im/livechat/view/LiveChatModelV2.php?token=MKUOK2mTwwxb44awwAvwmkgwwwxb44awwYi32a5rNw=</a>
          </li>
          <li>
            <label class="strong">Vivo Fidelização:</label>
            <br>
            <a href="" target="_blank">https://www.intergrall.com.br/lp/vivo_fidelizacao/vivo_fidelizacao.php?mku=MKU5jWsdaIuX4nbRbAoE3lVEdolxCoep4zTZ7O79d5qEZDq0U5GTocAdujr7jGea1iIDbx8HDCto4IWwwxb44awwAnNbYsfuEksNQjznfmcLqAL8UsmTt7hmfX7aTILCdRcv7A10bMd41eyNcSvmRnLbP8Ul7wwxb44awwm3RD7C1nmokE1uh09ojULTDRJWtAV9hRbp0zutuXdDNG5Yg==</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="chave_desc == '8'">
      <div>
        <h3>JavaScript</h3>
        <p>Para ajudar no frontend com as informações dos campos, utilizo o JavaScript, com conhecimento avançado em objetos, AJAX, Promisses e muito mais.</p>
        <p class="strong">Alguns programas a seguir:</p>
        <br>
        <ul class="list-unstyled">
          <li>
            <label class="strong">Langvoice - Programa de áudios e anotações:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/langvoice</a>
          </li>
          <li>
            <label class="strong">Tela de dicionário de inglês:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/laravel-crud-dictionary</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="chave_desc == '9'">
      <div>
        <h3>NodeJs</h3>
        <p>Para avançar no backend, também aprendi NodeJs que está muito em alta no merecado para utilizar com programas relacionados ao JavaScript:</p>
        <p class="strong">Alguns programas a seguir:</p>
        <br>
        <ul class="list-unstyled">
          <li>
            <label class="strong">Portifólio:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/node-vue-portifolio</a>
          </li>
          <li>
            <label class="strong">API Rest:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/node-api-rest</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="chave_desc == '10'">
      <div>
        <h3>PHP</h3>
        <p>Principal ferramenta de backend que utilizo, com conhecimento profundo em aplicações web, uso frequente com MySQL, padrão MVC ou Pipeline, API e POO.</p>
        <p class="strong">Alguns programas a seguir:</p>
        <br>
        <ul class="list-unstyled">
          <li>
            <label class="strong">API rest de produtos:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/laravel-api-produtos</a>
          </li>
          <li>
            <label class="strong">Langvoice - Página de anotações e áudios em inglês/espanhol:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/langvoice</a>
          </li>
          <li>
            <label class="strong">Login Vivo - Intergrall:</label>
            <br>
            <a href="" target="_blank">https://www2.uranet.com.br//login/vivo/index.php</a>
          </li>
          <li>
            <label class="strong">Contato Boa Vista - Live Chat:</label>
            <br>
            <a href="" target="_blank">https://livechat.intergrall.com.br/im/livechat/view/LiveChatModelV2.php?token=MKUOK2mTwwxb44awwAvwmkgwwwxb44awwYi32a5rNw=</a>
          </li>
          <li>
            <label class="strong">Vivo Fidelização:</label>
            <br>
            <a href="" target="_blank">https://www.intergrall.com.br/lp/vivo_fidelizacao/vivo_fidelizacao.php?mku=MKU5jWsdaIuX4nbRbAoE3lVEdolxCoep4zTZ7O79d5qEZDq0U5GTocAdujr7jGea1iIDbx8HDCto4IWwwxb44awwAnNbYsfuEksNQjznfmcLqAL8UsmTt7hmfX7aTILCdRcv7A10bMd41eyNcSvmRnLbP8Ul7wwxb44awwm3RD7C1nmokE1uh09ojULTDRJWtAV9hRbp0zutuXdDNG5Yg==</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="chave_desc == '11'">
      <div>
        <h3>React</h3>
        <p>Também acho importante a utilização dessa biblioteca, o que pode nos proporcionar mais variedade de conhecimento. Tendo conhecimento apenas para web.</p>
        <p class="strong">Alguns programas a seguir:</p>
        <br>
        <ul class="list-unstyled">
          <li>
            <label class="strong">Sem programa(s) para mostrar até o momento.</label>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="chave_desc == '12'">
      <div>
        <h3>VueJs</h3>
        <p>Utilizo como principal biblioteca para projetos e sistemas, visando principalmente o código limpo, o que facilita bastante:</p>
        <p class="strong">Alguns programas a seguir:</p>
        <br>
        <ul class="list-unstyled">
          <li>
            <label class="strong">Portifólio:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/node-vue-portifolio</a>
          </li>
          <li>
            <label class="strong">Portifólio:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/node-vue-portifolio</a>
          </li>
          <li>
            <label class="strong">Dicionário de inglês:</label>
            <br>
            <a href="" target="_blank">https://github.com/geovanebma/laravel-crud-dictionary</a>
          </li>
          <li>
            <label class="strong">Vivo Fidelização:</label>
            <br>
            <a href="" target="_blank">https://www.intergrall.com.br/lp/vivo_fidelizacao/vivo_fidelizacao.php?mku=MKU5jWsdaIuX4nbRbAoE3lVEdolxCoep4zTZ7O79d5qEZDq0U5GTocAdujr7jGea1iIDbx8HDCto4IWwwxb44awwAnNbYsfuEksNQjznfmcLqAL8UsmTt7hmfX7aTILCdRcv7A10bMd41eyNcSvmRnLbP8Ul7wwxb44awwm3RD7C1nmokE1uh09ojULTDRJWtAV9hRbp0zutuXdDNG5Yg==</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DescSkill',
  props: {
    chave_desc: {
      type: String,
      required: true
    }
  },
  created() {
    
  },
  methods: {
    
  }
}
</script>
