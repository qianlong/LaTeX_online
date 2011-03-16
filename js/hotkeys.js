/****************
* JS of Hotkeys Settings
* Editor: Qianlong ZHAO
*****************/
$(document).ready(function(){
   $('#editor').keydown(function(e) {
        var key;
        if(window.event){        //IE
            key=e.event;
        }else if(e.which){        //netscape/firefox/opera
            key=e.which;
        }
      //  alert(key);
        if(key==18){
	    $('#editor').keydown(function(e) {
		var key2;
		if(window.event){        //IE
		    key2=e.event;
		}else if(e.which){        //netscape/firefox/opera
		    key2=e.which;
		}
	//	alert(key);
		if(key2==73){
		    $.markItUp({ openWith:'\\item ', closeWith:''});
		}
	    });	    
	}
   });
});