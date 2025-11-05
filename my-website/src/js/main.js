document.addEventListener('DOMContentLoaded', function(){
  // toggle mobile nav
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('nav-toggle');
  toggle && toggle.addEventListener('click', ()=>{
    if(getComputedStyle(nav).display === 'none' || nav.style.display === '' ){
      nav.style.display = 'flex';
    } else {
      nav.style.display = 'none';
    }
  });

  // contact form simple handler
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if(!name || !email || !message){
        status.textContent = 'Por favor completa todos los campos.';
        return;
      }

      // Simular envío (aquí podrías hacer fetch a una API)
      status.textContent = 'Enviando…';
      setTimeout(()=>{
        form.reset();
        status.textContent = 'Gracias — tu mensaje ha sido recibido (simulado).';
      }, 800);
    });
  }

  // poner año actual
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

    // buy buttons (simulado)
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const product = btn.dataset.product || 'producto';
        // mostrar mensaje temporal en form-status si existe, o alert como fallback
        if(status){
          status.textContent = `Has seleccionado ${product}. Proceso de compra simulado.`;
          setTimeout(()=>{ status.textContent = ''; }, 2500);
        } else {
          alert(`Has seleccionado ${product}. Proceso de compra simulado.`);
        }
      });
    });
});
