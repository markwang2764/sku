export function requestURLparas(paras) {
  const url = location.href;
  const paraString = url.substring(url.indexOf('?') + 1, url.length).split('&');
  const paraObj = {};
  let j = null;
  for (let i = 0; i < paraString.length; i++) {
    j = paraString[i];
    const key = j.substring(0, j.indexOf('=')).toLowerCase();
    paraObj[key] = j.substring(j.indexOf('=') + 1, j.length);
  }
  const returnValue = paraObj[paras.toLowerCase()];
  if (typeof (returnValue) === 'undefined') {
    return '';
  }
  return returnValue;
}

export function setupWebViewJavascriptBridge(callback) {
  const u = navigator.userAgent;
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  if (isAndroid) {
    if (window.WebViewJavascriptBridge) { return callback(window.WebViewJavascriptBridge); }
    else {
      window.document.addEventListener(
        'WebViewJavascriptBridgeReady'
        , () => {
          callback(window.WebViewJavascriptBridge);
        },
        false
      );
    }
  }
  else {
    if (window.WebViewJavascriptBridge) { return callback(window.WebViewJavascriptBridge); }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    const WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(() => { document.documentElement.removeChild(WVJBIframe); }, 0);
  }
}
