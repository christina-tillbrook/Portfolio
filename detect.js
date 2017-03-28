<!--
//navigator
if (navigator.appName == 'Netscape')
{
//Mac
if (navigator.appVersion.indexOf("Macintosh") > -1 )
document.write("<link rel='stylesheet' href='css/macnet.css'>");
//PC
else
document.write("<link rel='stylesheet' href='css/pcnet.css'>");
}
//ie
else
{
//Mac
if (navigator.appVersion.indexOf("Macintosh") > -1 )
document.write("<link rel='stylesheet' href='css/macie.css'>");
//PC
else
document.write("<link rel='stylesheet' href='css/pcie.css'>");
}
if(!window.saveInnerWidth) {
window.onresize = resize;
window.saveInnerWidth = window.innerWidth;
window.saveInnerHeight = window.innerHeight;
}
function resize() {
if (saveInnerWidth < window.innerWidth ||
saveInnerWidth > window.innerWidth || 
saveInnerHeight > window.innerHeight ||
saveInnerHeight < window.innerHeight )
{
window.history.go(0);
}
}
//-->
