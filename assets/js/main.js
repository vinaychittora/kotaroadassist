(()=>{
  const root=document.documentElement,body=document.body;
  const get=(k,d)=>localStorage.getItem(k)||d,set=(k,v)=>localStorage.setItem(k,v);
  let lang=get('kra_lang','en'),scale=parseFloat(get('kra_scale','1'))||1,contrast=get('kra_contrast','0')==='1';
  function applyI18n(){document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n; if(window.I18N[lang]?.[k]) el.textContent=window.I18N[lang][k];});root.lang=lang;document.getElementById('lang-toggle').textContent=window.I18N[lang].lang_toggle;}
  function applyA11y(){root.style.setProperty('--font-scale',Math.max(.9,Math.min(1.25,scale)));body.classList.toggle('high-contrast',contrast)}
  document.getElementById('lang-toggle').addEventListener('click',()=>{lang=lang==='en'?'hi':'en';set('kra_lang',lang);applyI18n();});
  const panel=document.getElementById('access-panel'),toggle=document.getElementById('access-toggle');
  toggle.addEventListener('click',()=>{const open=panel.hasAttribute('hidden');panel.toggleAttribute('hidden');toggle.setAttribute('aria-expanded',String(open));});
  panel.addEventListener('click',e=>{const action=e.target.dataset.action;if(!action)return;if(action==='increase-text')scale+=.05;if(action==='decrease-text')scale-=.05;if(action==='high-contrast')contrast=!contrast;if(action==='reset-access'){scale=1;contrast=false}set('kra_scale',String(scale));set('kra_contrast',contrast?'1':'0');applyA11y();});
  document.getElementById('year').textContent=new Date().getFullYear();
  const lb={"@context":"https://schema.org","@type":"AutoRepair","name":"Kota Road Assist","legalName":"Blackstone Traders","telephone":"+91-9649289546","email":"blackstonetraderskota@gmail.com","address":{"@type":"PostalAddress","streetAddress":"H.No. 4-K-32, Mahaveer Nagar III","addressLocality":"Kota","addressRegion":"Rajasthan","addressCountry":"IN"},"areaServed":"Kota, Rajasthan","openingHours":"Mo-Su 00:00-23:59"};
  const faq={"@context":"https://schema.org","@type":"FAQPage","mainEntity":[1,2,3,4,5,6,7,8].map(n=>({"@type":"Question","name":window.I18N.en[`faq_q${n}`],"acceptedAnswer":{"@type":"Answer","text":window.I18N.en[`faq_a${n}`]}}))};
  document.getElementById('localbusiness-schema').textContent=JSON.stringify(lb);document.getElementById('faq-schema').textContent=JSON.stringify(faq);
  applyI18n();applyA11y();
})();
