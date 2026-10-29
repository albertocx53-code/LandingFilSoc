(() => {
  const dialog = document.querySelector('#offer-dialog');
  const content = document.querySelector('#dialog-content');
  let returnFocus = null;
  const bonusNames = ['Slides de aula','Mapas mentais','Mais de mil atividades','Plano de aula anual','Aula de emergência','Dinâmicas e debates','Provas e simulados'];
  function openDialog(html) {
    if (!dialog.open) returnFocus = document.activeElement;
    content.innerHTML = html;
    if (!dialog.open) dialog.showModal();
  }
  function checkout(plan) {
    const config = window.FILSOC_CONFIG || {};
    const value = plan === 'basico' ? config.compraBasico : config.compraCompleto;
    if (value) {
      try {
        const url = new URL(value);
        if (url.protocol === 'https:') { window.location.assign(url.href); return; }
      } catch (_) {}
    }
    openDialog(`<span class="eyebrow red">PLANO ${plan === 'basico' ? 'BÁSICO' : 'COMPLETO'}</span><h2 id="offer-title">O link de compra está<br>em configuração.</h2><p>O responsável pelo Fil&Soc ainda vai disponibilizar o endereço para contratar este plano. Nenhum pedido ou pagamento foi iniciado.</p><div class="dialog-status">Você já pode conhecer a apresentação do catálogo enquanto isso.</div><a class="cta" href="https://filsoc.vercel.app/">Conhecer o catálogo</a><button type="button" class="dialog-secondary" data-close>Voltar aos planos</button>`);
  }
  function basicOffer() {
    openDialog(`<span class="eyebrow red">ANTES DE ESCOLHER O BÁSICO</span><h2 id="offer-title">Por mais <span class="red">R$ 9,90</span>,<br>leve os 7 bônus.</h2><p>O Básico custa R$ 10. No Completo, por R$ 19,90, você tem o mesmo acervo e acrescenta:</p><ul>${bonusNames.map(n=>`<li>${n}</li>`).join('')}</ul><button type="button" class="cta" data-upgrade>Quero o Completo por R$ 19,90</button><button type="button" class="dialog-secondary" data-basic-continue>Continuar com o Básico de R$ 10</button><p style="font-size:.65rem">Os planos não controlam os anúncios do player do YouTube.</p>`);
  }
  document.querySelectorAll('[data-plan]').forEach(button => button.addEventListener('click', () => {
    if (button.dataset.plan === 'basico') basicOffer(); else checkout('completo');
  }));
  dialog.addEventListener('click', event => {
    if (event.target === dialog || event.target.closest('.dialog-close') || event.target.closest('[data-close]')) dialog.close();
    else if (event.target.closest('[data-upgrade]')) checkout('completo');
    else if (event.target.closest('[data-basic-continue]')) checkout('basico');
  });
  dialog.addEventListener('close', () => returnFocus?.focus());
  document.querySelectorAll('.shelf').forEach((shelf,index) => {
    const wrap = document.createElement('div'); wrap.className='shelf-wrap';
    shelf.parentNode.insertBefore(wrap,shelf);
    const controls=document.createElement('div');controls.className='shelf-controls';
    controls.innerHTML=`<button type="button" aria-label="Voltar títulos de ${index === 0 ? 'Filosofia' : 'Sociologia'}">‹</button><button type="button" aria-label="Avançar títulos de ${index === 0 ? 'Filosofia' : 'Sociologia'}">›</button>`;
    wrap.append(controls,shelf);
    const buttons=controls.querySelectorAll('button');
    buttons.forEach((button,i)=>button.addEventListener('click',()=>shelf.scrollBy({left:(i?1:-1)*shelf.clientWidth*.75,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})));
  });
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('motion-ready');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
    }), { threshold:0.05 });
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  }
})();
