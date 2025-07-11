document.addEventListener('DOMContentLoaded', function() {
     const showsbuttons =  document.querySelectorAll('[data-tab-button]');
  
    
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
})

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