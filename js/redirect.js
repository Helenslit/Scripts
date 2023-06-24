function redirectDomain(){
  if(window.location.protocol !== 'https:') {
window.location.replace(`https:${location.href.substring(window.location.protocol.length)}`);
}
  if(window.location.hostname.startsWith("www.")) {
window.location.href=`https://${window.location.hostname.substring(4)}${window.location.pathname}`
}

}

redirectDomain();