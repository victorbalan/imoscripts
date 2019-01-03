javascript:(function(){
  let scriptSrc = '';
  const wloc = window.location.host; 
  if(wloc.indexOf('weltimobiliare') !== -1) {
    scriptSrc = 'https://cdn.jsdelivr.net/gh/victorbalan/imoscripts@0.6/welt.js';
  } else {
    alert('Site ul ' + wloc + ' nu este suportat inca'); 
  }
  document.body.appendChild(document.createElement('script')).src=scriptSrc;
})();
