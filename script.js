
var audio= document.getElementById('audioPlayer');
  audio.volume=0.1;
var centrerTitre=function(){
    var titre=document.getElementById("intro");
    var taille=titre.offsetHeight;
    titre.style.lineHeight=taille.toString()+"px";
}
var fermer=function(param1,param2){
    $(param1).animate({'margin-top':'25%','width':'70px','opacity':'0'},500);
    $(param2).animate({'opacity':'0','width':'70px'},500);
    switch (param1) {
      case '.popLOL':
              $(param1).animate({'margin-top':'0px','width':'0','height':'0'},250);
        break;
      case '.popPGW':
              $(param1).animate({'margin-top':'-250px','width':'0','height':'0'},250);
              $('.popSmash').css({'margin-top':'-320px'});
      default:
              $(param1).animate({'margin-top':'-250px','width':'0','height':'0'},250);
    }
};
var ouvrir=function(){
  $(".screen").animate({'opacity':'1'},100);
  $(".screen").css({'pointer-events':'all'});
};
centrerTitre();
window.addEventListener('resize',centrerTitre,false);

var divx=document.getElementById("terminal");

var player_name="Anonymous",
        Vhelp=0,
        connectRelay=0,
        listDevices=0,
        connectPhone=0,
        trojan=0,
        disconnect=0,
        fini=0,
        popUp=0,
        hacked=0,
        eteint=0,
        animations=0,
        valeurCommandes=[],
        icom=0;

