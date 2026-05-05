document.addEventListener('DOMContentLoaded',()=>{
  const root=document.documentElement,body=document.body;
  const get=(k,d)=>localStorage.getItem(k)||d,set=(k,v)=>localStorage.setItem(k,v);
  let lang=get('kra_lang','en'),scale=parseFloat(get('kra_scale','1'))||1,contrast=get('kra_contrast','0')==='1';

  function t(key,currentText=''){
    const en=window.I18N?.en?.[key];
    const localized=window.I18N?.[lang]?.[key];
    if(localized) return localized;
    if(!en) console.warn(`[i18n] Missing translation key: ${key}`);
    return en || currentText || key;
  }

  function applyTranslations(nextLang){
    lang=(nextLang&&window.I18N?.[nextLang])?nextLang:'en';
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key=el.dataset.i18n;
      el.textContent=t(key,el.textContent.trim());
    });
    root.lang=lang;
    const toggle=document.getElementById('lang-toggle');
    if(toggle) toggle.textContent=t('lang_toggle',toggle.textContent.trim());
  }

  function applyA11y(){root.style.setProperty('--scale',Math.max(.9,Math.min(1.25,scale)));body.classList.toggle('high-contrast',contrast)}

  const langToggle=document.getElementById('lang-toggle');
  if(langToggle){
    langToggle.addEventListener('click',()=>{
      lang=lang==='en'?'hi':'en';
      set('kra_lang',lang);
      applyTranslations(lang);
    });
  }

  const panel=document.getElementById('access-panel'),toggle=document.getElementById('access-toggle');
  if(toggle&&panel){
    toggle.addEventListener('click',()=>{const open=panel.hasAttribute('hidden');panel.toggleAttribute('hidden');toggle.setAttribute('aria-expanded',String(open));});
    panel.addEventListener('click',e=>{const action=e.target.dataset.action;if(!action)return;if(action==='increase-text')scale+=.05;if(action==='decrease-text')scale-=.05;if(action==='high-contrast')contrast=!contrast;if(action==='reset-access'){scale=1;contrast=false}set('kra_scale',String(scale));set('kra_contrast',contrast?'1':'0');applyA11y();});
  }


  const menuToggle=document.querySelector('.menu-toggle');
  const drawer=document.getElementById('mobile-drawer');
  const backdrop=document.querySelector('.drawer-backdrop');
  const closeBtn=document.querySelector('.drawer-close');

  function setDrawer(open){
    if(!menuToggle||!drawer||!backdrop) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    drawer.toggleAttribute('hidden', !open);
    backdrop.toggleAttribute('hidden', !open);
    drawer.dataset.open=String(open);
    backdrop.dataset.open=String(open);
    body.classList.toggle('drawer-open', open);
  }

  if(menuToggle&&drawer&&backdrop){
    menuToggle.addEventListener('click',()=>setDrawer(menuToggle.getAttribute('aria-expanded')!=='true'));
    closeBtn?.addEventListener('click',()=>setDrawer(false));
    backdrop.addEventListener('click',()=>setDrawer(false));
    drawer.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>setDrawer(false)));
  }

  const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
  const lb={"@context":"https://schema.org","@type":"AutoRepair","name":"xxxx Road Assist","legalName":"Blackstone Traders","telephone":"xxxxxx","email":"xxxx@xxxx.com","address":{"@type":"PostalAddress","streetAddress":"xxxx xxxx xxxx","addressLocality":"xxxx","addressRegion":"xxxx","addressCountry":"IN"},"areaServed":"xxxx, xxxx","openingHours":"Mo-Su 00:00-23:59"};
  const faq={"@context":"https://schema.org","@type":"FAQPage","mainEntity":[1,2,3,4,5,6,7,8].map(n=>({"@type":"Question","name":window.I18N.en[`faq_q${n}`],"acceptedAnswer":{"@type":"Answer","text":window.I18N.en[`faq_a${n}`]}}))};
  document.getElementById('localbusiness-schema').textContent=JSON.stringify(lb);document.getElementById('faq-schema').textContent=JSON.stringify(faq);

  applyTranslations(get('kra_lang','en')||'en');
  applyA11y();
});
