document.addEventListener('DOMContentLoaded', function() {
     const showsbuttons =  document.querySelectorAll('[data-tab-button]');
     const questions = document.querySelectorAll('[data-faq-question]');


     const heroSection = document.querySelector('.hero');
     const alturaHero = heroSection.clientHeight;


     window.addEventListener('scroll', function() {
        const posicaoAtual =  window.scrollY;

        if(posicaoAtual < alturaHero) {
           ocultaElementoDoHeader();
        }else {
            exibeElementoDoHeader();
        }
     })
  
    // Seção de atraçôes, programação das abas 
    for(let i = 0; i < showsbuttons.length; i++){
        showsbuttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
             escondeTodasAbas();
             aba.classList.add('shows__list--is-active');
              removeBotaoAtivo();
             botao.target.classList.add('show__tabs__button--is-active');
        })
    }

    // Seção FAQ, accordion 
    for(let i = 0; i <  questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function ocultaElementoDoHeader() {
    const header  = document.querySelector('header');
    header.classList.add('header--is-hidden')
}

function exibeElementoDoHeader() {
    const header  = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}

function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
     const showsbuttons =  document.querySelectorAll('[data-tab-button]');

      for(let i = 0; i < showsbuttons.length; i++){
            showsbuttons[i].classList.remove('show__tabs__button--is-active');
      } 
}

function escondeTodasAbas() {
      const tabsContainer = document.querySelectorAll('[data-tab-id]');

       for(let i = 0; i < tabsContainer.length; i++){
         tabsContainer[i].classList.remove('shows__list--is-active') 
    }
}