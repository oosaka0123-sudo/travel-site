/* SHIZUNAMI shared navigation & native share: no external dependencies */
(function(){
  'use strict';
  const menu = document.getElementById('yd-menu');
  const panel = document.getElementById('yd-menu-panel');
  const close = document.getElementById('yd-menu-close');
  const share = document.getElementById('yd-share');
  const bar = document.querySelector('[data-yd-header]');
  const toast = document.getElementById('yd-toast');
  const logo = document.querySelector('.yd-brand');
  if (!menu || !panel || !close || !share || !bar || !toast) return;
  const logoImg = logo && logo.querySelector('img');
  if(logoImg){
    logoImg.addEventListener('error', function(){logo.classList.add('is-fallback');},{once:true});
    if(logoImg.complete && logoImg.naturalWidth === 0) logo.classList.add('is-fallback');
  }
  let previousFocus = null;
  function openMenu(){
    previousFocus = document.activeElement;
    panel.hidden = false;
    panel.removeAttribute('inert');
    panel.setAttribute('aria-hidden','false');
    menu.setAttribute('aria-expanded','true');
    document.body.classList.add('yd-scroll-locked');
    close.focus({preventScroll:true});
  }
  function closeMenu(){
    menu.setAttribute('aria-expanded','false');
    panel.setAttribute('aria-hidden','true');
    panel.setAttribute('inert','');
    panel.hidden = true;
    document.body.classList.remove('yd-scroll-locked');
    if (previousFocus && document.contains(previousFocus)) previousFocus.focus({preventScroll:true});
    previousFocus = null;
  }
  menu.addEventListener('click',()=>panel.hidden?openMenu():closeMenu());
  close.addEventListener('click',closeMenu);
  panel.addEventListener('click',e=>{
    if(e.target === panel || e.target.closest('.yd-overlay__nav a')) closeMenu();
  });
  document.addEventListener('keydown',e=>{
    if(panel.hidden) return;
    if(e.key === 'Escape'){e.preventDefault();closeMenu();return;}
    if(e.key !== 'Tab')return;
    const focusable=[...panel.querySelectorAll('button:not([disabled]),a[href]')];
    if(!focusable.length)return;
    if(e.shiftKey && document.activeElement===focusable[0]){e.preventDefault();focusable[focusable.length-1].focus();}
    else if(!e.shiftKey && document.activeElement===focusable[focusable.length-1]){e.preventDefault();focusable[0].focus();}
  });
  const path=window.location.pathname.split('/').pop()||'index.html';
  panel.querySelectorAll('.yd-overlay__nav a').forEach(a=>{
    if(a.getAttribute('href')==='./'+path)a.setAttribute('aria-current','page');
  });
  function updateScroll(){bar.classList.toggle('is-scrolled',window.scrollY>24)}
  updateScroll();window.addEventListener('scroll',updateScroll,{passive:true});
  let notificationTimer;
  function notify(message){
    toast.textContent=message;
    toast.hidden=false;
    clearTimeout(notificationTimer);
    notificationTimer=setTimeout(()=>toast.hidden=true,2800);
  }
  const link=new URL(window.location.pathname, window.location.origin).href;
  async function copyLink(){
    try{
      if(navigator.clipboard && window.isSecureContext){await navigator.clipboard.writeText(link);return true;}
      const field=document.createElement('textarea');
      field.value=link;field.setAttribute('readonly','');field.style.position='fixed';field.style.opacity='0';
      document.body.appendChild(field);field.select();
      const ok=document.execCommand('copy');field.remove();return ok;
    }catch(e){return false;}
  }
  share.addEventListener('click',async()=>{
    if(navigator.share){
      try{await navigator.share({title:document.title,url:link});return;}
      catch(e){if(e && e.name==='AbortError')return;}
    }
    if(await copyLink())notify('ページのリンクをコピーしました');
    else window.prompt('このリンクをコピーしてください',link);
  });
})();
