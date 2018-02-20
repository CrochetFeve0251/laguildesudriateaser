var switchB=document.getElementById("switch");
switchB.checked=true;

function onMessage(e){
  var message=JSON.stringify(e.data);
    var switchB=document.getElementById("switch");
    switchB.checked=false;
    if (message=='"glitch"'){
    setTimeout(function() {
      var switchB=document.getElementById("switch");
      switchB.checked=true;
    },100);
    }
}
window.addEventListener("message",onMessage,true);