window.setInterval(function(){
    if(popUp==6&&eteint==0){
      eteint=1;
      $('.blueScreen').css({'opacity':'1'});
      var player=document.querySelector('#audioPlayer');
      player.pause();
      setInterval(function() {
        var dstWindow=window.parent;
        dstWindow.postMessage("fini",'*');
      },4000);
    }
    if (fini==0){
      if(animations==0){
        if (Vhelp==1){
            $('#help').css({'text-decoration':'line-through'});
            $('#connectRelay').animate({'opacity':'1'},1000);
            if(connectRelay==1){
                $('#connectRelay').css({'text-decoration':'line-through'});
                $('#listDevices').animate({'opacity':'1'},1000);
                if(listDevices==1){
                    $('#listDevices').css({'text-decoration':'line-through'});
                    $('#connectPhone').animate({'opacity':'1'},1000);
                    if(connectPhone==1){
                        $('#connectPhone').css({'text-decoration':'line-through'});
                        $('#trojan').animate({'opacity':'1'},1000);
                        if(trojan==1){
                            $('#trojan').css({'text-decoration':'line-through'});
                            $('#disconnect').animate({'opacity':'1'},1000);
                            if(disconnect==1){
                                $('#disconnect').css({'text-decoration':'line-through'});

                            }
                        }
                    }
                }
            }
        }
      }
    }else{
        if(hacked==0){
        setTimeout(function(){
          $('#input').animate({'opacity':'0'},1000);
          $('div span').remove();
          $('#terminal').append('<div>A new download started from ssh.whiteHat.onion:<br>Receiving AdsBomb.LGS...<span id="blinking">_</span></div>');
        },1000);
        setTimeout(function() {
          $('div span').remove();
          $('#terminal').append('<div>Sucessfully received AdsBomb.LGS from ssh.whiteHat.onion.LGS<br><br>Loading AdBreak.LGS...<span id="blinking">_</span></div>');
        },2500);
        setTimeout(function() {
          var dstWindow=window.parent;
          dstWindow.postMessage("glitch",'*');    
        },4000);
        setTimeout(function(){
          $('#objectives').animate({'opacity':'0'},1000);
          $('#terminal').animate({'opacity':'0'},1000);
          $('#root').animate({'opacity':'0'},1000);
          ouvrir();
        },5000);
        hacked=1;
        }
    }
    if (disconnect==1 && connectPhone==1 && trojan==1){
        fini=1;
    }
});
    setTimeout(function(){
        $('span').remove();
        $('#terminal').append('<br><div>Welcome to Tor[version 6.5].<br>The Tor Project is a US 501(c)(3) non-profit dedicated to the research,<br> development, and education of online anonymity and privacy.<br><br>' + player_name + ' authenticated.<br>Metaploit ready for use.<br>Use the help command for a list of commands.<br><br><span id="initial-root">$</span>&nbsp;&nbsp;&nbsp;<span id="blinking">_</span></div>');
    },6500);
    $('body').keydown(function(e){
                if(e.which === 38){
            e.preventDefault();
            if(icom<valeurCommandes.length){
              icom+=1;
               $('#input').val(valeurCommandes[(valeurCommandes.length-1)-icom]);
            }
           
          }
    });
        $('body').keydown(function(e){
                if(e.which === 40){
            e.preventDefault();
            if(icom==0){
              $('#input').val('');
            }
          
            if(icom>0){
              icom-=1;
              $('#input').val(valeurCommandes[(valeurCommandes.length-1)-icom]);
            }
          }
    });
    $('#input').keypress(function(e) {
          if(e.which === 13 && $(this).val() != '') {
            e.preventDefault();
            $('div span').remove();
            $('initial-root').remove();


            switch( $(this).val() ) {
              case 'connect BDAAdminPhone':
                  if(connectRelay==1){
                      if(connectPhone==0){
                         $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Connecting...<br>Connected to BDAAdminPhone<br><span id="blinking">_</span></div>');
                         connectPhone=1;
                      }else{
                         $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>You are already connected to BDAAdminPhone.<br><span id="blinking">_</span></div>');
                }
                      }else{
                     $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Error this device doesn\'t exist<br><span id="blinking">_</span></div>');
                  }
                  break;
                case 'talk XploDream':
                  $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;'+$(this).val()+'<br>XploDream: Life is like 69 you get what you give.<br><span id="blinking">_</span></div>');
                  break;
                case 'talk Corniwi':
                  $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;'+$(this).val()+'<br>Corniwi: The lion doesn\'t cooperate with the cockroach.<br><span id="blinking">_</span></div>');
                  break;
                case 'talk CrochetFeve0251':
                  $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;'+$(this).val()+'<br>CrochetFeve0251: No one likes to thank the wind at his back.<br><span id="blinking">_</span></div>');
                  break;
                case 'talk Kostia':
                  $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;'+$(this).val()+'<br>Kostia: But you can call me Emperor.<br><span id="blinking">_</span></div>');
                  break;
                case 'talk Pipo':
                  $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;'+$(this).val()+'<br>Pipo: Better alone than in bad company.<br><span id="blinking">_</span></div>');
                  break;
                case 'connect 124.147.145.125':
                    if(connectRelay==1){
                        if(connectPhone==0){
                           $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Connecting...<br>Connected to BDAAdminPhone<br><span id="blinking">_</span></div>');
                           connectPhone=1;
                        }else{
                           $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>You are already connected to BDAAdminPhone.<br><span id="blinking">_</span></div>');
                  }
                        }else{
                       $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Error this device doesn\'t exist<br><span id="blinking">_</span></div>');
                    }
                      break;
                case '124.147.145.125':
                    if(connectRelay==1){
                        if(connectPhone==0){
                           $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Connecting...<br>Connected to BDAAdminPhone<br><span id="blinking">_</span></div>');
                           connectPhone=1;
                        }else{
                           $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>You are already connected to BDAAdminPhone.<br><span id="blinking">_</span></div>');
                  }
                        }else{
                       $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Error this device doesn\'t exist<br><span id="blinking">_</span></div>');
                    }
                      break;
              case 'nmap -sL phone.relay':
                  if(connectRelay==1){
                      $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Avaible devices:<br>BDAAdminPhone (124.147.145.125)<br>RubenIPhone (89.78.45.12)<br>AxelleAndroidPhone (189.118.45.78)<br>CyrilleAsusPhone (8.8.8.8)<br>PierreAndroidPhone (6.78.125.12)<br>NicolasIPhone (45.69.78.112)<br><span id="blinking">_</span></div>');
                        listDevices=1;
                  }else{
                      $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Avaible devices:<br>LGS\'s Computer (127.0.0.1)<br><span id="blinking">_</span></div>');
                  }
                  break;
              case 'connect 127.0.0.1':
                $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;'+$(this).val()+'<br> Error you can\'t connect to your own device<br><span id="blinking">_</span></div>')
              break;
              case 'host':
                  $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Anonymous@ssh.laguildesudria.onion<br><span id="blinking">_</span></div>');
                  break;
              case 'help':
                $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>List of commands:<br>help - Show this message (command list)<br>connect [DNS name] - Connects host computer with the targeted DNS name<br>disconnect - Disconnects host computer from the connected DNS name<br>exit - Shuts down host computer<br>send [application type] - Sends given application name to the connected DNS name<br>host - Show your current host<br>nmap -sL [domain] - Scan the domain and list the connected devices<br>talk -Show your contacts<br><span id="blinking">_</span></div>');
                Vhelp = 1;
                break;
              case 'connect phone.relay':
                if (connectRelay === 0) {
                  $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Connecting...<br>Connected.<br><span id="blinking">_</span></div>');
                  connectRelay = 1;
                } else {
                  $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>You are already connected to nearest.phone.relay.<br><span id="blinking">_</span></div>');
                }
                break;
              case 'send trojan':
                if (connectRelay === 1) {
                  $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Sending Trojan.Vaklik.BBB...<br>Trojan.Vaklik.BBB sent.<br><span id="blinking">_</span></div>');
                  trojan = 1;
                } else {
                  $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>You are not connected to any DNS name.<br><span id="blinking">_</span></div>');
                }
                break;
              case 'send adware':
                if (connectRelay === 1) {
                  $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Sending AdBreak...<br>Unable to send AdBreak.<span id="blinking">_</span></div>');
                } else {
                  $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>You are not connected to any DNS name.<br><span id="blinking">_</span></div>');
                }
                break;
              case 'talk':
                $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br> Contacts :<br>XploDream<br>Corniwi<br>CrochetFeve0251<br>Kostia<br>Pipo<br><span id="blinking">_</span></div>');
              break;
              case 'disconnect':
                if (connectRelay === 1) {
                  if(trojan==1){
                    $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Disconnecting...<br>Error can\'t disconnect a connection can\'t be stoppped.<br><span id="blinking">_</span></div>');
                    disconnect = 1;
                  }else{
                    $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Disconnecting...<br>Disconnected<br><span id="blinking">_</span></div>');
                  connectPhone=0;
                  connectRelay=0;
                }
                } else {
                  $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>You are not connected to any DNS name.<br><span id="blinking">_</span></div>');
                }
                break;
              case 'exit':
                animations=1;
                $('#terminal').animate({'opacity': '0'}, 1000);
                $('#root').animate({'opacity': '0'}, 1000);
                $('input').animate({'opacity': '0'}, 1000);
                $('#objectives').animate({'opacity': '0'}, 1000);
                $('#time').animate({'opacity': '0'}, 1000);
                var dstWindow=window.parent;
                dstWindow.postMessage("stop",'*');
                Vhelp=0;
                connectRelay=0;
                listDevices=0;
                connectPhone=0;
                trojan=0;
                disconnect=0;
                fini=0;
                popUp=0;
                hacked=0;
                eteint=0;
                $('#objectives li').css({'text-decoration':'none'});
                $('#terminal').animate({'opacity': '1'}, 1000);
                $('#root').animate({'opacity': '1'}, 1000);
                $('input').animate({'opacity': '1'}, 1000);
                $('#objectives').animate({'opacity': '1'}, 1000);
                $('#time').animate({'opacity': '1'}, 1000);
                $('#terminal').empty();
                $('#terminal').append("<div>Loading...</div>");
                $('#terminal').append('<br><div>Welcome to Tor[version 6.5].<br>The Tor Project is a US 501(c)(3) non-profit dedicated to the research,<br> development, and education of online anonymity and privacy.<br><br>' + player_name + ' authenticated.<br>Metaploit ready for use.<br>Use the help command for a list of commands.<br><br><span id="initial-root">$</span>&nbsp;&nbsp;&nbsp;<span id="blinking">_</span></div>');
                $('#help').css({'opacity':'1'});
                setTimeout(function(){
                    var dstWindow=window.parent;
                    dstWindow.postMessage("glitch",'*');
                    animations=0;
                },3000);
                break;
              default:
                if(($(this).val()).indexOf('nmap -sL')!=-1){
                    $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Error permission denied<br><span id="blinking">_</span></div>');
                }else if(($(this).val()).indexOf('nmap')!=-1){
                    $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Parameter not recognized. Type in help for a list of commands.<br><span id="blinking">_</span></div>');
                }else if((($(this).val()).indexOf('connect')!=-1)||(($(this).val()).indexOf('89.78.45.12')!=-1)){
                  if ((($(this).val()).indexOf('RubenIPhone')!=-1)||(($(this).val()).indexOf('89.78.45.12')!=-1)(($(this).val()).indexOf('AxelleAndroidPhone')!=-1)||(($(this).val()).indexOf('189.118.45.78')!=-1)||(($(this).val()).indexOf('CyrilleAsusPhone')!=-1)||(($(this).val()).indexOf('8.8.8.8')!=-1)||(($(this).val()).indexOf('PierreAndroidPhone')!=-1)||(($(this).val()).indexOf('6.78.125.12')!=-1)||(($(this).val()).indexOf('189.118.45.78')!=-1)||(($(this).val()).indexOf('NicolasIPhone')!=-1)||(($(this).val()).indexOf('45.69.78.112')!=-1)) {
                    $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Error permission denied<br><span id="blinking">_</span></div>');
                  } else {
                    $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Error this device doesn\'t exist<br><span id="blinking">_</span></div>');
                  }
                }else{
                $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Command not recognized. Type in help for a list of commands.<br><span id="blinking">_</span></div>');
              }
              if(($(this).val()).indexOf('talk')!=-1){
                $('#terminal').append('<div>$&nbsp;&nbsp;&nbsp;' + $(this).val() + '<br>Error this  contact doesn\'t exit<br><span id="blinking">_</span></div>');
              }
                }
            $('#terminal').append('<br>');

            divx.scrollTop = divx.scrollHeight;
            valeurCommandes.push($(this).val());
            icom=-1;
            $(this).val('');
          }
      });