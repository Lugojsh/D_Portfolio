/* Fit the hero title to the available width so the oversized type
   always spans edge-to-edge without being clipped by the margins. */
(function(){
  function fit(el){
    var hero = el.closest('.hero') || el.parentElement;
    if(!hero) return;
    var cs = getComputedStyle(hero);
    var avail = hero.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    if(avail <= 0) return;
    // measure at a fixed reference size, then scale linearly
    var ref = 200;
    el.style.fontSize = ref + 'px';
    var w = el.scrollWidth;
    if(!w) return;
    var size = ref * (avail / w);
    // never larger than the design ceiling
    size = Math.min(size, 360);
    el.style.fontSize = size.toFixed(2) + 'px';
  }
  function run(){ document.querySelectorAll('.hero h1').forEach(fit); }
  run();
  window.addEventListener('resize', run);
  window.addEventListener('load', run);
  if(document.fonts && document.fonts.ready){ document.fonts.ready.then(run); }
  requestAnimationFrame(run);
  setTimeout(run, 300);
})();
