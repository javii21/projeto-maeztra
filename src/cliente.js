const urlimg = "";
const root = document.querySelector('#rootElement');

root && root.insertAdjacentHTML('afterbegin', `
<div 
  class="WrapperNewsletter">
  
  <div 
    class="box">
  
    <a 
    class="buttonModalClose"  
    href="#"
    >
    Fechar
  </a>  
  
  <img 
    class="img" src="./src/images/image04.jpg" 
    alt="imgan da newsletter"
  />

  <form 
    class="form"> 
    
      <img 
        class="form__img" 
        src="./src/assets/newsletter-mail-icon.svg"
        alt="icone da newsletter email" 
      />
    
      <p 
        class="form__paragraph"
        >
        bem vindo a maeztra
      </p>
    
      <h2 
        class="form__titleDiscounts">
        Receba em Primeira mão
        
        <strong>
          desconto e ofertas exclusivas
        </strong>
      </h2>

      <input 
        class="form__inputEmail" 
        type="email" name="email" 
        placeholder="Digite seu e-mail"
      />

      <button 
        class="form__button">
      
        enviar
        
        <img 
        src="/src/assets/normal-icon-left.svg" 
        alt="icono de enviar"
        />

      </button>

    </form>
  </div>

</div>
`);




const openClose = () => {
  const elementMenu = document.querySelector(".menuNavigation");

  if (elementMenu) {
    elementMenu.classList.toggle('close');
  }
}







