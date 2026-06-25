$w.onReady(function () {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://coruscating-mermaid-e2699b.netlify.app/';
  iframe.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;border:none;z-index:99999;';
  iframe.setAttribute('scrolling', 'yes');
  document.body.appendChild(iframe);
});