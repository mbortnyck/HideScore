function inject(css) {
  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = chrome.extension.getURL(css);
  (document.head||document.documentElement).appendChild(style);
}

var pathArray = window.location.hostname.split('.');
if (pathArray[0] == "www") {
  host = pathArray[1];
}
else {
  host = pathArray[0];
}
chrome.storage.sync.get(host, function(val) {
  if (val[host]) {
    inject('styles/' + host + '.css');
  }
});